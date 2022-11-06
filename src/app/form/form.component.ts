import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public contactForm!: FormGroup;
  public datas!: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private firebaseService:FirebaseService
  ) {
    this.contactForm = this.fb.group({
      filiere: ['',[Validators.required,Validators.maxLength(255)]],
      annee: ['',[Validators.required,Validators.maxLength(255)]],
      email: ['',Validators.email],
      periode: ['',Validators.required],
      phone: [''],
      jour: ['',Validators.required],
      montant:['',Validators.required],
      theme:['',Validators.required],
      suggestions:['',Validators.required],
      participation:['',Validators.required],
    })
  }

  onSubmit() {
    console.log(this.contactForm.value)
    this.firebaseService.createContact(this.contactForm.value).then(
      ()=>{
        this.ngOnInit()
      }
    )
  }
  
  visible:boolean=false
  dNone(){
    this.visible?this.visible=false:this.visible=true
  }


  ngOnInit(): void {
    console.log(this.contactForm.value)
  }
}
