import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  user = {
    name: '',
    addressLine1: '',
    addressLine2: '',
    country: '',
    zipCode: '',
    phoneNumber: ''
  };

  submitted: boolean = false;

  constructor(private router: Router) { }

  formSubmit() {
    this.submitted = true;
    if (this.user.name && this.user.addressLine1 && this.user.country && this.user.zipCode && this.user.phoneNumber) {
      console.log('Form submitted successfully:', this.user);
      this.router.navigate(['/image-upload'])
    } else {
      console.log('Form contains errors.');
    }
  }
}
