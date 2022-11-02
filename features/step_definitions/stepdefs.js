const assert = require('assert');
const { expect } = require('@playwright/test');
const { Given, When, Then } = require('@cucumber/cucumber');

const { SignUpPage } = require('../pages/signupPage');
const { MainPage } = require('../pages/mainPage');
const {TrialPage} = require('../pages/trial_expertsPage')
const { SearchPage } = require('../pages/searchPage');
const { SupportPage } = require('../pages/supportPage');


Given("A user open main GitLab page", { timeout: 60 * 1000}, async function () {
  await this.openUrl();
});

When('A user clicks on {string} button', { timeout: 60 * 1000 }, async function (button)  {
  const mainpage = new MainPage(this.page);
  const searchpage = new SearchPage(this.page);
  switch(button){
    case 'Support':
        await mainpage.clickLoginButton();
      break;   
    case 'Talk to an expert':
      await mainpage.clickexpertsButton();
      break;
    case 'Get free trial':
      await mainpage.clicktrialButton();
      break;
    case 'DevOps':
        await searchpage.clickdevopsButton()      
      break;
    default:
      console.log('Can not find button');
  }
  
});

When('A user clicks on search icon', { timeout: 60 * 1000 }, async function ()  {
  const mainpage = new MainPage(this.page);
  await mainpage.clicksearchButton();
});

When('A user press Enter', { timeout: 60 * 1000 }, async function ()  {
  await this.page.keyboard.press('Enter');
});

When('A user clicks on {string}', { timeout: 60 * 1000 }, async function (button) {
    const mainpage = new MainPage(this.page);
    const signuppage = new SignUpPage(this.page);
    const searchpage = new SearchPage(this.page);
    const supportpage = new SupportPage(this.page);
    switch(button){
      case 'Register1':
        await mainpage.clicksignupButton();
        break;   
        
      case 'Register2':
        await signuppage.clicksubmitButton();
        break;  
        
      case 'Saleforce':
        await signuppage.clicksaleforceButton();
        break;

      case 'Why GitLab':
        await mainpage.clickwhygitlabButton();
        break;
        
      case 'Platform':
        await mainpage.clickplatformButton();
        break;
      
      case 'Solutions':
        await mainpage.clicksolutionsButton();
        break;      
      
      case 'Partners':
        await mainpage.clickpartnersButton();
        break;

      case 'Resources':
        await mainpage.clickresourcesButton();
        break;
      
      case 'Pricing':
        await mainpage.clickpricingButton();

      case 'gitlab.com':
        await searchpage.clickGitlabButton();

      case 'Contact Support':
        await supportpage.clickcontsctButton();
        break;

      case 'Get Help':
        await supportpage.clickgethelpButton();
        break;

      case 'Set up support services':
        await supportpage.clickservicesButton();
        break;

      case 'Contact Sales':
        await supportpage.clicksalesButton();
        break;

      default:
        console.log('Can not find button');
    } 
    
});

When('A user enters {string} in {string} field', { timeout: 60 * 1000 }, async function (data,field) {
  const signuppage = new SignUpPage(this.page);
  const searchpage = new SearchPage(this.page);
  switch(true){
    case data == 'Tester' && field == 'First name':
        await signuppage.enterFirstname();
      break;
   
    case data == 'Smith' && field =='Last name':
        await signuppage.enterLastname();
      break;

    case data == 'tester_8976' && field =='Username':
        await signuppage.enterUsername();
      break;

    case data == 'fahafo5464@civikli.com'  && field =='Email':
        await signuppage.enterEmail();
      break;

    case data == 'fahafo5464'  && field =='Email':
        await signuppage.enterwrongEmail();
      break;

    case data == 'testingpass' && field == 'Password':
        await signuppage.enterPassword();
      break;
    
    case data == 'testing' && field == 'search':
        await searchpage.enterSearchItem();
      break;

    default:
        console.log('Can not find input field');
  }  
});

