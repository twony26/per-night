import { PackageService } from '../shared/package.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-viewpackage',
  templateUrl: './viewpackage.component.html',
  styleUrls: ['./viewpackage.component.scss']
})
export class ViewpackageComponent implements OnInit {
  key: any;
  constructor(private svc: PackageService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.key = params['key'];
      this.getPackageDetails(this.key);
    });
  }

  getPackageDetails(key: string){
    let c = this.svc.getpackageDetails(key);
    console.log(c);
  }

}
