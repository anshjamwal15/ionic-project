import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  location: { latitude: number; longitude: number } | null = null;


  constructor() {}

  async fetchLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      // TODO: after location fetch route to schedule pages
      console.log('This is the current location:', this.location);
    } catch (error) {
      console.error('Error getting location:', error);
    }
  }

}
