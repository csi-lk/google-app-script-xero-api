# google-app-script-xero-api
Example Google Script to handle authentication and PUT to Xero.com's API

After quite a bit of research and piecing together a few resources I managed to create a simple 'just works' solution for connecting Google Apps Script (in my case from Sheets) to Xero.com's API.

If you've found yourself here, I hope this saves you some time 😇

## Explanation

### code.gs

### jsrsasign.gs

## Puzzle Pieces

### Code

* [Google App Script: External APIs](https://developers.google.com/apps-script/guides/services/external)
* [Google App Script: url-fetch-app](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#fetch(String))
* [xero-api-apps-script](https://github.com/rakesh456/xero-api-apps-script)
* [Gas-XeroPrivateApp.js](https://gist.github.com/jamesjryan/b0c09d4bae1a04379972)

### Discussion

* [Xero API (Private Application) access from JavaScript (Google Apps) ](https://community.xero.com/developer/question/31821)
* [Failed to Validate Signature on POST](https://community.xero.com/developer/discussion/3682731)
* [Google Apps Script Auth fails when add query string](https://community.xero.com/developer/discussion/38588394)