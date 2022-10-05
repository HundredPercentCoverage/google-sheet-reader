const { google } = require('googleapis');
const keys = require('./keys.json');

const googleClient = new google.auth.JWT(
  keys.client_email,
  null,
  keys.private_key,
  ['https://www.googleapis.com/auth/spreadsheets.readonly']
);

async function getSheetData(auth) {
  const sheetsApi = google.sheets({ version: 'v4', auth });

  const opts = {
    spreadsheetId: '', // Enter your spreadsheet ID here
    range: '' // Enter the sheet name and the cell range here, e.g. sheet_one!A2:F2
  }

  try {
    console.log('Retrieving spreadsheet data...');

    const res = await sheetsApi.spreadsheets.values.get(opts);

    console.log('Data received: ', res);
  } catch (err) {
    console.log('Error from API', err);
    process.exit(1);
  }
}

googleClient.authorize((err, tokens) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('Connected!');
    getSheetData(googleClient);
  }
});
