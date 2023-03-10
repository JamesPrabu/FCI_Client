import { Component, OnInit } from '@angular/core';
import { childRoutes } from 'src/app/admin/child-routes';
// import { childRoutes } from '../../child-routes';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {
  showMenu = false;
  routes = childRoutes.filter(x => x.path != 'sales_dashboard');
  constructor() {}

  ngOnInit() {}
}
