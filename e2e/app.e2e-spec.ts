import { FrAppPage } from './app.po';

describe('fr-app App', () => {
  let page: FrAppPage;

  beforeEach(() => {
    page = new FrAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
