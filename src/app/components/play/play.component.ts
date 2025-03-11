import { CommonModule } from '@angular/common';
import { Component, computed, ElementRef, signal, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-play',
  imports: [CommonModule],
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss'
})
export class PlayComponent {

  fileName = signal("")
  isUploading = signal(false)
  isselected = signal(false)
  isdone = signal(false)
  BtnStatus = computed(() => {
    const isselect = this.isselected()
    const isUploading = this.isUploading()
    const isdone = this.isdone()
    if (isdone) {
      return "Done";
    } else if (isUploading) {
      return "Uploading ...";
    } else if (isselect) {
      return 'Upload File';
    } else {
      return 'Select File';
    }
  })
  @ViewChild('uploader') uploader!: ElementRef<HTMLInputElement>;;
  handleupload = (event: Event) => {
    this.isselected.set(true);
    this.fileName.set((event?.target as HTMLInputElement)?.files?.[0]?.name || "")
  }

  handleclick = () => {
    if(this.isdone()){ 
      this.fileName.set("");
      this.isUploading.set(false);
      this.isdone.set(false);
      this.isselected.set(false);
      return
    }
    if (this.isselected()) {
      this.isUploading.set(true)
      this.isdone.set(false);
      setTimeout(() => {
        this.isUploading.set(false)
        this.isdone.set(true);
      }, 3000)
      return
    }
    console.log(this.uploader);
    this.uploader.nativeElement.click();
  }




}
