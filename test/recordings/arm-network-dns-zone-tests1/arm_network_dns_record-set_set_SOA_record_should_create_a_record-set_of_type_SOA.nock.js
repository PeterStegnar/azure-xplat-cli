// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set6852/providers/Microsoft.Network/dnszones/exampledns.com/SOA/@?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set6852\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"ad7166d5-dd0c-4b33-8d71-fcbf540a6435\",\"properties\":{\"fqdn\":\"exampledns.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"azuredns-hostmaster.microsoft.com\",\"expireTime\":2419200,\"host\":\"ns1-07.azure-dns.com.\",\"minimumTTL\":300,\"refreshTime\":3600,\"retryTime\":300,\"serialNumber\":1}}}", { 'cache-control': 'private',
  'content-length': '507',
  'content-type': 'application/json; charset=utf-8',
  etag: 'ad7166d5-dd0c-4b33-8d71-fcbf540a6435',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'cf10fcbc-b319-473b-b923-50fc972dc78d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'bf83d978-4a88-4de7-a9e2-89ac9d8d0477',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080520Z:bf83d978-4a88-4de7-a9e2-89ac9d8d0477',
  date: 'Mon, 09 Jan 2017 08:05:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set6852/providers/Microsoft.Network/dnszones/exampledns.com/SOA/@?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set6852\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"ad7166d5-dd0c-4b33-8d71-fcbf540a6435\",\"properties\":{\"fqdn\":\"exampledns.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"azuredns-hostmaster.microsoft.com\",\"expireTime\":2419200,\"host\":\"ns1-07.azure-dns.com.\",\"minimumTTL\":300,\"refreshTime\":3600,\"retryTime\":300,\"serialNumber\":1}}}", { 'cache-control': 'private',
  'content-length': '507',
  'content-type': 'application/json; charset=utf-8',
  etag: 'ad7166d5-dd0c-4b33-8d71-fcbf540a6435',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'cf10fcbc-b319-473b-b923-50fc972dc78d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'bf83d978-4a88-4de7-a9e2-89ac9d8d0477',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080520Z:bf83d978-4a88-4de7-a9e2-89ac9d8d0477',
  date: 'Mon, 09 Jan 2017 08:05:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set6852/providers/Microsoft.Network/dnszones/exampledns.com/SOA/@?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set6852\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"c9137682-879b-48a7-828c-abd1654d480c\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"exampledns.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"mail.microsoft.com\",\"expireTime\":60000,\"host\":\"ns1-07.azure-dns.com.\",\"minimumTTL\":2400,\"refreshTime\":3600,\"retryTime\":6400,\"serialNumber\":123}}}", { 'cache-control': 'private',
  'content-length': '533',
  'content-type': 'application/json; charset=utf-8',
  etag: 'c9137682-879b-48a7-828c-abd1654d480c',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fe22afe1-afd9-45b5-a114-192a7500a3fb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '0f1ca9d8-0bdc-40f2-b1d0-742ce13b57ea',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080521Z:0f1ca9d8-0bdc-40f2-b1d0-742ce13b57ea',
  date: 'Mon, 09 Jan 2017 08:05:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set6852/providers/Microsoft.Network/dnszones/exampledns.com/SOA/@?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set6852\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"c9137682-879b-48a7-828c-abd1654d480c\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"exampledns.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"mail.microsoft.com\",\"expireTime\":60000,\"host\":\"ns1-07.azure-dns.com.\",\"minimumTTL\":2400,\"refreshTime\":3600,\"retryTime\":6400,\"serialNumber\":123}}}", { 'cache-control': 'private',
  'content-length': '533',
  'content-type': 'application/json; charset=utf-8',
  etag: 'c9137682-879b-48a7-828c-abd1654d480c',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fe22afe1-afd9-45b5-a114-192a7500a3fb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '0f1ca9d8-0bdc-40f2-b1d0-742ce13b57ea',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080521Z:0f1ca9d8-0bdc-40f2-b1d0-742ce13b57ea',
  date: 'Mon, 09 Jan 2017 08:05:20 GMT',
  connection: 'close' });
 return result; }]];