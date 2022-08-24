import { click, currentURL, visit } from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'kevinboucher-dot-com/tests/helpers';
import { module, test } from 'qunit';

module('Acceptance | portfolio', function(hooks) {
    setupApplicationTest(hooks);
    setupMirage(hooks);

    test('visiting /portfolio the base elements are rendered', async function(assert) {
        await visit('/portfolio');

        assert.strictEqual(currentURL(), '/portfolio');

        assert.dom('[data-test-h1="portfolio"]').exists({ count: 1 });
        assert.dom('[data-test-div="portfolio-entries"]').exists({ count: 1 });
        assert.dom('[data-test-component="site-footer"]').exists({ count: 1 });
        assert.dom('[data-test-component="main-navigation"]').exists({ count: 1 });
    });

    test('portfolio entries are rendered', async function(assert) {
        server.createList('portfolio-entry', 5);

        await visit('/portfolio');

        assert.dom('[data-test-div="portfolio-entry"]').exists({ count: 5 });

        await click('[data-test-button="image-modal"]');

        assert.dom('[data-test-component="image-preview-modal-modal"]').exists({ count: 1 });

        await click('[data-test-component="image-preview-modal-modal"] button.btn-close');

        assert.dom('[data-test-component="image-preview-modal-modal"]').doesNotExist();
    });
});
