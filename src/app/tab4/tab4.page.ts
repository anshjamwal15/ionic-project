import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  public isSaved: boolean = false;

  constructor(public photoService: PhotoService, private router: Router) { }

  async addPhotoToGallery() {
    this.isSaved = await this.photoService.addNewToGallery();
  }

  verify() {
    if (this.isSaved) {
      this.router.navigate(["/thank-you"])
    }
  }
}
