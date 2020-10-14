import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../config.service'; 
import { Details } from '../details'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  data: Details;
  
  constructor(private configService: ConfigService) { }

  ngOnInit(): void { 
  	this.showConfig() ;
  }

  showConfig() {
    this.configService.getConfig().subscribe((data: Details) => this.data = {
        name: data.name,
        email: data.email,
        feedback: data.feedback,
        comment: data.comment
    });
  }

  onSubmit() {
  	this.configService.addPost(this.data).subscribe() ;
  	this.showConfig() ;
  	this.data.name = "" ;
  	this.data.email = "" ;
  	this.data.feedback = "" ;
  	this.data.comment = "" ;
   }

}