import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-choise',
  standalone: true,
  imports: [MatIconModule, MatGridListModule, MatButtonModule, RouterLink],
  templateUrl: './choise.component.html',
  styleUrl: './choise.component.scss'
})
export class ChoiseComponent {
  constructor(private location: Location) {

  }

  back() {
    this.location.back();
  }
}
