import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {

  constructor() { }

  isClicked:boolean;
  formdata={
    fname:'',
    lname:'',
    email:'',
    phone:'',
    address:'',
    cityname:'',
    state:'',
    pin:''
  }
   @ViewChild('f') infoform : NgForm;
  ngOnInit(): void {
  }
  onSubmit(form){
  this.formdata.fname=this.infoform.value.fname;
  this.formdata.lname=this.infoform.value.lname;
  this.formdata.email=this.infoform.value.email;
  this.formdata.phone=this.infoform.value.phone;
  this.formdata.address=this.infoform.value.address;
  this.formdata.cityname=this.infoform.value.cityname;
  this.formdata.state=this.infoform.value.state;
  this.formdata.pin=this.infoform.value.pin;
  this.isClicked=true;
  this.infoform.reset();
  }
}
