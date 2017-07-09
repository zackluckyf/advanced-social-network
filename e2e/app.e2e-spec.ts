import { EcommerceAppPage } from './app.po';

describe('ecommerce-app App', () => {
  let page: EcommerceAppPage;

  beforeEach(() => {
    page = new EcommerceAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
