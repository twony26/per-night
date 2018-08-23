import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { PackageService } from '../shared/package.service';
import { Package } from '../shared/package.model';

@Component({
    selector: 'package-list',
    templateUrl: './package-list.component.html',
    styles: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

    packageList: Observable<any>;
    constructor(private svc: PackageService) { }

    ngOnInit() {
        this.packageList = this.svc.getData();
        console.log(this.packageList);
    }


}
