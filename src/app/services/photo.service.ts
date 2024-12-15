import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public async addNewToGallery(): Promise<boolean> {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      saveToGallery: true,
      source: CameraSource.Camera,
     quality: 100
    });
    return capturedPhoto.saved;
  }
}
