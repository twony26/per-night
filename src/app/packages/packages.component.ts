import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { PackageService } from './shared/package.service';
import { AngularFireList } from "angularfire2/database";
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'packages',
    templateUrl: './packages.component.html',
    styles: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

    packageList: Observable<any>;
    constructor(private svc: PackageService) { }

    ngOnInit() {
        this.packageList = this.svc.getData();
    }
}
