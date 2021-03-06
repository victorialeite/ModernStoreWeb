import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Ui } from './../../utils/ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [Ui, DataService]
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;
  public errors: any[] = [];

  constructor(private fb: FormBuilder, private ui: Ui, private dataService: DataService, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
        //,CustomValidator.EmailValidator
      ])], //array de validações
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });

    this.checkToken();
  }

  checkToken() {
    var token = localStorage.getItem('mws.token');
    if (this.dataService.validateToken(token)) {
      this.router.navigateByUrl('/home');
    }
  }

  ngOnInit() {

  }

  submit() {
    this.dataService
      .authenticate(this.form.value)
      .subscribe(result => {
        localStorage.setItem('mws.token', result.token);
        localStorage.setItem('mws.user', JSON.stringify(result.user));
        this.router.navigateByUrl('/home');
      }, error => {
        this.errors = JSON.parse(error._body).errors;
      });
  }

  showModal() {
    this.ui.setActive('modal');
  }

  hideModal() {
    this.ui.setInactive('modal');
  }

  // showModalCadastro(){
  //   this.ui.setActive('modalCadastro');
  // }

  // hideModalCadastro(){
  //   this.ui.setInactive('modalCadastro');
  // }
}
