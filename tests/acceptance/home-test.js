import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'kevinboucher-dot-com/tests/helpers';

module('Acceptance | home', function(hooks) {
    setupApplicationTest(hooks);

    test('Home page hero text renders', async function(assert) {
        await visit('/');

        assert.strictEqual(currentURL(), '/');

        assert.dom('[data-test-div="home-hero"]').exists();
        assert.dom('[data-test-h1="kevin boucher"]').hasText('Kevin Boucher');
        assert.dom('[data-test-h1="ui-ux engineer"]').hasText('UI/UX Engineer JavaScript · HTML · CSS');
    });

    test('Main navigation renders on Home page', async function(assert) {
        await visit('/');

        assert.strictEqual(currentURL(), '/');

        assert.dom('[data-test-component="main-navigation"] ul li').exists({ count: 4 }, 'Four nav items are rendered');
        assert.dom('[data-test-component="main-navigation"] ul li:first-of-type')
            .isNotVisible('Home link is hidden on home route');
    });
});
