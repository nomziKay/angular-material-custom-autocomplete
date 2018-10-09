import { Component, OnInit } from '@angular/core';

import { Supplier } from './shared/supplier.model';
import { SupplierService } from './shared/supplier.service';

import { Subject, Observable } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  suppliers: Supplier[];

  suppliers$: Observable<Supplier[]>;

  searchedSuppliers = [];

  private numEntries = [10, 20, 50];

  private selectedNumEntries = this.numEntries[0];

  suppliersSize = 10;

  page = 1;

  start = this.page;

  name = 'name';

  end = this.selectedNumEntries + 1;

  displayedSuppliers = [];

  displayedSuppliersNames: string [] = [];

  deleteModal: any;

  supplierId: number;

  alertUser = false;

  search = false;

  loading = false;

  private searchTerms = new Subject<string>();

  displayedColumns: string[] = ['name', 'city', 'reference'];

  dataSource;

  loaderColor = 'warn';

  constructor(
    private supplierService: SupplierService) { }

  ngOnInit() {
    this.suppliers$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap(() => this.supplierService.getSuppliers())
      );
    this.getAll();
  }

  getAll(): void {
    this.supplierService.getSuppliers()
      .subscribe(
        suppliers => {
          this.suppliers = suppliers;
          this.suppliersSize = this.suppliers.length;
          this.suppliers.sort();
          this.displayedSuppliers = this.suppliers.slice(this.start, this.end);
          this.populateNames(this.displayedSuppliers);
          this.dataSource = this.displayedSuppliers;
        });
  }

  private populateNames(suppliers: Supplier[] ): void {
    suppliers.forEach(element => {
      this.displayedSuppliersNames.push(element.name);
    });
  }

  deleteSupplier() {
    this.supplierService.deleteSupplier(this.supplierId).subscribe(
      supplier => {
        this.getAll();
      });
  }

  loadPage(page: number) {
    this.end = (this.selectedNumEntries * page) + 1;
    this.start = this.end - this.selectedNumEntries;
    this.displayedSuppliers = this.suppliers.slice(this.start, this.end);
  }

  isEmpty(): boolean {
    return (this.displayedSuppliers.length === 0);
  }

  searchResults(term: string): void {
    console.log('searching...');
    this.searchTerms.next(term);
    this.search = true;
    this.suppliers$.subscribe(
      suppliers => {
        this.displayedSuppliers = suppliers.filter(
          supplier => supplier.name.toLowerCase().includes(term.toLowerCase()),
        );
        this.displayedSuppliersNames = [];
        this.populateNames(this.displayedSuppliers);
      }
    );
  }

  supplierSelected(supplier: Supplier) {
    console.log('Selected Supplier: ' + supplier);
  }

  displayFn(supplier: Supplier): string | undefined {
    return supplier ? supplier.name : undefined;
  }

  displaySupplier(supplier: Supplier): void {
    console.log('selected supplier : name: ' + supplier.name + ', city: ' + supplier.city + ', reference: ' + supplier.reference );
  }

}
