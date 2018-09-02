import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  collapseIn = false;
  sidebarVisible: boolean;
  private toggleButton: any;

  constructor(private element: ElementRef) {
    this.sidebarVisible = false;
  }

  ngOnInit() {

    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
  }

  toggleNav() {
    console.log('clicked!');
    if (this.collapseIn) {
      this.collapseIn = false;
    } else {
      this.collapseIn = true;
    }
    console.log(this.collapseIn);
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementById('navbar-collapse-2');
    // console.log(html);
    // console.log(toggleButton, 'toggle');

    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('in');

    this.sidebarVisible = true;
  };
  sidebarClose() {
    const html = document.getElementById('navbar-collapse-2');
    // console.log(html);
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('in');

  };

  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    // if (this.sidebarVisible === false) {
    //   this.sidebarOpen();
    // } else {
    //   this.sidebarClose();
    // }
    // const html = document.getElementById('navbar-collapse-2');
    // console.log(html.classList);
  };

}
