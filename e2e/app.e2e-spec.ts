import { CoffeeJournalAppPage } from './app.po';

describe('coffee-journal-app App', function() {
  let page: CoffeeJournalAppPage;

  beforeEach(() => {
    page = new CoffeeJournalAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
