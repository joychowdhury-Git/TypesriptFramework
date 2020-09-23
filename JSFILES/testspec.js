"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculator_1 = require("./pageobjects/calculator");
describe('Chain Locator Tutorial', () => __awaiter(void 0, void 0, void 0, function* () {
    // function will have all test cases (it block)
    it("Chain Locators", () => __awaiter(void 0, void 0, void 0, function* () {
        let calc = new calculator_1.calculator();
        protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        yield calc.firsteditbox.sendKeys("3");
        yield calc.operator.click();
        yield calc.secondeditbox.sendKeys("5");
        yield calc.gobutton.click();
        calc.getresult.getText().then(function (text) {
            console.log(text);
        });
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFpRDtBQUNqRCx5REFBc0Q7QUFFdEQsUUFBUSxDQUFDLHdCQUF3QixFQUFFLEdBQU8sRUFBRTtJQUMzQywrQ0FBK0M7SUFFL0MsRUFBRSxDQUFDLGdCQUFnQixFQUFFLEdBQU8sRUFBRTtRQUU3QixJQUFJLElBQUksR0FBSSxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUU3QixvQkFBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFBO1FBQ3pELE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdEMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTVCLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTVCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUcxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpCLENBQUMsQ0FBQyxDQUFBO0lBRUwsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVILENBQUMsQ0FBQSxDQUFDLENBQUEifQ==