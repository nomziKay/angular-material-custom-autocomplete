import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAutocompleteComponent } from './custom-autocomplete.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CustomAutocompleteComponent', () => {
  let component: CustomAutocompleteComponent;
  let fixture: ComponentFixture<CustomAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAutocompleteComponent ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        AppMaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
