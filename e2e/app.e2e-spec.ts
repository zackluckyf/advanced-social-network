import { HomePage } from './app.po';

describe('ecommerce-app App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Social Network');
  });
});
