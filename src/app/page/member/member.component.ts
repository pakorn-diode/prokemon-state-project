import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import * as jsonData from '../../../assets/JSON/member.json';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Observable, BehaviorSubject, timer } from 'rxjs';
import { auditTime, filter, map, pairwise, tap, throttleTime } from 'rxjs/operators';
import { Slick } from "ngx-slickjs";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  slickConfig: Slick.Config = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
  };
  public dataList: any = new Array<any>;
  public objectA: any;
  @ViewChild('scroller') scroller!: CdkVirtualScrollViewport;

  ngOnInit(): void {
    this.objectA = jsonData;
    this.dataList = this.objectA.default;
    this.fetchMore();
  }

  constructor(private ngZone: NgZone) { }

  ngAfterViewInit(): void {
    this.scroller.elementScrolled().pipe(
      map(() => this.scroller.measureScrollOffset('bottom')),
      pairwise(),
      filter(([y1, y2]) => (y2 < y1 && y2 < 140)),
      throttleTime(200)
      
    ).subscribe(() => {
      this.ngZone.run(() => {
        this.fetchMore();

      });
    }
    );
    this.scroller.elementScrolled().pipe(
      map(() => this.scroller.measureScrollOffset('top')),
      pairwise(),
      filter(([y1, y2]) => (y2 < y1 && y2 < 140)),
      throttleTime(200)
      
    ).subscribe(() => {
      this.ngZone.run(() => {
        this.fetchMore();
      });
    }
    );
  }

  fetchMore(): void {
    timer(1000).subscribe(() => {
      this.dataList = [...this.dataList,...this.dataList];
    });
  }
}
