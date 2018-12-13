import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionsComponent } from './accordions/accordions.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsComponent } from './forms/forms.component';
import { IconsComponent } from './icons/icons.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { TablesComponent } from './tables/tables.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { TypographyComponent } from './typography/typography.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CompanyComponent } from './company/company.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ViewFileComponent } from './view-file/view-file.component';
import { UploadResultComponent } from './upload-result/upload-result.component';
import { PredictedFilesComponent } from './predicted-files/predicted-files.component';
import { ClusteringComponent } from './clustering/clustering.component';
import { ClassifyComponent } from './classify/classify.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordions', component: AccordionsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'progressbar', component: ProgressbarComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'dropdowns', component: DropdownComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'tabs', component: TabsComponent },//demo
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'uploadFile', component: UploadFileComponent },
  { path: 'viewFile', component: ViewFileComponent },
  { path: 'uploadResult', component: UploadResultComponent },
  { path: 'predictedFiles', component: PredictedFilesComponent },
  { path: 'clustering', component: ClusteringComponent },
  { path: 'classify/:id', component: ClassifyComponent },
  { path: 'forgot', component: ForgotPassComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
