import { module, test } from 'qunit';
import { setupTest } from 'kevinboucher-dot-com/tests/helpers';

module('Unit | Model | position', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('position', {});
    assert.ok(model);
  });
});
