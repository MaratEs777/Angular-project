import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() onlyAvailable: number = 0;

  @Input() onlyOrder: number = 0;

  @Input() allGoods: number = 0;

  

  selectRadioButtonValue: string = 'All goods';

  @Output()
  filterRadioButtonSelectionChange: EventEmitter<string> =
    new EventEmitter<string>();

  onRadioButtonSelectionChange() {
    this.filterRadioButtonSelectionChange.emit(this.selectRadioButtonValue);
    // console.log(this.selectRadioButtonValue)
  }
}
