import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';

import * as $ from 'jquery';
import * as AdminLte from 'admin-lte';
import { AppService } from 'src/app/utils/services/app/app.service';
import { User } from 'src/app/utils/models/user/user';
import { Role } from 'src/app/utils/models/role/role';
import { AuthenticationService } from 'src/app/utils/services/authentication/authentication.service';

@Component({
  selector: 'app-menu-navigation',
  templateUrl: './menu-navigation.component.html',
  styleUrls: ['./menu-navigation.component.scss']
})
export class MenuNavigationComponent implements OnInit, AfterViewInit {
  @ViewChild('mainSidebar', { static: false }) mainSidebar;
  @Output() mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();
  user: User;

  constructor(public appService: AppService,private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(x => this.user = x);
  }

  get isAdmin() {
    return this.user && this.user.role === Role.Admin;
}

  ngOnInit() {
    // $(document).ready(() => {
    //   const trees: any = $('[data-widget="tree"]');
    //   trees.tree();
    // });
  }

  ngAfterViewInit() {
    $('[data-widget="treeview"]').each(function() {
      AdminLte.Treeview._jQueryInterface.call($(this), 'init');
  });
    this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
  }

}
