import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-choise',
  standalone: true,
  imports: [MatIconModule, MatGridListModule, RouterLink],
  templateUrl: './choise.component.html',
  styleUrl: './choise.component.scss'
})
export class ChoiseComponent {

}
