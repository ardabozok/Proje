import { ProjePage } from './app.po';

describe('proje App', () => {
  let page: ProjePage;

  beforeEach(() => {
    page = new ProjePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
