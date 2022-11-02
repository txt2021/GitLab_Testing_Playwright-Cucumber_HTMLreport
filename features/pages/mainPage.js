const { expect } = require('@playwright/test');
const { Page } = require('./page.js');


const login_button = ('[id="supportDropdown"]');
const sign_up_button = ('[data-nav="register"]');
const whygitlab_button = ('[name="Why GitLab"]');
const whygit_form = ('[id="be-navigation-desktop"] h2');
const platform_button = ('[name="Platform"]');
const platform_form = ('[class="slp-row menu_row"] h2');
const solutions_button = ('[name="Solutions"]');
const solutions_form = ('[class="slp-container menu_container"] h2')
const pricing_button =('[name="Pricing"]');
const pricing_title = ('[tag="h1"]')
const partners_button = ('[name="Partners"]');
const partners_form = ('[class="slp-row menu_row"] h2');
const resources_button = ('[name="Resources"]');
const resources_form = ('[class="menu_left-column slp-col-md-3"] h2');
const expert_button = ('[name="Talk to an expert"]');
const trial_button = ('[name="Get free trial"]');
const search_button = ('button[aria-label="Search"]');

const why_text = " Why GitLab ";
const platform_text = " Platform ";
const solutions_text = " Solutions ";
const pricing_text = "Get The One  DevOps Platform"
const partners_text = " Partners ";
const resources_text = " Resources ";

exports.MainPage = class MainPage extends Page{   
    constructor(page) {
        super(page);
        this.page = page;
        }

      async clickLoginButton(){
            await super.click(login_button);    
          }
      async clicksignupButton(){
            await super.click(sign_up_button);
          }

      async clickwhygitlabButton(){
        await super.click(whygitlab_button);
      }

      async clickplatformButton(){
        await super.click(platform_button);
      }

      async clicksolutionsButton(){
        await super.click(solutions_button);
      }

      async clickpricingButton(){
        await super.click(pricing_button);
      }

      async clickpartnersButton(){
        await super.click(partners_button);
      }

      async clickresourcesButton(){
        await super.click(resources_button);
      }

      async clickexpertsButton(){
        await super.click(expert_button);
      }

      async clicktrialButton(){
        await super.click(trial_button);
      }

      async clicksearchButton(){
        await super.click(search_button);
      }

      async iswhyformVisible(){
        await expect(this.page.locator(whygit_form)).toBeVisible();
      }

      async iswhyformCorrect(){
        await super.checkElement(whygit_form,why_text);
      }

      async isplatformformVisible(){
        await expect(this.page.locator(platform_form)).toBeVisible();
      }

      async isplatformformCorrect(){
        await super.checkElement(platform_form,platform_text);
      }

      async issolutionsformVisible(){
        await expect(this.page.locator(solutions_form)).toBeVisible();
      }

      async issolutionsformCorrect(){
        await super.checkElement(solutions_form,solutions_text);
      }

      async ispricingtitleVisible(){
        await expect(this.page.locator(pricing_title)).toBeVisible();
      }

      async ispricingtitleCorrect(){
        await super.checkElement(pricing_title,pricing_text);
      }

      async ispartnerformVisible(){
        await expect(this.page.locator(partners_form)).toBeVisible();
      }

      async ispartnersformCorrect(){
        await super.checkElement(partners_form,partners_text);
      }

      async isresourcesformVisible(){
        await expect(this.page.locator(resources_form)).toBeVisible();
      }

      async isresourcesformCorrect(){
        await super.checkElement(resources_form,resources_text);
      }

  

}