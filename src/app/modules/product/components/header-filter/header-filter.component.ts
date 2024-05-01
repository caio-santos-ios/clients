import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-filter',
  standalone: true,
  imports: [],
  templateUrl: './header-filter.component.html',
  styleUrl: './header-filter.component.css'
})
export class HeaderFilterComponent {
  @Input() title: string | undefined;
}
