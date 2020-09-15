import { Component, OnInit } from '@angular/core';
import {Register} from './register'
import {FormGroup,FormControl,Validator} from '@angular/forms'
import { DataService } from '../data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  form:FormGroup
  register:any=[]


  registerok()
  {
     this.dataservice.saveData(this.form.value).subscribe((res)=>{
      alert("Data saved Successfully")
     })
  }
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {

this.form=new FormGroup(
  {
    custmoer_name:new  FormControl(""),
    custmoer_password:new  FormControl(""),
    custmoer_email:new  FormControl(""),
    custmoer_mobile:new  FormControl(""),
    custmoer_address:new  FormControl(""),
  })
  }
  }


