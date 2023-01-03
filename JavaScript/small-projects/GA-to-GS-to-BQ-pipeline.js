// function JS to export and move data from Google Analytics service API into a Data Warehouse ----

function GaExport() {
  try {

    var firstProfile = enter your GA profile number here;
    var results = getReportDataForProfile(firstProfile);
    outputToSpreadsheet(results);
    var yestDate = new Date();
    yestDate.setDate(yestDate.getDate()-1);
    var formattedDate = Utilities.formatDate(yestDate, "GMT", "yyyyMMdd");
    SpreadsheetApp.getActiveSpreadsheet().renameActiveSheet(formattedDate);

  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function getReportDataForProfile(firstProfile) {

  var profileId = again enter the same profile number as above
  var tableId = 'ga:' + profileId;
  var startDate = getLastNdays(1);   // 1 day ago
  var endDate = getLastNdays(1);      // Today.

  var optArgs = {
    'dimensions': 'ga:date, ga:source, ga:medium, ga:campaign, ga:adContent',           // Comma separated list of dimensions.
    'sort': '-ga:date',                                                       // Sort descending by date.
    //'segment': 'dynamic::ga:isMobile==Yes',                          // Process only mobile traffic.
    //'filters': 'ga:source==google',                                  // Display only google traffic.
    'start-index': '1',
    'max-results': '100000'                                         // Display the first 100000 results.
  };

  // Make a request to the API.
  var results = Analytics.Data.Ga.get(
      tableId,
      startDate,
      endDate,
      'ga:sessions,ga:pageviews', // Comma seperated list of metrics.
      optArgs);

  if (results.getRows()) {
    return results;

  } else {
    throw new Error('No views (profiles) found');
  }
}

function getLastNdays(nDaysAgo) {
  var today = new Date();
  var before = new Date();
  before.setDate(today.getDate() - nDaysAgo);
  return Utilities.formatDate(before, 'GMT', 'yyyy-MM-dd');
}

// create a new sheet in Google Sheets and for each column print the header onto the sheet. Then fill those columns with the GA data

function outputToSpreadsheet(results) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(0);

  // Print the headers.
  var headerNames = [];
  for (var i = 0, header; header = results.getColumnHeaders()[i]; ++i) {
    headerNames.push(header.getName());
  }
  sheet.getRange(1, 1, 1, headerNames.length)
      .setValues([headerNames]);

  // Print the rows of data.
  sheet.getRange(2, 1, results.getRows().length, headerNames.length)
      .setValues(results.getRows());

}

// CloudRun Function 
