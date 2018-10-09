import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { MatOption } from '@angular/material';

@Component({
  selector: 'app-custom-autocomplete',
  templateUrl: './custom-autocomplete.component.html',
  styleUrls: ['./custom-autocomplete.component.css']
})
export class CustomAutocompleteComponent implements OnInit {

  @Input() displayWith: string;

  @Input() loaderColor: string;

  @Output() beginSearch = new EventEmitter<any>();

  @Output() optionSelected = new EventEmitter<any>();

  data: any[];

  initialData: any[];

  value: string;

  loading: boolean;

  ngOnInit() {
  }

  constructor() {
    this.value = '';
    this.loading = false;
    this.data = [];
    this.initialData = [];
  }

  @Input()
  set options(options) {
    this.data = options;

    if (this.initialData.length === 0) {
      this.initialData = this.data;
    }
  }

  get options(): any[] {
    return this.data;
  }

  showLoader(): void {
    this.loading = true;
  }

  hideLoader(): void {
    this.loading = false;
    this.data = this.initialData;
  }

  search(term: string): void {
    this.beginSearch.emit(term);
  }

  selected(): void {
    this.optionSelected.emit(this.value);
  }

  clear(): void {
    this.value = '';
    this.hideLoader();
  }

}
