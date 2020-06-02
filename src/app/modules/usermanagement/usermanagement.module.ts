import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { UsermanagementRoutingModule } from './usermanagement-routing.module';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { AddrolesComponent } from './manageroles/addroles/addroles.component';
import { ModifyrolesComponent } from './manageroles/modifyroles/modifyroles.component';
import { AddusersComponent } from './manageusers/addusers/addusers.component';
import { ModifyusersComponent } from './manageusers/modifyusers/modifyusers.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbdSortableHeader } from 'src/app/utils/directives/ngbootstraptables/sortable.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ManageusersComponent, 
    ManagerolesComponent, 
    AddrolesComponent, 
    ModifyrolesComponent,
    AddusersComponent, 
    ModifyusersComponent,
    NgbdSortableHeader
  ],
  imports: [
    CommonModule,
    UsermanagementRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [DecimalPipe],
})
export class UsermanagementModule { }
