import { visit, currentURL } from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'kevinboucher-dot-com/tests/helpers';
import { module, test } from 'qunit';

module('Acceptance | resume', function(hooks) {
    setupApplicationTest(hooks);
    setupMirage(hooks);

    test('Header text is rendered when visiting /resume', async function(assert) {
        await visit('/resume');

        assert.strictEqual(currentURL(), '/resume');

        assert.dom('[data-test-h1="kevin paul boucher"]').hasText('Kevin Paul Boucher');
        assert.dom('[data-test-span="subtitle"]').hasText('UI/UX Engineer');
    });

    test('Relevant links are rendered', async function(assert) {
        await visit('/resume');

        assert.strictEqual(currentURL(), '/resume');

        assert.dom('[data-test-link="resume-pdf"]').exists();
        assert.dom('[data-test-link="linked-in"]').exists();
        assert.dom('[data-test-link="github"]').exists();
        assert.dom('[data-test-link="stack-overflow"]').exists();
        assert.dom('[data-test-link="email"]').exists();
    });

    test('Positions are rendered', async function(assert) {
        server.createList('skill', 5);
        server.createList('position', 10);

        await visit('/resume');

        assert.strictEqual(currentURL(), '/resume');
        assert.dom('[data-test-div="position"]').exists({ count: 10 });
        assert.dom('[data-test-header="position-title"]').exists({ count: 10 });
        assert.dom('[data-test-paragraph="position-organization"]').exists({ count: 10 });
        assert.dom('[data-test-paragraph="position-date-range"]').exists({ count: 10 });
        assert.dom('[data-test-paragraph="position-summary"]').exists({ count: 10 });
        assert.dom('[data-test-list-item="position-detail"]').exists({ count: 50 });
    });
});
