import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { AuthService } from 'aurelia-auth';

@inject(Router)
export class NavBar {
  constructor(router) {
    this.router = router;
  }

  attached() {
    $('.navbar-nav a').on('click', function () {
      $('.navbar-nav').find('li.active').removeClass('active');
      $(this).parent('li').addClass('active');
    });
  }
}