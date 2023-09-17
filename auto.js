const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  // Launch a headless Chromium browser
  const browser = await puppeteer.launch({ headless : false});

  // Create a new page
  const page = await browser.newPage();

  // Navigate to the target website
  await page.goto('https://sdtmut1.fincen.treas.gov/lc/content/xfaforms/profiles/htmldefault.html');

 

  await page.type('input[name=Email_5]', 'matthewmanning432@gmail.com');

  await page.type('input[name=ConfirmedEmail_6]', 'matthewmanning432@gmail.com');

  await page.type('input[name=FirstName_7]', 'matthew');

  await page.type('input[name=LastName_8]', 'manning');

  await page.type('input[name=PhoneNumber_9]', '18767873027');

  await page.type('input[name=FilingName_23]', 'SMITH FBAR 2018');

  await page.type('input[name=CalYear_55]', '2023');

  // Use page.select to choose an option by its value
  await page.select('select[name="FilerType_62"]', 'B');
  await page.type('input[name=TIN_65]', '112345679444');


  await page.select('select[name="TINTYPE_66"]', 'A');

  await page.select('select[name="month_80"]', '05');
  await page.select('select[name="day_81"]', '17');
  await page.select('select[name="year_79"]', '2004');


  await page.type('textarea[name=LastName_78]', 'Manning');

  await page.type('input[name=FirstName_83]', 'Matthew');

  await page.type('input[name=MiddleName_84]', 'Orville');

  await page.type('input[name=Suffix_85]', 'Mr');

  await page.type('textarea[name=Address_86]', '15973 Baxter Creek Drive');

  await page.type('input[name=City_87]', 'Jacksonville');

  await page.click('input[name=InterestIn25OrMoreNo_94]');

  await page.click('input[name=SigAuthIn25OrMoreNo_101]',);


  await page.type('input[name=ZIP_89]', '32218');



  await page.click('select[name="CountryIndividual_90"]');
  await page.select('select[name="CountryIndividual_90"]', 'US ');
  await page.click('select[name="State_88"]');
  await page.select('select[name="State_88"]', 'AL ');






  


  // Click on the <select> element

  // Take a screenshot after clicking
  await page.screenshot({ path: 'select_clicked.png' });

 
  //Has to be before
  page.on('dialog', async dialog => { await dialog.accept(); })

  await page.click('input[name="Sign_26"]');

  await page.click('input[name="Submit_33"]');








 





  const clip = {
    x: 100,      // X-coordinate of the top-left corner
    y: 2900,      // Y-coordinate of the top-left corner
    width: 1800,  // Width of the section
    height: 2000, // Height of the section
  };

  // Use page.screenshot with the clip option to capture the specified section
  await page.screenshot({ path: 'section_screenshot.png', clip });
    
  const sleep = duration => new Promise(resolve => setTimeout(resolve, duration));
  await sleep(80000);

  



  // Close the browser
  await browser.close();
})();
