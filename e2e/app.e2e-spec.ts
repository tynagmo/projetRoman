import { FloorplanPage } from './app.po';

describe('floorplan App', () => {
  let page: FloorplanPage;

  beforeEach(() => {
    page = new FloorplanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
