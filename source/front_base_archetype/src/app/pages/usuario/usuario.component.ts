import { Component, OnInit, TemplateRef } from '@angular/core';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioUpdateEntity } from './usuario-update/usuarioUpdate.entity';
import { RolEntity } from './rol/rol.entity';
import { UsuarioService } from './usuario.service';
import { RolService } from './rol/rol.service';
import { ConfirmationService, SelectItem } from 'primeng/api';
import { StatusService } from './status/status.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from '../../core/services/toast.service';
import { ProfileEntity } from './profile/profile.entity';
import { ProfileService } from './profile/profile.service';
import { ConsoleLogger } from '@angular/compiler-cli';
import { empty } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { StatusEntity } from './status/status.entity';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { userError } from '@angular/compiler-cli/src/transformers/util';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit 
{
  users: UsuarioEntity[];
  user: UsuarioEntity = new UsuarioEntity;
  emptyUser: UsuarioEntity = new UsuarioEntity;

  userUpdate: UsuarioUpdateEntity = new UsuarioUpdateEntity;

  fullNames: string[];
  selectedFullName: string;

  logins: string[];
  selectedLogin: string;

  roles: RolEntity[];
  selectedRole: RolEntity;

  status: StatusEntity[];
  selectedStatus: string;

  perfilesTotales: ProfileEntity[];
  perfilesAsignados: ProfileEntity[];
  perfilesDisponibles: ProfileEntity[];

  display: boolean = false;
  esEditado: boolean = false;
  popUpTitle: string;

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  selectedState: any = null;

  first = 0;

  rows = 20;

  saveForm: FormGroup;

  apellidos: string[];

  item: MenuItem = { label: this.translate.instant('menu.usuarios'), url: '/main/usuario' };

  constructor(
    private userService: UsuarioService, 
    private rolService: RolService,
    private statusService: StatusService,
    private toastService: ToastService,
    private confirmationService: ConfirmationService,
    private translate: TranslateService,
    private profileService: ProfileService,
    private layoutService: LayoutService,
    private formBuilder: FormBuilder) 
  { 

  }

  ngOnInit(): void {
    this.layoutService.setTitulo('Usuarios');
    this.layoutService.deleteItems();
    this.layoutService.setItems(this.item);
    this.cargaUsuarios();
    this.saveForm = new FormGroup({
      'login': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
    });
  }

  cargaUsuarios(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      users.map(user => {
        user.fullName = user.lastname.concat(' ').concat(user.surname)}
      )});

    this.profileService.getProfiles().subscribe(profiles => {
      this.perfilesTotales = profiles;
    });  
    this.perfilesAsignados = [];
    this.perfilesDisponibles = [];

    this.roles = this.rolService.getRoles();

    this.status = this.statusService.getStatus();
  }

  next(): void {
    this.first = this.first + this.rows;
  }

  prev(): void {
    this.first = this.first - this.rows;
  }

  reset(): void {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.users ? this.first === (this.users.length - this.rows): true;
  }

  isFirstPage(): boolean {
    return this.users ? this.first === 0 : true;
  }

  showDialog(user: UsuarioEntity): void {
    if (user.login == null || user.login == "") {
      this.popUpTitle = 'Agregar usuario';
      this.esEditado = false;
      this.user = new UsuarioEntity;
    }
    else {
      this.popUpTitle = 'Editar usuario';
      this.esEditado = true;
      this.user = user;
      this.profileService.getUserProfiles(user).subscribe(profiles => {
        this.perfilesAsignados = profiles;
      });
    }

    this.perfilesDisponibles = this.perfilesTotales;
      this.perfilesDisponibles.filter(n => !this.perfilesAsignados.includes(n));
    this.display = true;
    
    console.log("------")
    console.log("Usuario seleccionado: " + user.login);
    console.log("Usuario seleccionado: " + user.active);
    console.log("This.user: " + this.user.login);
    console.log("This.user: " + this.user.active);
    console.log("Usuario vacío: " + this.emptyUser.login);
    console.log("Usuario vacío: " + this.emptyUser.active);
  }

  changeStatus(): void {
    this.confirmationService.confirm({
      message: this.translate.instant('alertas.alertaCambiarEstado')   
    })
  }

  onSubmit(): void {
    console.log("Entra en onSubmit");
    console.log("This.user: " + this.user);
  }

  save(user: UsuarioEntity): void { 
    user.profiles = this.perfilesAsignados;

    if (!this.esEditado) {
      this.confirmationService.confirm({
        message: this.translate.instant('alertas.alertaGuardar'),
        accept: () => {
          this.userService.saveUser(user).subscribe(usuario => {
            this.cargaUsuarios();
            this.display = false; 
            this.toastService.addSingle('success', '', this.translate.instant('alertas.regGuardado'), false);
          });
        }
      });
    }
    else {
      this.generateUserUpdate(user);
      this.confirmationService.confirm({
        message: this.translate.instant('alertas.alertaGuardar'),
        accept: () => {
          this.userService.editUser(this.userUpdate).subscribe(usuario => {
            this.cargaUsuarios();
            this.display = false;          
            this.toastService.addSingle('success', '', this.translate.instant('alertas.regEditado'), false);
          });
        }
      });
      console.log(this.userUpdate);
    }
    
    this.resetData;
  }

  generateUserUpdate(user: UsuarioEntity): void {
    this.userUpdate.loginOriginal = user.login  
    this.userUpdate.userAudit = "";

    this.userUpdate.login = user.login;
    this.userUpdate.lastname = user.lastname;

    this.apellidos = user.surname.trim().split(" ");
    this.userUpdate.surname = this.apellidos[0];
    this.userUpdate.segundoApellido = this.apellidos[1];

    this.userUpdate.roles[0].codeRol = user.codeRol;
    this.userUpdate.centros[0].active = user.active;
  }

  resetData(): void {
    this.user = this.emptyUser;
    this.perfilesAsignados = [];
    this.perfilesDisponibles = [];
    this.esEditado = false;
  }

  delete(usuario: UsuarioEntity): void {
    this.confirmationService.confirm({
      message: this.translate.instant('alertas.alertaEliminar'),
      accept: () => {
        this.userService.deleteUser(usuario).subscribe(usuario => {
          this.cargaUsuarios();
          this.toastService.addSingle('warn', '', this.translate.instant('alertas.regEliminado'), false);
        });       
      }
    });
  }  
}