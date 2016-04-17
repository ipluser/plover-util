'use strict';


const RouteInfo = require('../lib/route-info');


describe('route-info', function() {
  it('#parse', function() {
    const parent = { module: 'index' };

    let route = RouteInfo.parse(parent, 'view');
    route.module.should.equal('index');
    route.action.should.equal('view');

    route = RouteInfo.parse(parent, 'offer:item');
    route.module.should.equal('offer');
    route.action.should.equal('item');

    route = RouteInfo.parse(parent, './offer:item');
    route.module.should.equal('index/offer');
    route.action.should.equal('item');

    route = RouteInfo.parse(parent);
    route.module.should.equal('index');
    route.action.should.equal('view');
  });


  it('#regular', function() {
    let route = { module: 'index', action: 'item' };
    RouteInfo.regular(route);
    route.url.should.equal('index:item');

    route = { module: 'offer' };
    RouteInfo.regular(route);
    route.url.should.equal('offer:view');
  });
});
