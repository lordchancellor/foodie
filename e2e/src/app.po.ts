import { browser, by, element } from 'protractor';

export class AppPage {
	navigateTo(): any {
		return browser.get('/');
	}

	getParagraphText(): any {
		return element(by.css('fdy-root h1')).getText();
	}
}
