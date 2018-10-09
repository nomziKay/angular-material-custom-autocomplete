import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersComponent } from './suppliers.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CustomAutocompleteComponent } from '../custom-autocomplete/custom-autocomplete.component';
import { CustomAutocompleteModule } from '../custom-autocomplete/custom-autocomplete.module';
import { AppMaterialModule } from '../app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SuppliersComponent', () => {
  let component: SuppliersComponent;
  let fixture: ComponentFixture<SuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SuppliersComponent,
      ],
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        CustomAutocompleteModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
