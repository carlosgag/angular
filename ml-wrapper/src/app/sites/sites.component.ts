import { Component, OnInit } from '@angular/core';
import { Site } from '../entities/site';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

	sites: Site [];
	columnDefs = [
		{
			headerName: 'id',
			field: 'id'
		},
		{
			headerName: 'name',
			field: 'name'
		}
	];

  constructor(
  		private siteService: SiteService
  	) { }

  ngOnInit() {
  	this.getSites();
  }

  getSites(): void {
  	this.siteService.getSites().subscribe(sites => this.sites = sites);
  }

}
