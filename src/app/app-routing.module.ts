import { PackageListComponent } from './packages/package-list/package-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';
import { PackageComponent } from './packages/package/package.component';
import { ViewpackageComponent } from "./packages/viewpackage/viewpackage.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'createpackage', component: PackageComponent },
  { path: 'upload', component: FileUploadComponent },
  { path: 'packagelist', component: PackageListComponent },
   { path: 'viewpackage/:key', component: ViewpackageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
