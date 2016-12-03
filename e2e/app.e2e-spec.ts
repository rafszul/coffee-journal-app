import { PomegranateChatNg2MdFirePage } from './app.po';

describe('pomegranate-chat-ng2-md-fire App', function() {
  let page: PomegranateChatNg2MdFirePage;

  beforeEach(() => {
    page = new PomegranateChatNg2MdFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
