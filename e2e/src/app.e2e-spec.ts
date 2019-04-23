import { HelixPage } from './app.po';

describe('Helix App', () => {
    let page: HelixPage;

    beforeEach(() => {
        page = new HelixPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to Helix!');
    });
});
