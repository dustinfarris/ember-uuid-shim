import { module, test } from 'ember-qunit';

import {
  v1,
  v4
} from 'uuid';


module('Unit | vendor imports | uuid');


test('it exports v1', function(assert) {
  assert.ok(v1);
});


test('it exports v4', function(assert) {
  assert.ok(v4);
});
