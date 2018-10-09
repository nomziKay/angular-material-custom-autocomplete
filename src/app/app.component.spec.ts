import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppModule } from './app.module';
import { CustomAutocompleteModule } from './custom-autocomplete/custom-autocomplete.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SuppliersComponent
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
