'use strict';


const PloverUtil = require('..');

describe('plover-util', function() {
  it('#Array', function() {
    PloverUtil.Array.should.not.undefined();
  });

  it('#Delegate', function() {
    PloverUtil.Delegate.should.not.undefined();
  });

  it('#Lang', function() {
    PloverUtil.Lang.should.not.undefined();
  });

  it('#RouteInfo', function() {
    PloverUtil.RouteInfo.should.not.undefined();
  });

  it('#SafeString', function() {
    PloverUtil.SafeString.should.not.undefined();
  });
});
