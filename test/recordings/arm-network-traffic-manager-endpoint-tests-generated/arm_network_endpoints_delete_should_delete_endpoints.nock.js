// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/profileName/ExternalEndpoints/endpointName?api-version=2017-05-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-endpoint\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/profileName\\/externalEndpoints\\/endpointName\",\"name\":\"endpointName\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Disabled\",\"endpointMonitorStatus\":\"Disabled\",\"target\":\"test-profile-dns.azure.com\",\"weight\":101,\"priority\":202,\"endpointLocation\":\"West US\",\"geoMapping\":[\"RU\",\"GEO-AP\"]}}", { 'cache-control': 'private',
  'content-length': '493',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '244db515-886b-48b2-bdda-50d6c01c784a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '73886718-c643-4b4f-b2f9-4b7a691abb9e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T115522Z:73886718-c643-4b4f-b2f9-4b7a691abb9e',
  date: 'Wed, 27 Sep 2017 11:55:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/profileName/ExternalEndpoints/endpointName?api-version=2017-05-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-endpoint\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/profileName\\/externalEndpoints\\/endpointName\",\"name\":\"endpointName\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Disabled\",\"endpointMonitorStatus\":\"Disabled\",\"target\":\"test-profile-dns.azure.com\",\"weight\":101,\"priority\":202,\"endpointLocation\":\"West US\",\"geoMapping\":[\"RU\",\"GEO-AP\"]}}", { 'cache-control': 'private',
  'content-length': '493',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '244db515-886b-48b2-bdda-50d6c01c784a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '73886718-c643-4b4f-b2f9-4b7a691abb9e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T115522Z:73886718-c643-4b4f-b2f9-4b7a691abb9e',
  date: 'Wed, 27 Sep 2017 11:55:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/profileName/ExternalEndpoints/endpointName?api-version=2017-05-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '9e811d24-789e-405d-acaf-69db7f767061',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '13e06222-84fd-4b61-b79b-6eaf80ee1886',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T115523Z:13e06222-84fd-4b61-b79b-6eaf80ee1886',
  date: 'Wed, 27 Sep 2017 11:55:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/profileName/ExternalEndpoints/endpointName?api-version=2017-05-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '9e811d24-789e-405d-acaf-69db7f767061',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '13e06222-84fd-4b61-b79b-6eaf80ee1886',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T115523Z:13e06222-84fd-4b61-b79b-6eaf80ee1886',
  date: 'Wed, 27 Sep 2017 11:55:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/profileName/ExternalEndpoints/endpointName?api-version=2017-05-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The endpoint 'endpointname' of type 'externalendpoints' does not exist in the profile 'profileName'.\"}", { 'cache-control': 'private',
  'content-length': '132',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '6429eb4b-3e1c-436f-9f88-bb6048259f8e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '21a55132-d658-4e3c-894e-1ed35f593906',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T115525Z:21a55132-d658-4e3c-894e-1ed35f593906',
  date: 'Wed, 27 Sep 2017 11:55:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/profileName/ExternalEndpoints/endpointName?api-version=2017-05-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The endpoint 'endpointname' of type 'externalendpoints' does not exist in the profile 'profileName'.\"}", { 'cache-control': 'private',
  'content-length': '132',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '6429eb4b-3e1c-436f-9f88-bb6048259f8e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '21a55132-d658-4e3c-894e-1ed35f593906',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T115525Z:21a55132-d658-4e3c-894e-1ed35f593906',
  date: 'Wed, 27 Sep 2017 11:55:24 GMT',
  connection: 'close' });
 return result; }]];