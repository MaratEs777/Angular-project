import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  log() {
    console.log( '=>>>', this.searchValue);
  }
  searchValue: string = 'Введите значение';

  // changeSearchValue(eventData: Event) {
  //   // console.log((<HTMLInputElement>eventData.target).value)
  //   // this.searchValue = (<HTMLInputElement>eventData.target).value
  // }
}