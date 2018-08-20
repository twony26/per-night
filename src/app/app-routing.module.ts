import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';
import { PackageComponent } from './packages/package/package.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'createpackage', component: PackageComponent },
  { path: 'upload', component: FileUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
