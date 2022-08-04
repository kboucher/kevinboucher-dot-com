import { module, test } from 'qunit';
import { setupRenderingTest } from 'kevinboucher-dot-com/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | image-preview-modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ImagePreviewModal />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ImagePreviewModal>
        template block text
      </ImagePreviewModal>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
