﻿/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var should = require('should');
var util = require('util');
var _ = require('underscore');

var testUtils = require('../../../util/util');
var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var NetworkTestUtil = require('../../../util/networkTestUtil');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var networkUtil = new NetworkTestUtil();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');
var $ = utils.getLocaleString;

var testPrefix = 'arm-network-application-gateway-http-settings-tests',
  groupName = 'xplat-test-http-settings',
  location;
var index = 0;

var backendHttpSettingsCollection = {
  port: '1313',
  portNew: '4242',
  protocol: 'Http',
  cookieBasedAffinity: 'Enabled',
  cookieBasedAffinityNew: 'Disabled',
  name: 'backendHttpSettingsCollectionName'
};

backendHttpSettingsCollection.virtualNetworkName = 'virtualNetworkName';
backendHttpSettingsCollection.subnetName = 'subnetName';
backendHttpSettingsCollection.publicIPAddressName = 'publicIPAddressName';
backendHttpSettingsCollection.applicationGatewayName = 'applicationGatewayName';
backendHttpSettingsCollection.probeName = 'probeName';

var subnet = {
  addressPrefix: '10.0.0.0/16',
  addressPrefixNew: '10.0.0.0/24'
};
var virtualNetwork = {
  location: 'westus'
};
var applicationGateway = {
  backendAddresses: '10.0.0.0',
  location: 'westus'
};
var probe = {
  host: 'create',
  hostNew: 'set',
  path: '/createpath',
  pathNew: '/setpath',
  timeout: '86400',
  timeoutNew: '1'
};
var publicIPAddress = {
  location: 'westus'
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;

    before(function (done) {
      this.timeout(2 * hour);
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = backendHttpSettingsCollection.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        backendHttpSettingsCollection.location = location;
        backendHttpSettingsCollection.group = groupName;
        backendHttpSettingsCollection.name = suite.isMocked ? backendHttpSettingsCollection.name : suite.generateId(backendHttpSettingsCollection.name, null);
        if (!suite.isPlayback()) {
          networkUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network vnet create -g {1} -n virtualNetworkName --location {location} --json'.formatArgs(virtualNetwork, groupName);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var output = JSON.parse(result.text);
              var cmd = 'network vnet subnet create -g {1} -n subnetName --address-prefix {addressPrefix} --vnet-name virtualNetworkName --json'.formatArgs(subnet, groupName);
              testUtils.executeCommand(suite, retry, cmd, function (result) {
                result.exitStatus.should.equal(0);
                var output = JSON.parse(result.text);
                var cmd = 'network public-ip create -g {1} -n publicIPAddressName --location {location} --json'.formatArgs(publicIPAddress, groupName);
                testUtils.executeCommand(suite, retry, cmd, function (result) {
                  result.exitStatus.should.equal(0);
                  var output = JSON.parse(result.text);
                  var cmd = 'network application-gateway create -g {1} -n applicationGatewayName --servers {backendAddresses} --location {location} --vnet-name virtualNetworkName --subnet-name subnetName --public-ip-name publicIPAddressName --json'.formatArgs(applicationGateway, groupName);
                  testUtils.executeCommand(suite, retry, cmd, function (result) {
                    result.exitStatus.should.equal(0);
                    var output = JSON.parse(result.text);
                    var cmd = 'network application-gateway probe create -g {1} -n probeName --host-name {host} --path {path} --timeout {timeout} --gateway-name applicationGatewayName --json'.formatArgs(probe, groupName);
                    testUtils.executeCommand(suite, retry, cmd, function (result) {
                      result.exitStatus.should.equal(0);
                      var output = JSON.parse(result.text);
                      done();
                    });
                  });
                });
              });
            });
          });
        } else {
          var subscriptionId = profile.current.getSubscription().id;
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(2 * hour);
      networkUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('backend http settings collection', function () {
      this.timeout(2 * hour);
      it('create should create backend http settings collection', function (done) {
        var cmd = 'network application-gateway http-settings create -g {group} -n {name} --port {port} --protocol {protocol} --cookie-based-affinity {cookieBasedAffinity} --gateway-name {applicationGatewayName} --probe-name {probeName} --json'.formatArgs(backendHttpSettingsCollection);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var parentOutput = JSON.parse(result.text);
          parentOutput.name.should.equal('applicationGatewayName');
          var output = utils.findFirstCaseIgnore(parentOutput.backendHttpSettingsCollection, {name: 'backendHttpSettingsCollectionName'});
          output.name.should.equal(backendHttpSettingsCollection.name);
          output.port.should.equal(parseInt(backendHttpSettingsCollection.port, 10));
          output.protocol.toLowerCase().should.equal(backendHttpSettingsCollection.protocol.toLowerCase());
          output.cookieBasedAffinity.toLowerCase().should.equal(backendHttpSettingsCollection.cookieBasedAffinity.toLowerCase());
          done();
        });
      });
      it('show should display backend http settings collection details', function (done) {
        var cmd = 'network application-gateway http-settings show -g {group} -n {name} --gateway-name {applicationGatewayName} --json'.formatArgs(backendHttpSettingsCollection);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(backendHttpSettingsCollection.name);
          output.port.should.equal(parseInt(backendHttpSettingsCollection.port, 10));
          output.protocol.toLowerCase().should.equal(backendHttpSettingsCollection.protocol.toLowerCase());
          output.cookieBasedAffinity.toLowerCase().should.equal(backendHttpSettingsCollection.cookieBasedAffinity.toLowerCase());
          done();
        });
      });
      it('set should update backend http settings collection', function (done) {
        var cmd = 'network application-gateway http-settings set -g {group} -n {name} --port {portNew} --cookie-based-affinity {cookieBasedAffinityNew} --gateway-name {applicationGatewayName} --json'.formatArgs(backendHttpSettingsCollection);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var parentOutput = JSON.parse(result.text);
          parentOutput.name.should.equal('applicationGatewayName');
          var output = utils.findFirstCaseIgnore(parentOutput.backendHttpSettingsCollection, {name: 'backendHttpSettingsCollectionName'});
          output.name.should.equal(backendHttpSettingsCollection.name);
          output.port.should.equal(parseInt(backendHttpSettingsCollection.portNew, 10));
          output.cookieBasedAffinity.toLowerCase().should.equal(backendHttpSettingsCollection.cookieBasedAffinityNew.toLowerCase());
          done();
        });
      });
      it('list should display all backend http settings collection in resource group', function (done) {
        var cmd = 'network application-gateway http-settings list -g {group} --gateway-name {applicationGatewayName} --json'.formatArgs(backendHttpSettingsCollection);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var outputs = JSON.parse(result.text);
          _.some(outputs, function (output) {
            return output.name === backendHttpSettingsCollection.name;
          }).should.be.true;
          done();
        });
      });
      it('delete should delete backend http settings collection', function (done) {
        var cmd = 'network application-gateway http-settings delete -g {group} -n {name} --quiet --gateway-name {applicationGatewayName} --json'.formatArgs(backendHttpSettingsCollection);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network application-gateway http-settings show -g {group} -n {name} --gateway-name {applicationGatewayName} --json'.formatArgs(backendHttpSettingsCollection);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text || '{}');
            output.should.be.empty;
            done();
          });
        });
      });
    });
  });
});
