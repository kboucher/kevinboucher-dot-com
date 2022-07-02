import { module, test } from 'qunit';
import { setupTest } from 'kevinboucher-dot-com/tests/helpers';

module('Unit | Route | portfolio', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:portfolio');
    assert.ok(route);
  });
});
