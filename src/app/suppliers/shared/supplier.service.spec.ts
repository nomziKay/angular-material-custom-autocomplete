import { TestBed } from '@angular/core/testing';

import { SupplierService } from './supplier.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Supplier } from './supplier.model';
import { doesNotThrow } from 'assert';
import { environment } from '../../../environments/environment';

describe('SupplierService', () => {
  let service: SupplierService;
  beforeEach(() => {TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  });
   service = TestBed.get(SupplierService);
  //  const http = new HttpClientTestingModule();
  //  const suppliersUrl = `${environment.apiUrl}/suppliers`;
  //  http.get('suppliersUrl').subscribe(
  //    suppliers => mockSuppliers = suppliers
  //  );
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('#getAllSuppliers should return value from observable',
  //   (done: DoneFn) => {
  //     service.getSuppliers().subscribe( suppliers => {
  //       expect(suppliers).toBe(mockSuppliers);
  //       done();
  //     });
  //   });
});
