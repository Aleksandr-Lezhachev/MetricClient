import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Metric } from '../metric';
import { MetricService } from '../metric.service';

@Component({
  templateUrl: './add-metric.component.html'
})
export class AddMetricComponent {
  metric: Metric [] = [new Metric()];
  constructor(private router: Router, private metricService: MetricService) {
  }
  createMetric(): void {
    this.metricService.createMetric(this.metric)
        .subscribe( data => {
          alert("Metric added successfully.");
        });
  };
}
