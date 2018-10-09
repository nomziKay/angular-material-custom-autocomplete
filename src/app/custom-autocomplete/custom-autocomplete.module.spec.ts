import { CustomAutocompleteModule } from './custom-autocomplete.module';

describe('CustomAutocompleteModule', () => {
  let customAutocompleteModule: CustomAutocompleteModule;

  beforeEach(() => {
    customAutocompleteModule = new CustomAutocompleteModule();
  });

  it('should create an instance', () => {
    expect(customAutocompleteModule).toBeTruthy();
  });
});
