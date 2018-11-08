import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html'
})
export class SubMenuComponent implements OnInit {

  public totalItems: number = 0;
  public user: string = '';
  public data: any;

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.cartChange.subscribe((data) => {
      this.totalItems = data.length;
    });

    this.data = JSON.parse(localStorage.getItem('mws.user'));
    if (this.data) {
      this.user = this.data.name;
    }

    this.cartService.load();
  }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('mws.token');
    localStorage.removeItem('mws.user');
    this.router.navigateByUrl('/login');
  }
}
