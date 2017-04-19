import { AngularComponentSamplePage } from './app.po';

describe('angular-component-sample App', () => {
  let page: AngularComponentSamplePage;

  beforeEach(() => {
    page = new AngularComponentSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
