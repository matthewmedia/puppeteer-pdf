const puppeteer = require('puppeteer');

(async () => {
  // Launch a headless Chromium browser
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  // Navigate to the target website
  await page.goto('https://sdtmut1.fincen.treas.gov/NoRegFilerUpload');

  // Fill out the form fields (replace with actual data)
  await page.type('#email', 'matthewmanning432@gmail.com'); // Replace with the actual field ID and value
  await page.type('#confirmedEmail', 'matthewmanning432@gmail.com');
  await page.type('#fname', 'matthew');
  await page.type('#lname', 'manning'); // Replace with the actual field ID and value
  await page.type('#phoneNo', '9177683806'); // 

  const [fileChooser] = await Promise.all([
    page.waitForFileChooser(),
    page.click('#fileName'), // some button that triggers file selection
  ]);
  await fileChooser.accept(['tmp/test.pdf']);
  // Click the submit button (replace with actual button selector)
  await page.click('#noRegSubmit'); // Replace with the actual button ID or selector

  // Wait for the form submission to complete (replace with appropriate condition)

  // Capture a screenshot (optional)
  await page.screenshot({ path: 'screenshot.png' });

  // Close the browser
  await browser.close();
})();
