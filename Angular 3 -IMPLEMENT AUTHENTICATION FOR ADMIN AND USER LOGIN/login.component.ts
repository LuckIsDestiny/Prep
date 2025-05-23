import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  itemForm: FormGroup;
  loginFailed = false;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.itemForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onRegister() {
    if (this.itemForm.valid) {
      const { username, password } = this.itemForm.value;
      const success = this.authService.login(username, password);
      if (success) {
        this.loginFailed = false;
        this.authService.isAdmin ? this.router.navigate(['/admin']) : this.router.navigate(['/user']);
      } else {
        this.loginFailed = true;
        this.itemForm.markAllAsTouched();
      }
    } else {
      this.itemForm.markAllAsTouched();
    }
  }
}
