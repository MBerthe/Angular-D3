import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const backgroundArc = d3
      .arc()
      .innerRadius(30)
      .outerRadius(50)
      .startAngle(0)
      .endAngle(Math.PI * 2);

    const mainArc = d3
      .arc()
      .innerRadius(30)
      .outerRadius(50)
      .cornerRadius(10)
      .startAngle(0)
      .endAngle((d: number) => (d / 100) * Math.PI * 2);

    const data = [30]; // percents.

    const svg = d3
      .select('body')
      .append('svg')
      .attr('width', 100)
      .attr('height', 200);

    const charts = svg
      .selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', (d: number, i: number) => 'translate(' + 50 + ',100)');

    charts.append('path').attr('d', backgroundArc).attr('fill', '#ccc');

    charts.append('path').attr('d', mainArc).attr('fill', '#99cffc');
  }
}
