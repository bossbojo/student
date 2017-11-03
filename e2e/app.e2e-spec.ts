import { Angular4StructurePage } from './app.po';

describe('angular4-structure App', () => {
  let page: Angular4StructurePage;

  beforeEach(() => {
    page = new Angular4StructurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
