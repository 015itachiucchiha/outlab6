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
  data: Details ;
  temp: Details ;
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
    this.temp = JSON.parse(JSON.stringify(this.profileForm.value)) ;
  	this.configService.addPost(this.temp).subscribe(data => this.datareceived(data),
    error => alert('An error occurred while posting.')) ;
  }

  datareceived(data) {
    this.data.name = data.name ;
    this.data.email = data.email ;
    this.data.feedback = data.feedback ;
    this.data.comment = data.comment ;
    alert('Successfully posted to url.') ;
  }

}