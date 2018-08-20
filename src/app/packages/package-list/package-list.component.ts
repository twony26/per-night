import { Component, OnInit } from '@angular/core';
import { PackageService } from '../shared/package.service';
import { Package } from '../shared/package.model';

@Component({
    selector: 'package-list',
    templateUrl: './package-list.component.html',
    styles: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit{

    packageList: Package[];
    constructor(private svc: PackageService){}

    ngOnInit() {
        this.packageList = [];
        // this.svc.getData().snapshotChanges().subscribe(item => {
        //     item.forEach(element => {
        //         let y = element.payload.toJSON();
        //         let p: Package = new Package();
        //         p.$key = element.key;
        //         p.description = y['description'];
        //         this.packageList.push(p);
        //     });
        // });

    }
}
