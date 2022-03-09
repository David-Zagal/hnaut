import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { TreeSelectModule } from 'primeng/treeselect';
import { PaginatorModule } from 'primeng/paginator';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { MegaMenuModule } from 'primeng/megamenu';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
    exports: [
        InputTextModule,
        TreeSelectModule,
        ConfirmDialogModule,
        ButtonModule,
        PanelModule,
        ToastModule,
        MegaMenuModule,
        TableModule,
        AccordionModule,
        MessageModule,
        CardModule,
        ChartModule,
        ProgressSpinnerModule,
        OverlayPanelModule,
        BreadcrumbModule,
        CalendarModule,
        SidebarModule,
        DynamicDialogModule,
        InputTextareaModule,
        MessagesModule,
        SelectButtonModule,
        DataViewModule,
        PaginatorModule,
        DialogModule,
        CheckboxModule,
        RadioButtonModule,
        TabViewModule,
        FileUploadModule
    ]
})
export class NgPrimeModule { }
