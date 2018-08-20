import { Injectable } from '@angular/core';
import { Package } from './package.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class PackageService {
    packageList: AngularFireList<any>;

    constructor(private fb: AngularFireDatabase) { //
        this.packageList = this.fb.list('/packages');
    }

    getData() {
        return this.packageList;
    }

    insertPackage(_package: Package) {
        const _p: Package = new Package();
        _p.address = _package.address;
        _p.name = _package.name;
        _p.description = _package.description;
        _p.maxPersons = _package.maxPersons;
        _p.minPersons = _package.minPersons;
        _p.duration = _package.duration;
        _p.contactNumber = _package.contactNumber;
        _p.inclusions = _package.inclusions;
        _p.imgUrl = _package.imgUrl;
        this.packageList.push(_p);
    }

    // updatePackage(_package: Package) {
    //     // this.packageList.update(_package.$key, {
    //     //     description: _package.description,
    //     // });
    // }

    // deletePackage($key: string) {
    //    // this.packageList.remove($key);
    // }
}
