import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { LayoutOutletComponent } from './layout-outlet/layout-outlet.component';
import { AuthGuard } from 'src/app/utils/guards/auth.guard';
import { Role } from 'src/app/utils/models/role/role';


const routes: Routes = [
  {
    path: '',
    component: LayoutOutletComponent,
    canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'usermanagement',
        loadChildren: () => import('../../modules/usermanagement/usermanagement.module').then(m => m.UsermanagementModule)
      },
      {
        path: 'customermanagement',
        loadChildren: () => import('../../modules/customermanagement/customermanagement.module').then(m => m.CustomermanagementModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('../../modules/reports/reports.module').then(m => m.ReportsModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('../../modules/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'usersettings',
        loadChildren: () => import('../../modules/user-settings/user-settings.module').then(m => m.UserSettingsModule)
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

// export function matcherFunction(url: UrlSegment[]) {
//   debugger;
//   if (url.length == 1) {
//       const path = url[0].path;
//        if(path.startsWith('manageusers') 
//          || path.startsWith('manageroles')){
//         return {consumed: url};
//       }
//   }
//   return null;
// }
