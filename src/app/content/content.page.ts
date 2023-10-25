import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor(private route: ActivatedRoute) { }
  name:any = '';
  ingr:any ='';
  prep:any ='';
  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('nombre');
    this.ingr = this.route.snapshot.paramMap.get('ingredientes');
    this.prep = this.route.snapshot.paramMap.get('preparacion');

    }
  }

