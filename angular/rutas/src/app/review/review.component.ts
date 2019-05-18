import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { 

    this.activatedRoute.parent.params.subscribe(params => {
      console.log(params);
    })
  }

  ngOnInit() {
  }

}
