import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxCropperOption } from 'ngx-cropper';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CareersComponent implements OnInit {
  //cropper
  public ngxCropperConfig: NgxCropperOption;
  constructor() {
    this.ngxCropperConfig = {
      url: null, // image server url
      maxsize: 512000, // image max size, default 500k = 512000bit
      title: 'Apply your image size and position', // edit modal title, this is default
      uploadBtnName: 'Upload Image', // default Upload Image
      uploadBtnClass: null, // default bootstrap styles, btn btn-primary
      cancelBtnName: 'Cancel', // default Cancel
      cancelBtnClass: null, // default bootstrap styles, btn btn-default
      applyBtnName: 'Apply', // default Apply
      applyBtnClass: null, // default bootstrap styles, btn btn-primary
      fdName: 'file', // default 'file', this is  Content-Disposition: form-data; name="file"; filename="fire.jpg"
      aspectRatio: 16 / 9, // default 1 / 1, for example: 16 / 9, 4 / 3 ...
      viewMode: 0 // default 0, value can be 0, 1, 2, 3
    }
   }

  ngOnInit() {
  }
  // deal callback data
  public onReturnData(data: any) {
    // Do what you want to do
    console.warn(JSON.parse(data));


    //  Here has three type of messages now
    //  1. Max size
    // {
    //     code: 4000,
    //     data: null,
    //     msg: `The size is max than ${this.viewConfig.maxsize}, now size is ${currentSize}k`
    //  }

    //  2. Error
    //  {
    //       code: 4001,
    //       data: null,
    //       msg: 'ERROR: When sent to server, something wrong, please check the server url.'
    //  }

    //  3. Image type error
    // {
    //       code: 4002,
    //       data: null,
    //       msg: `The type you can upload is only image format`
    // }

    //  4. Success
    //  {
    //       code: 2000,
    //       data,
    //       msg: 'The image was sent to server successly'
    //  }
  }
}
