function createInvoice() {
  var oauth_nonce = createGuid();
  var oauth_timestamp = (new Date().valueOf()/1000).toFixed(0);
  var CONSUMER_KEY = 'Paste your consumer key here'
  var PEM_KEY = '-----BEGIN RSA PRIVATE KEY-----'+
                'Paste your RSA Key here'+
                '-----END RSA PRIVATE KEY-----';

  // Set due date 14 days from now
  var dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 14);

  var payload = '<Invoice>'+
                ' <Type>ACCREC</Type>'+
                ' <Contact><ContactID>265f93ef-0dfb-4d95-942a-42cd685b67a4</ContactID></Contact>'+
                ' <CurrencyCode>AUD</CurrencyCode>'+
                ' <Reference>Test</Reference>'+
                ' <DueDate>'+dueDate.toISOString()+'</DueDate>'+
                ' <LineItems>'+
                '   <LineItem>'+
                '   <Description>This is a test invoice</Description>'+
                '   <Quantity>1</Quantity>'+
                '   <UnitAmount>10</UnitAmount>'+
                '   <ItemCode>Services</ItemCode>'+
                '   </LineItem>'+
                ' </LineItems>'+
                ' <Status>DRAFT</Status>'+
                '</Invoice>';

  var URL = 'https://api.xero.com/api.xro/2.0/invoices'
  var signatureBase = "PUT" + "&"
      + encodeURIComponent(URL) + "&"
      + encodeURIComponent("oauth_consumer_key=" + CONSUMER_KEY +
                           "&oauth_nonce=" + oauth_nonce + "&oauth_signature_method=RSA-SHA1&oauth_timestamp=" +
                           oauth_timestamp + "&oauth_token=" + CONSUMER_KEY + "&oauth_version=1.0");

  var rsa = new RSAKey();
  rsa.readPrivateKeyFromPEMString(PEM_KEY);
  var hashAlg = "sha1";
  var hSig = rsa.signString(signatureBase, hashAlg);

  var oauth_signature = encodeURIComponent(hextob64(hSig));

  var authHeader = "OAuth oauth_token=\"" + CONSUMER_KEY + "\",oauth_nonce=\"" + oauth_nonce +
    "\",oauth_consumer_key=\"" + CONSUMER_KEY + "\",oauth_signature_method=\"RSA-SHA1\",oauth_timestamp=\"" +
      oauth_timestamp + "\",oauth_version=\"1.0\",oauth_signature=\"" + oauth_signature + "\"";
  var headers = {
    "Authorization": authHeader,
    "Accept": "application/json"
  };
  var options = {
    "headers": headers,
    'method' : 'PUT',
    'payload' : payload,
    'muteHttpExceptions': true,
  };

  Logger.log(authHeader);

  var response = UrlFetchApp.fetch(URL, options);
  var responseXml = response.getContentText();
  Logger.log(responseXml);
}

function createGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16)
      });
}