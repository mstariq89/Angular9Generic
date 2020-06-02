import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/utils/models/ngbootstraptables/country';
import { NgbdSortableHeader, SortEvent } from 'src/app/utils/directives/ngbootstraptables/sortable.directive';
import { CountryService } from 'src/app/utils/services/ngbootstraptables/country.service';
import { Sweetalert2Service } from 'src/app/utils/services/sweetalert2/sweetalert2.service';
declare var $: any;

@Component({
  selector: 'app-modifyusers',
  templateUrl: './modifyusers.component.html',
  styleUrls: ['./modifyusers.component.scss']
})
export class ModifyusersComponent implements OnInit {

  countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService,private sweetalert2Svc : Sweetalert2Service) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
    console.log("Resp",this.countries$);
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  ngOnInit(): void {
    $('[data-toggle="tooltip"]').tooltip();
  }

  deleteUser(){
    this.sweetalert2Svc.sweetalertDelete();
  }

  

}
