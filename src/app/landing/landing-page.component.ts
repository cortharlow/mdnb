import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-page-component',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('Serve the Landing Page');
  }

}
