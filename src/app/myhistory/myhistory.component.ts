import { Component, OnInit } from '@angular/core';
import { Timeline } from '../core/models/timesline';
import { TimelineService } from '../core/services/timeline.service';

@Component({
  selector: 'app-myhistory',
  templateUrl: './myhistory.component.html',
  styleUrls: ['./myhistory.component.scss']
})
export class MyhistoryComponent implements OnInit {
  listTimeline: Timeline[] = [];
  constructor(
    private timelineService: TimelineService,
  ) { }

  ngOnInit(): void {
    this.listTimeline = this.timelineService.getTimeslines();
  }

}
