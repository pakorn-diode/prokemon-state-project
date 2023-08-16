import { Component, OnInit, ViewChild } from '@angular/core';
import * as profile from '../../../assets/JSON/profile.json';
import * as member from '../../../assets/JSON/member.json';
import { Slick } from "ngx-slickjs";
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexMarkers
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  slickConfig: Slick.Config = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: false,
    autoplay: false,
    centerMode: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    vertical: true,

    mouseWheelMove:false,
    draggable:false,
    verticalSwiping:true,
    // dots:true,
    // dotsClass:'slick-dots',
    // initialSlide:1
    // touchThreshold: 10,
    swipe:false,
    swipeToSlide:false,
    touchMove:false,
  };
  public profile: any = new Array<any>;
  public profileList: any = new Array<any>;
  public member: any = new Array<any>;
  public memberList: any = new Array<any>;
  public abilityList: any = new Array<any>;
  public selectAbilityList: any = new Array<any>;
  public highlightList: any = new Array<any>;
  public selectHighlightList: any = new Array<any>;

  public bg: string = 'h-[80vh] bg-black transition-all duration-300 ';
  public bgPy8: string = 'bg-black';
  

  ngOnInit(): void {
    this.profile = profile;
    this.member = member;
    this.profileList = this.profile.default;
    this.memberList = this.member.default;
    console.log('memberList',this.memberList);
    
    this.onSelectMember('jarwa.belle');
  }

  public onSelectMember(name:string| HTMLSelectElement): void{
    this.memberList = this.member.default;
    console.log('name',name);
    this.memberList = this.memberList.filter((data:any)=> data.name == name);
    console.log('onSelectMember',this.memberList[0]?.color );
    this.bg ='lg:h-[105vh] xl:h-[80vh] transition-all duration-300 ' + this.memberList[0]?.color ;
    this.bgPy8 ='py-8 ' + this.memberList[0]?.color ;

    this.abilityList = this.memberList[0].abilities;
    console.log('abilityList',this.abilityList);
    
    this.onSelectAbilities(this.abilityList[0].title)
    this.highlightList = this.memberList[0].highlight;
    
    // const bg = document.getElementById('bgBg') as HTMLElement;
    // bg.classList.add('bg-' + this.memberList[0].color )
    // console.log(bg);
    
  }

  public onSelectAbilities(ability:string): void{
    console.log('onSelectAbilities',ability);
    this.selectAbilityList = this.abilityList.filter((data:any)=> data.title == ability)
    console.log('selectAbilityList',this.selectAbilityList);
    
  }

  // @ViewChild("chart") chart!: ChartComponent;
  // public chartOptions: Partial<ChartOptions | ApexAxisChartSeries> | any ;

  // constructor() {
  //   this.chartOptions = {
  //     series: [
  //       {
  //         name: "Series Blue",
  //         data: [80, 50, 30, 40, 100, 20]
  //       },
  //       {
  //         name: "Series Green",
  //         data: [20, 30, 40, 80, 20, 80]
  //       },
  //       {
  //         name: "Series Orange",
  //         data: [44, 76, 78, 13, 43, 10]
  //       }
  //     ],
  //     chart: {
  //       height: 350,
  //       type: "radar",
  //       dropShadow: {
  //         enabled: true,
  //         blur: 1,
  //         left: 1,
  //         top: 1
  //       },
  //       toolbar: {
  //         show: false,
  //       }
  //     },
  //     stroke: {
  //       width: 0
  //     },
  //     fill: {
  //       opacity: 0.4
  //     },
  //     markers: {
  //       size: 0
  //     },
  //     xaxis: {
  //       categories: ["2011", "2012", "2013", "2014", "2015", "2016"]
  //     }
  //   };
  // }
}
