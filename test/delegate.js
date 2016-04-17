'use strict';


const delegate = require('../lib/delegate');


describe('delegate', function() {
  it('should delegate methods', function() {
    const target = {
      name: 'hello',
      say: function() {
        return this.name;
      },
      ok: function() {
        return this.name + ' ok';
      }
    };

    const o = {};
    delegate(o, target, ['say', 'ok']);
    o.say().should.equal('hello');
    o.ok().should.equal('hello ok');
  });
});
