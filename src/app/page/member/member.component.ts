import { Component, OnInit, ViewChild } from '@angular/core';
import * as profile from '../../../assets/JSON/profile.json';
import * as member from '../../../assets/JSON/member.json';
import { Slick } from "ngx-slickjs";
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
}
