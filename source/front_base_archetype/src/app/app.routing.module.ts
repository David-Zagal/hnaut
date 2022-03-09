import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'browser-not-supported',
        loadChildren: () => import('./browser-not-supported/browser-not-supported.module').then(m => m.BrowserNotSupportedModule)
    },
    /*{
        path: 'register',
        loadChildren: () => import('./register-user/register-user.module').then(m => m.RegisterUserModule)
    },*/
    {
        path: 'main',
        component: LayoutComponent,
        children: [{
            path: 'pruebas/:',
            loadChildren: () => import('./pages/pruebas/pruebas.module').then(m => m.PruebasModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'listado/:',
            loadChildren: () => import('./pages/listado/listado.module').then(m => m.ListadoModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'documentum/:',
            loadChildren: () => import('./pages/documentum/documentum.module').then(m => m.DocumentumModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'usuario/:',
            loadChildren: () => import('./pages/usuario/usuario.module').then(m => m.UsuarioModule),
            canActivate: [AuthGuard]
        }]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true, relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }