# google-app-script-xero-api
Example Google Script to handle authentication and PUT to Xero.com's API

After quite a bit of research and piecing together a few resources I managed to create a simple 'just works' solution for connecting Google Apps Script (in my case from Sheets) to Xero.com's API.

If you've found yourself here, I hope this saves you some time 😇

## Explanation

To get the code to work you need to input your `CONSUMER_KEY` and `PEM_KEY` where noted.

_Note: I just needed a quick and dirty solution for this, I know the code can be vastly improved, if you have time feel free to [submit a pull request](https://github.com/Si1kIfY/google-app-script-xero-api/pull/new/master)._

### code.gs

Is a pretty straightforward read, you need to change:

* Required API `URL` 
* `payload` (in accordance with [Xero's API docs](https://developer.xero.com/documentation/api/api-overview))

And it should 'just work'

### jsrsasign.gs

Version `5.0.1` is specifically used as it doesn't use as many external dependencies as the newer versions.

Is used to read the PEM key from string then sign it to send through the oauth process

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