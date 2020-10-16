import { Injectable } from '@angular/core' ;
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Details } from './details'
import {
    HttpEvent,
    HttpHeaders,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Injectable({providedIn: 'root'})

export class ConfigService {

	configUrl = "https://cs251-outlab-6.herokuapp.com/initial_values/" ;
	postUrl = "https://cs251-outlab-6.herokuapp.com/add_new_feedback/" ;

	constructor(private http: HttpClient) { }

	getConfig() {
	  	return this.http.get(this.configUrl);
	}

	addPost(data: FormGroup) {
		return this.http.post(this.postUrl,data) ;//.pipe(catchError(this.handleError()));
	}

	private handleError() {
  		return throwError('Something bad happened; please try again later.');
	}

}