import { Injectable } from '@angular/core' ;
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Details } from './details'

@Injectable({providedIn: 'root'})

export class ConfigService {
	configUrl = "https://cs251-outlab-6.herokuapp.com/initial_values/" ;
	postUrl = "https://cs251-outlab-6.herokuapp.com/add_new_feedback/" ;

	constructor(private http: HttpClient) { }

	getConfig() {
	  	return this.http.get(this.configUrl);
	}

	addPost(data: Details) {
		return this.http.post(this.postUrl,data) ;
	}

}