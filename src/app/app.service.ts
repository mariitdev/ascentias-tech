import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppService {
	private mailApi = 'https://mailthis.to/codeninja'
	baseUrl = 'http://localhost/ascentias-api';
	errorData: {};

  	/*httpOptions = {
    	headers: new HttpHeaders({'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'})
  	};*/
  	constructor(private http: HttpClient) { }
	/*getAll() {
	  return this.http.get(`${this.baseUrl}/list`).pipe(
	    map((res: any) => {
	      return res['data'];
	    })
	  );
	}*/
	/*PostMessage(input: any) {
	    return this.http.post(this.mailApi, input, { responseType: 'text' })
	      .pipe(
	        map(
	          (response) => {
	            if (response) {
	              return response;
	            }else{
	              return null;
	            }
	          },
	          (error: any) => {
	            return error;
	          }
	        )
	      )
	}*/
	contactForm(input: any) {
	    /*return this.http.post(this.ServerUrl + '/contact', input, this.httpOptions)
	    .pipe(
	      
	        map(
	          (response) => {
	            if (response) {
	              return response;
	            }else{
	              return null;
	            }
	          },
	          (error: any) => {
	            return error;
	          }
	        )
	    );*/
	    return this.http.post(`${this.baseUrl}/contact`, input).pipe(
	    map(
	          (response) => {
	            if (response) {
	              return response;
	            }else{
	              return null;
	            }
	          },
	          (error: any) => {
	            return error;
	          }
	        )
	    );
	}

	/*private handleError(error: HttpErrorResponse) {
	    if (error.error instanceof ErrorEvent) {

	      // A client-side or network error occurred. Handle it accordingly.

	      console.error('An error occurred:', error.error.message);
	    } else {

	      // The backend returned an unsuccessful response code.

	      // The response body may contain clues as to what went wrong.

	      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
	    }

	    // return an observable with a user-facing error message

	    this.errorData = {
	      errorTitle: 'Oops! Request for document failed',
	      errorDesc: 'Something bad happened. Please try again later.'
	    };
	    return throwError(this.errorData);
	}*/
}
