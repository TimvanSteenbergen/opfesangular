import { AngularProductsPage } from './app.po';

describe('angular-products App', () => {
  let page: AngularProductsPage;

  beforeEach(() => {
    page = new AngularProductsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
