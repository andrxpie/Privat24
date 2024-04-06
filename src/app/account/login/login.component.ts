import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LoginModel } from '../account';
import { AccountsService } from '../../services/accounts.service';
import { TokensService } from '../../services/tokens.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form: FormGroup;
  constructor(
    fb: FormBuilder,
    private location: Location,
    private tokenService: TokensService,
    private router: Router,
    private service: AccountsService
  ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      alert('Invalid data, please try again!');
      return;
    }

    const model: LoginModel = this.form.value as LoginModel;

    this.service.login(model).subscribe((res) => {
      console.log(res);

      this.tokenService.saveTokens(res.accessToken, res.refreshToken);
      this.router.navigate(['/']);
    });
  }

  back() {
    this.location.back();
  }
}