Then('{string} message was displayed. User was redirected to {string} page', { timeout: 60 * 1000 }, async function (message,url) {
    const signuppage = new SignUpPage(this.page);
    switch(message){
      case 'There was an error with the reCAPTCHA. Please solve the reCAPTCHA again.':
          await signuppage.ismessageVisible();
          await signuppage.ismessageCorrect();
          await expect(this.page).toHaveURL(/.*users/);
        break;
      default:
          console.log('Can not find message');
    }
    
});
Then('{string} message was displayed under the Email field. User stays on the same page', { timeout: 60 * 1000 },  async function (message) {
  const signuppage = new SignUpPage(this.page);
  switch(message){
    case 'Please provide a valid email address.':
        await signuppage.isemailmessageCorrect();
        await expect(this.page).toHaveURL(/.*sign_up/);
      break;
    case 'This field is required.':
        //await signuppage.isemptynameVisible();
        //await signuppage.isemptynameCorrect();
        await signuppage.isemptysurnameVisible();
        await signuppage.isemptysurnameCorrect();
        await expect(this.page).toHaveURL(/.*sign_up/);
      break;
    default:
        console.log('Can not find message');
  }
  
});

Then('Saleforce login form was was displayed. User was redirected to the {string} page', { timeout: 60 * 1000 }, async function (url) {
  const signuppage = new SignUpPage(this.page);
  await expect(this.page).toHaveURL(/.*salesforce/);    
  
});

Then('{string} title was displayed, {string} section was appeared', { timeout: 60 * 1000 }, async function (title,section) {
  const mainpage = new MainPage(this.page);
  switch(title){
    case 'Why GitLab':
        //await mainpage.iswhyformVisible();
        await mainpage.iswhyformCorrect();
        await expect(this.page).toHaveURL(/.*about/);
      break;

    case 'Platform':
        await mainpage.isplatformformVisible();
        await mainpage.isplatformformCorrect();
        await expect(this.page).toHaveURL(/.*about/);
      break;

    case 'Solutions':
      await mainpage.issolutionsformVisible();
      await mainpage.issolutionsformCorrect();
      await expect(this.page).toHaveURL(/.*about/);
      break;
    
    case 'Partners':
        await mainpage.ispartnerformVisible();
        await mainpage.ispartnersformCorrect();
        await expect(this.page).toHaveURL(/.*about/);
        break;

    case 'Resources':
        await mainpage.isresourcesformVisible();
        await mainpage.isresourcesformCorrect();
        await expect(this.page).toHaveURL(/.*about/);
        break;

    default:
        console.log('Can not find section');
  }
  
});

Then('{string} title was displayed. User was redirected to the {string} page', { timeout: 60 * 1000}, async function (title,url) {
  const mainpage = new MainPage(this.page);
  const trialpage = new TrialPage(this.page);
  const supportpage = new SupportPage(this.page);
  switch(title){ 
    case 'Get The One DevOps Platform':
        await mainpage.ispricingtitleVisible();
        await mainpage.ispricingtitleCorrect();
        await expect(this.page).toHaveURL(/.*pricing/);
      break;

    case 'Talk to an Expert':
        await trialpage.istitleVisible();
        await trialpage.istitleCorrect();
        await trialpage.isexpertsformVisible();
        await expect(this.page).toHaveURL(/.*sales/);
      break; 

    case 'Free trial':
        await trialpage.istrialVisible();
        await trialpage.istrialCorrect();
        await trialpage.istrialformVisible();
        await expect(this.page).toHaveURL(/.*trial_registrations/);
      break; 
    
    case 'What is DevOps?':        
        await expect(this.page).toHaveURL(/.*about/);
        break;

    case 'GitLab Support':
        //await supportpage.isresultVisible();
        await supportpage.iscontactCorrect();
        await expect(this.page).toHaveURL(/.*support/);
        break;

    case 'Help Topics':
          await supportpage.isresultVisible();
          await supportpage.isgethelpCorrect();
          await expect(this.page).toHaveURL(/.*get-help/);
          break;

    case 'GitLab Professional Services':
          //await supportpage.isservicesVisible();
          //await supportpage.isservicesCorrect();
          await expect(this.page).toHaveURL(/.*services/);
          break; 
          
    case 'Sign Up form':
        await supportpage.isregisterformVisible();
        await expect(this.page).toHaveURL(/.*sign_up/);
        break;

    default:
        console.log('Can not find title');
  }
});

Then('{string} title was displayed. User stays on the same page', { timeout: 60 * 1000 }, async function (title) {
  const searchpage = new SearchPage(this.page);
  await searchpage.isresulttitleVisible();
  await searchpage.isresulttitleCorrect();
  await expect(this.page).toHaveURL(/.*about/);
});

Then('User was redirected to the {string} page. Sign in form was displayed', { timeout: 60 * 1000 }, async function (title) {
  const searchpage = new SearchPage(this.page);
  await expect(this.page).toHaveURL(/.*about/);
});