const { expect } = require('@playwright/test');
const { Page } = require('./page.js');


const user_firstname = ('[id="new_user_first_name"]');
const test_firstname = 'Tester';
const user_lastname = ('[id="new_user_last_name"]');
const test_surname = 'Smith';
const username = ('[id="new_user_username"]');
const test_name = 'tester_8976';
const user_email = ('[id="new_user_email"]');
const test_incorrect_email = 'fahafo5464';
const test_email = 'fahafo5464@civikli.com';
const password = ('[id="new_user_password"]');
const test_pass = 'testingpass';
const submit_button = ('[data-disable-with="Register"]');
const final_message = ('[class="gl-alert-body"]');
const email_message = ('[class="gl-field-error"]');
const capcha_text = "There was an error with the reCAPTCHA. Please solve the reCAPTCHA again.";
const email_text = "Please provide a valid email address.";
const signin_button = ('[href="/users/sign_in?redirect_to_referer=yes"]');
const firstname_error = ('[id="new_user_first_name"] ~[class="gl-field-error"]');
const lastname_error = ('[id="new_user_last_name"] ~[class="gl-field-error"]');
const empty_text = "This field is required.";
const saleforce_button = ('[href="/users/auth/salesforce"]');
const saleforce_form = ('[id="content"]');

exports.SignUpPage = class SignUpPage extends Page{   
    constructor(page) {
        super(page);
        this.page = page;
        }

        async enterFirstname(){
        await super.type(user_firstname,test_firstname);
        }

        async enterLastname(){
          await super.type(user_lastname,test_surname);
        }

        async enterUsername() {
          await super.type(username,test_name);
        }

        async enterEmail(){
          await super.type(user_email,test_email);
        }

        async enterwrongEmail(){
          await super.type(user_email,test_incorrect_email);
        }

        async enterPassword(){
          await super.type(password,test_pass);
        }

        async clicksubmitButton(){
          await super.click(submit_button);
      
        }

        async ismessageVisible(){
          await expect(this.page.locator(final_message)).toBeVisible();
        }

        async ismessageCorrect(){
          await super.checkElement(final_message,capcha_text);
        }

        async isemailmessageVisible(){
          await expect(this.page.locator(email_message)).toBeVisible();
        }

        async isemailmessageCorrect(){
          await super.checkElement(email_message,email_text);
        }

        async clicksigninButton(){
          await super.click(signin_button);
      
        }

        async clicksaleforceButton(){
          await super.click(saleforce_button);
      
        }

        async isemptynameVisible(){
          await expect(this.page.locator(firstname_error)).toBeVisible();
        }

        async isemptysurnameVisible(){
          await expect(this.page.locator(lastname_error)).toBeVisible();
        }

        async isemptynameCorrect(){
          await super.checkElement(firstname_error,empty_text);
        }

        async isemptysurnameCorrect(){
          await super.checkElement(lastname_error,empty_text);
        }

        async issaleforceVisible(){
          await expect(this.page.locator(saleforce_form)).toBeVisible();
        }

   


}