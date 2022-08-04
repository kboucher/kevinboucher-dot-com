import { module, test } from 'qunit';
import { setupRenderingTest } from 'kevinboucher-dot-com/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | site-footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SiteFooter />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <SiteFooter>
        template block text
      </SiteFooter>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
