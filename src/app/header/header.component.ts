import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

constructor(){}

ngOnInit():void{

}
slogan: string = 'You one stop for everything'
sourse: string =  'https://img1.akspic.ru/crops/9/6/0/8069/8069-odezhda-shoping-devuska-zhenshhina-ulica-1920x1080.jpg'

getSlogan(){
  return 'This is a new slogan for this web application'
}

}





