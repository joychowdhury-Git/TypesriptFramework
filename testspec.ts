import {browser,element,by,By} from 'protractor';
import { calculator } from './pageobjects/calculator';

describe('Chain Locator Tutorial', async()=> {
	// function will have all test cases (it block)

	it("Chain Locators", async()=> {

		let calc =  new calculator();

		browser.get("https://juliemr.github.io/protractor-demo/")
		await calc.firsteditbox.sendKeys("3");
		
		await calc.operator.click();
		
		await calc.secondeditbox.sendKeys("5");
		await calc.gobutton.click();

		calc.getresult.getText().then(function(text)
				{
			
			console.log(text);
			
				})

	})

})