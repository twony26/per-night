import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PackageService } from '../shared/package.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import { Package } from '../shared/package.model';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { finalize, map, filter } from 'rxjs/operators';
//import { map } from 'rxjs/operator/map';
@Component({
  selector: 'package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  image_url: string;
  currentUpload: number;

  packageForm: FormGroup;
  name: FormControl;
  inclusions: FormControl;
  minPersons: FormControl;
  maxPersons: FormControl;
  duration: FormControl;
  description: FormControl;
  address: FormControl;
  imgUrl: FormControl;
  contactNumber: FormControl;

  @ViewChild('url') nameInputRef: ElementRef;
  @ViewChild('fileInput') fileInputRef: ElementRef;


  constructor(private svc: PackageService, private afStorage: AngularFireStorage) {
    // this.svc.getData().snapshotChanges().subscribe(item => {
    //     item.forEach(element => {
    //         let y = element.payload.toJSON();
    //         let p: Package = new Package();
    //         p.$key = element.key;
    //         p.description = y['description'];
    //     });
    // });
    this.currentUpload = 0;
  }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.inclusions = new FormControl('', Validators.required);
    this.minPersons = new FormControl('', Validators.required);
    this.maxPersons = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
    this.address = new FormControl('', Validators.required);
    this.imgUrl = new FormControl('', Validators.required);

    this.packageForm = new FormGroup({
      name: new FormControl(),
      contactNumber: new FormControl(),
      inclusions: new FormControl(),
      minPersons: new FormControl(),
      maxPersons: new FormControl(),
      duration: new FormControl(),
      description: new FormControl(),
      address: new FormControl(),
      imgUrl: new FormControl()
    });

    //this.resetForm();
  }

  savePackage(packageForm: any) {
    let p: Package = new Package();
    p = packageForm as Package;
    p.imgUrl = this.image_url;
    this.svc.insertPackage(packageForm);

    alert('Submitted Successfully');
    this.packageForm.reset({
      name: '',
      contactNumber:'',
      inclusions: '',
      minPersons: '',
      maxPersons: '',
      duration: '',
      description: '',
      address: '',
      imgUrl: ''
    });

    this.image_url = '';
    this.currentUpload = 0;
    this.fileInputRef.nativeElement.value = '';

  }

  resetForm(packageForm?: FormGroup) {
    if (packageForm != null) {
      packageForm.reset({
        name: { value: '' }
      });
      this.imgUrl = null;
    }
    this.name = new FormControl('');
    // this.svc.selectedPackage = {
    //     $key: null,
    //     description: '',
    //     duration: '',
    //     address: '',
    //     inclusions: '',
    //     maxPersons: 0,
    //     minPersons: 0,
    //     name: '',
    //     imgUrl: '',
    //     contactNumber: ''
    // }
  }


  upload(event) {
    const file = event.target.files[0];

    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ')
      return;
    }

    const path = (new Date().getTime()).toString() + '/' + file.name;
    var storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(path).put(file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        let c = (snapshot['bytesTransferred'] / snapshot['totalBytes']) * 100;
        this.currentUpload = c;
      },
      (error) => {
        console.log(error)
      },
      () => {
        this.image_url = uploadTask.snapshot.downloadURL;
      }
    );
  }
}
