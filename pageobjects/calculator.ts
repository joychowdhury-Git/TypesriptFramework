
import { ElementFinder, element, by} from "protractor";

export class calculator{

    firsteditbox: ElementFinder;
    secondeditbox: ElementFinder;
    gobutton: ElementFinder;
    getresult : ElementFinder;
    operator : ElementFinder;
 constructor(){

    this.firsteditbox = element(by.model('first'));
    this.secondeditbox = element(by.model('second'));
    this.gobutton = element(by.id('gobutton'));
    this.getresult= element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
    this.operator=element(by.model("operator")).element(by.css("option:nth-child(4)"));
 }   
}