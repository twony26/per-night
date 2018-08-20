import { Component, OnInit } from '@angular/core';
import { PackageService } from './shared/package.service';

@Component({
    selector: 'packages',
    templateUrl: './packages.component.html',
    styles: ['./packages.component.css']
})
export class PackagesComponent implements OnInit{
   
    constructor(private svc: PackageService){}

    ngOnInit() {
       
    }
}
