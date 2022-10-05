# Google Sheet Reader
Script to read data from a Google Sheet so you can then do whatever you need with it.

## Prerequisites
- Node and `npm`
- A Google Cloud account
- A Google Sheet containing some data

## Setup
- Clone repo
- Run `npm i`
- In your Google Cloud account, set up a new IAM user to which you will grant read access to your Google Sheet.
- When setting up the IAM user, be sure to copy the email address provided, and the public key.
- Copy `keys.sample.json` to `keys.json` and paste in the email and public key of the IAM user you created.
- In your Google Sheet, share read access with the IAM user you just created.
- In `index.js` find the code and paste in the relevant values from your Google Sheet:
```
  const opts = {
    spreadsheetId: '', // Enter your spreadsheet ID here
    range: '' // Enter the sheet name and the cell range here, e.g. sheet_one!A2:F2
  }
```
- Run `npm run start`. If everything is set up correctly, the reader will connect and read the data from the sheet and spit it into the console.
