import { MorganStanleyPage } from './app.po';

describe('morgan-stanley App', function() {
  let page: MorganStanleyPage;

  beforeEach(() => {
    page = new MorganStanleyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
