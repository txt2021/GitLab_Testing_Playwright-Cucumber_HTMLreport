const { expect } = require('@playwright/test');
const { Page } = require('./page.js');


const contact_button = ('ul[class="support-dropdown_item"] li>a[href="/support/"]');
const contact_result = ('div[role="main"] h1');
const contact_result_text = "GitLab Support";
const gethelp_button = ('ul[class="support-dropdown_item"] li>a[href="/get-help/"]');
const gethelp_result_text = "Help Topics";
const services_button = ('ul[class="support-dropdown_item"] li>a[href="/services/"]');
const services_result = ('div[class="blank-header"] h1');
const services_result_text = "GitLab Professional Services";
const sales_button = ('ul[class="support-dropdown_item"] li>a[href="/sales/"]');
const sales_result = ('h1[data-aos="zoom-in-up"]');
const sales_result_text = "Talk to an Expert";
const register_button = ('[data-nav="register"]');
const register_form = ('div[class="signup-page"]');


exports.SupportPage = class SupportPage extends Page{   
    constructor(page) {
        super(page);
        this.page = page;
        }

        async clickcontsctButton(){
            await super.click(contact_button);
        
        }
        async isresultVisible(){
            await expect(this.page.locator(contact_result)).toBeVisible();
        }
  
        async iscontactCorrect(){
              await super.checkElement(contact_result,contact_result_text);
        }

        async clickgethelpButton(){
                await super.click(gethelp_button);        
        }

        async isgethelpCorrect(){
            await super.checkElement(contact_result,gethelp_result_text);
        }

        async clickservicesButton(){
            await super.click(services_button);        
        }

        async isservicesVisible(){
            await expect(this.page.locator(services_result)).toBeVisible();
        }
  
        async isservicesCorrect(){
              await super.checkElement(services_result,services_result_text);
        }

        async clicksalesButton(){
            await super.click(sales_button);        
        }

        async issalesVisible(){
            await expect(this.page.locator(sales_result)).toBeVisible();
        }
  
        async issalesCorrect(){
              await super.checkElement(sales_result,sales_result_text);
        }

        async clickregisterButton(){
            await super.click(register_button);        
        }

        async isregisterformVisible(){
            await expect(this.page.locator(register_form)).toBeVisible();
        }

       
}