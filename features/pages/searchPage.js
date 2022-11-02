const { expect } = require('@playwright/test');
const { Page } = require('./page.js');


const search_input = ('input[placeholder="Search"]');
const search_text = "testing";
const searh_results_title = ('[class="search-results__header"]');
const devops_button = ('a[data-ga-name="DevOps"]');
const devops_title = ('div[class="copy"]>h1');
const devops_text = "What is DevOps?";
const gitlab_link = ('a[href="https://gitlab.com/users/sign_in/"]');


exports.SearchPage = class SearchPage extends Page{   
    constructor(page) {
        super(page);
        this.page = page;
        }

        async enterSearchItem(){
            await super.type(search_input,search_text);
            }

        async isresulttitleVisible(){
          await expect(this.page.locator(searh_results_title)).toBeVisible();
        }

        async isresulttitleCorrect(){
            await super.checkElement(searh_results_title,search_text);
          }

        async clickdevopsButton(){
            await super.click(devops_button);
        
        }

        async isdevopsVisible(){
            await expect(this.page.locator(devops_title)).toBeVisible();
          }
  
        async isdevopsCorrect(){
              await super.checkElement(devops_title,devops_text);
            }

        async clickGitlabButton(){
                await super.click(gitlab_link);
            
        }

}