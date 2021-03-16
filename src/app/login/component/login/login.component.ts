import { AppComponent } from './../../../app.component';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,  private router: Router
    ) {
    }
    ngOnInit(): void {
      this.gerarForm();


    }
    gerarForm() {
      this.form = this.fb.group({
        user: ['', []],
        password: ['', []]
      });
    }
    login(event: Event){
      let user = this.form.get('user').value;
      let pass = this.form.get('password').value;

        if((user === 'Joao') && (pass === '123456')){



      this.form.reset();

        }else{
       console.log('é a vida');

      this.form.reset();
        }
      }
      }
