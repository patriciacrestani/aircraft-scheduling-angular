import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-list.component.html',
  styleUrl: './side-list.component.sass'
})
export class SideListComponent {
  items = [];

}
