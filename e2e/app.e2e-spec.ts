import { EcommerceAppPage } from './app.po';

describe('ecommerce-app App', () => {
  let page: EcommerceAppPage;

  beforeEach(() => {
    page = new EcommerceAppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('ecommerce-app');
  });
});
