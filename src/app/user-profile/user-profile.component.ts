import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  nav: NavItem[] = [
    { title: 'Profile', href: '/me/profile', icon: 'person' },
    { title: 'Cart', href: '/me/cart', icon: 'shopping_cart' },
    { title: 'Posts', href: '/me/posts', icon: 'chat' }
  ]

  constructor(private router: Router) {

  }

  onNavItemClick(navItem: NavItem) {
    this.router.navigate([navItem.href])
  }
}


interface NavItem {
  title: string
  href: string
  icon: string
}