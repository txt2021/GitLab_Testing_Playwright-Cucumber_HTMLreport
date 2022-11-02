const { expect } = require('@playwright/test');
const { Page } = require('./page.js');


const expert_title = ('h1[data-aos="zoom-in-up"]');
const title_text = "Talk to an Expert";
const trial_title = ('main div[class="row"]>div:nth-child(1) h2');
const trial_text = "Free 30-day trial";
const trial_form = ('div[class="signup-page"]');
const experts_form = ('div[class="form_container"]');


exports.TrialPage = class TrialPage extends Page{   
    constructor(page) {
        super(page);
        this.page = page;
        }

        
        async istitleCorrect(){
          await super.checkElement(expert_title,title_text);
        }

        async istitleVisible(){
          await expect(this.page.locator(expert_title)).toBeVisible();
        }

        async istrialCorrect(){
            await super.checkElement(trial_title,trial_text);
          }
  
        async istrialVisible(){
            await expect(this.page.locator(trial_title)).toBeVisible();
          }

        async istrialformVisible(){
            await expect(this.page.locator(trial_form)).toBeVisible();
          }
        async isexpertsformVisible(){
            await expect(this.page.locator(experts_form)).toBeVisible();
          }

}