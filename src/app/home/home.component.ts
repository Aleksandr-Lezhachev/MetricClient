import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {  
  p: number = 1;
  metrics: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
  this.data.getMetrics().subscribe(data => {
        this.metrics = data,
        console.log(this.metrics);
      });
    }
}

