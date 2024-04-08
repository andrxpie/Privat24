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
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { Location } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CardModel } from '../cards';
import { AccountsService } from '../../services/accounts.service';
import { TokensService } from '../../services/tokens.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.scss'
})
export class AddCardComponent {
  form: FormGroup;
  constructor(
    fb: FormBuilder,
    private location: Location,
    private tokenService: TokensService,
    private router: Router,
    private service: CardsService
  ) {
    this.form = fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      date: ['', Validators.required],
      cvv: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      alert('Invalid data, please try again!');
      return;
    }

    const model: CardModel = this.form.value as CardModel;

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
