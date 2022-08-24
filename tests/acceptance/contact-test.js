import {
    click,
    currentURL,
    fillIn,
    visit,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'kevinboucher-dot-com/tests/helpers';
import { module, test } from 'qunit';

module('Acceptance | contact', function(hooks) {
    setupApplicationTest(hooks);

    test('visiting /contact the header and form are rendered', async function(assert) {
        await visit('/contact');

        assert.strictEqual(currentURL(), '/contact');
        assert.dom('[data-test-h1="contact"]').exists({ count: 1 });
        assert.dom('[data-test-form="contact"]').exists({ count: 1 });
        assert.dom('[data-test-input="name"]').exists({ count: 1 });
        assert.dom('[data-test-input="email"]').exists({ count: 1 });
        assert.dom('[data-test-textarea="message"]').exists({ count: 1 });
    });

    test('submit button is disabled by default', async function(assert) {
        await visit('/contact');

        assert.dom('[data-test-button="submit"]').isDisabled();
    });

    test('submit button is enabled when required fields are filled', async function(assert) {
        await visit('/contact');

        // Manually fulfill captcha
        this.owner.lookup('route:contact').controller.isHuman = true;

        await fillIn('[data-test-input="email"]', 'address@example.com');

        assert.dom('[data-test-button="submit"]').isNotDisabled();
    });

    test('temporary modal is displayed when form is submitted', async function(assert) {
        await visit('/contact');

        // Manually fulfill captcha
        this.owner.lookup('route:contact').controller.isHuman = true;

        await fillIn('[data-test-input="name"]', 'Some Guy');
        await fillIn('[data-test-input="email"]', 'address@example.com');
        await fillIn('[data-test-textarea="message"]', 'Eu consequat anim pariatur reprehenderit eiusmod cupidatat pariatur dolore veniam magna sunt aute. Sit quis aliquip velit ullamco aliquip consectetur est non.');
        await click('[data-test-button="submit"]');

        assert.dom('[data-test-component="broken-email-modal"]').exists({ count: 1 });
    });
});
