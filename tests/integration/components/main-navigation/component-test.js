import { module, test } from 'qunit';
import { setupRenderingTest } from 'kevinboucher-dot-com/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | main-navigation', function(hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function(assert) {
        /* Set any properties with this.set('myProperty', 'value');
           Handle any actions with this.set('myAction', function(val) { ... }); */

        await render(hbs`<MainNavigation />`);

        assert.dom(this.element).hasText('');
    });
});
