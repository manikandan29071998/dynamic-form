import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
/* panel */
import { AccordionModule } from 'primeng/accordion';
// import { AutoCompleteModule } from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';
/* buttom */
import { ButtonModule } from 'primeng/button';
/* input */
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
/* data */
// import { CarouselModule } from 'primeng/carousel';
/* chart */
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ChipModule } from 'primeng/chip';
import { ColorPickerModule } from 'primeng/colorpicker';
/* overlay */
import { ConfirmDialogModule } from 'primeng/confirmdialog';
// import { ContextMenuModule } from 'primeng/contextmenu';
// import { DataViewModule } from 'primeng/dataview';
// import { DeferModule } from 'primeng/defer';
import { DialogModule } from 'primeng/dialog';
/* drag , deop */
// import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
// import { EditorModule } from 'primeng/editor';
// import { FieldsetModule } from 'primeng/fieldset';
/* file*/
// import { FileUploadModule } from 'primeng/fileupload';
/* multimedia */
// import { GalleriaModule } from 'primeng/galleria';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
// import { KeyFilterModule } from 'primeng/keyfilter';
// import { ListboxModule } from 'primeng/listbox';
// import { MegaMenuModule } from 'primeng/megamenu';
/* menu */
import { MenuModule } from 'primeng/menu';
// import { MenubarModule } from 'primeng/menubar';
// import { MessageModule } from 'primeng/message';
/* messages */
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
// import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
// import { PaginatorModule } from 'primeng/paginator';
// import { PanelModule } from 'primeng/panel';
// import { PanelMenuModule } from 'primeng/panelmenu';
// import { PickListModule } from 'primeng/picklist';
// import { ProgressBarModule } from 'primeng/progressbar';
// import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
// import { RatingModule } from 'primeng/rating';
import { ScrollerModule } from 'primeng/scroller';
// import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
// import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
// import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
// import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
// import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { TimelineModule } from 'primeng/timeline';
// import { ToggleButtonModule } from 'primeng/togglebutton';
// import { ToolbarModule } from 'primeng/toolbar';
// import { TooltipModule } from 'primeng/tooltip';
// import { TreeModule } from 'primeng/tree';
import { EditorModule } from 'primeng/editor';
import { TreeTableModule } from 'primeng/treetable';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { DividerModule } from 'primeng/divider';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessageService, ConfirmationService } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
@NgModule({
  imports: [CommonModule],
  exports: [
    ButtonModule,
    ToastModule,
    CardModule,
    TabViewModule,
    TableModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    DropdownModule,
    DividerModule,
    ScrollerModule,
    InputSwitchModule,
    ColorPickerModule,
    MessagesModule,
    MenuModule,
    RadioButtonModule,
    CalendarModule,
    SelectButtonModule,
    MultiSelectModule,
    OverlayPanelModule,
    SplitButtonModule,
    DynamicDialogModule,
    AvatarModule,
    AvatarGroupModule,
    EditorModule,
    ChipsModule,
    ChipModule,
    // ListboxModule,
    SliderModule,
    TriStateCheckboxModule,
    // AutoCompleteModule,
    CheckboxModule,
    // // EditorModule,
    PasswordModule,
    // RatingModule,
    // SpinnerModule,
    // ToggleButtonModule,
    // CarouselModule,
    OrganizationChartModule,
    // PickListModule,
    // TableModule,
    TreeTableModule,
    // DataViewModule,
    // OrderListModule,
    // PaginatorModule,
    // TreeModule,
    AccordionModule,
    // FieldsetModule,
    // ScrollPanelModule,
    // PanelModule,
    // ToolbarModule,
    ConfirmDialogModule,
    SidebarModule,
    // TooltipModule,
    // FileUploadModule,
    // ContextMenuModule,
    // PanelMenuModule,
    StepsModule,
    TimelineModule,
    // TieredMenuModule,
    BreadcrumbModule,
    // MegaMenuModule,
    // MenubarModule,
    // SlideMenuModule,
    // TabMenuModule,
    ChartModule,
    // MessageModule,
    // GalleriaModule,
    // DragDropModule,
    // ProgressBarModule,
    // ProgressSpinnerModule,
    // DeferModule,
    // KeyFilterModule,
  ],
  providers: [DialogService, MessageService, ConfirmationService],
})
export class PrimengModule {}
