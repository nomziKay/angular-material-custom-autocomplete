import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Supplier } from './supplier.model';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// shows that this is a singleton service
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

   apiUrl: 'http://frontendshowcase.azurewebsites.net/api';

  private suppliersUrl = 'http://frontendshowcase.azurewebsites.net/api/suppliers';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getSuppliers(): Observable<Supplier[]> {
    console.log('suppliers url: ' + this.suppliersUrl);
    return this.http.get<Supplier[]>(this.suppliersUrl)
    .pipe(
      catchError(this.handleError('getSuppliers', []))
    );
  }

  addSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.suppliersUrl, supplier, httpOptions).pipe(
      tap(() => catchError(this.handleError<Supplier>('addSupplier')))
    );
  }

  deleteSupplier(id: number): Observable<Supplier> {
    const deleteUrl = `${this.suppliersUrl}/${id}`;
    return this.http.delete<Supplier>(deleteUrl, httpOptions).pipe(
      tap(_ => catchError(this.handleError<Supplier>('deleteSupplier'))
    ));
  }

  updateSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.put<Supplier>(this.suppliersUrl, supplier, httpOptions)
      .pipe( tap(_ => catchError(
        this.handleError<any>('updateSupplier'))
      ));
  }


}
