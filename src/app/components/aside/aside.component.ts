import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

  openAside() {
    document.querySelectorAll(".title_aside").forEach(title => title.classList.remove('hidden'))
    document.querySelectorAll(".link_aside").forEach(title => title.classList.remove('justify-center'))
  }
  
  closeAside() {
    document.querySelectorAll(".title_aside").forEach(title => title.classList.add('hidden'))
    document.querySelectorAll(".link_aside").forEach(title => title.classList.add('justify-center'))
  }

  openMenu() {
    document.querySelectorAll(".menu_link").forEach(menu => menu.classList.remove('hidden'))
  }

  closeMenu() {
    document.querySelectorAll(".menu_link").forEach(menu => menu.classList.add('hidden'))
  }
}
