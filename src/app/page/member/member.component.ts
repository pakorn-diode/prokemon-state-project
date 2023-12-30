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

  public power:boolean = true;
  
  public historyName!: string;

  ngOnInit(): void {
    this.historyName = history.state?.name == undefined ? 'jarwa.belle' : history.state?.name;
    console.log('historyName',this.historyName);
    this.profile = profile;
    this.member = member;
    this.profileList = this.profile.default;
    this.memberList = this.member.default;
    console.log('memberList',this.memberList);
    this.onSelectMember(this.historyName);
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
  }

  public onSelectAbilities(ability:string): void{
    this.selectAbilityList = this.abilityList.filter((data:any)=> data.title == ability)
  }

  changeColorAbilities(id:any): void{
    const one = document.getElementById('1') as HTMLElement;
    const two = document.getElementById('2') as HTMLElement;
    const three = document.getElementById('3') as HTMLElement;
    const four  = document.getElementById('4') as HTMLElement;
    if (id == '2') {
      one.style.backgroundColor = 'white';
      two.style.backgroundColor = '#d19a3b';
      three.style.backgroundColor = 'white';
      four.style.backgroundColor = 'white';
    } else if (id == '3') {
      one.style.backgroundColor = 'white';
      two.style.backgroundColor = 'white';
      three.style.backgroundColor = '#d19a3b';
      four.style.backgroundColor = 'white';
    } else if (id == '4') {
      one.style.backgroundColor = 'white';
      two.style.backgroundColor = 'white';
      three.style.backgroundColor = 'white';
      four.style.backgroundColor = '#d19a3b';
    } else {
      one.style.backgroundColor = '#d19a3b';
      two.style.backgroundColor = 'white';
      three.style.backgroundColor = 'white';
      four.style.backgroundColor = 'white';
    }
  }
}
