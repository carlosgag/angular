import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';


import { Site } from './entities/Site';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class SiteService {

	private sitesUrl = 'https://api.mercadolibre.com/sites';

  constructor(
  		private http: HttpClient,
  		private messageService: MessageService
  	) { }

  getSites(): Observable<Site[]> {

  	return this.http.get<Site[]>(this.sitesUrl)
  		.pipe(
  			tap(sites => this.log('fetched sites')),
  			catchError(this.handleError('getSites', []))
  			);
  } 

  private handleError<T> (operation = 'operation', result?: T) {
  	return(error: any): Observable<T> => {
  		console.error(error);
  		this.log(`${operation} failed: ${error.message}`);
  		return of(result as T);
  	};
  }

  private log(message : string) {
  	this.messageService.add(`SiteService: ${message}`);
  }
}
