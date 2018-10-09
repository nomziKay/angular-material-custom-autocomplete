import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CustomAutocompleteModule } from './custom-autocomplete/custom-autocomplete.module';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        CustomAutocompleteModule,
        AppMaterialModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
