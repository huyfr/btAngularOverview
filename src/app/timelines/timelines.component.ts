import { Component, OnInit } from '@angular/core';
import {DateUtilServiceService} from '../date-util-service.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.scss']
})
export class TimelinesComponent implements OnInit {
  output = '';

  constructor(private dateUtilService: DateUtilServiceService) { }

  ngOnInit(): void {
  }

  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}
