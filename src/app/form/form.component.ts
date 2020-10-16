import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../config.service'; 
import { Details } from '../details'
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  data: Details;
  profileForm = this.fb.group({ name: '',email: '',feedback: '',comment: ''});
  
  constructor(private configService: ConfigService,private fb: FormBuilder) { }

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
    console.warn(this.profileForm.value) ;
  	this.configService.addPost(this.data).subscribe() ;
  	this.showConfig() ;
  	this.data.name = "" ;
  	this.data.email = "" ;
  	this.data.feedback = "" ;
  	this.data.comment = "" ;
   }

}