import { helper } from '@ember/component/helper';
import { assert } from '@ember/debug';
import { htmlSafe } from '@ember/template';

/**
    Backfill for missing (deprecated?) Ember `HtmlSafeHelper`.

    @module HtmlSafeHelper
 */
export default helper((positional /* , named */) => {
    assert(
        'Argument passed to the `HtmlSafeHelper` must be of type `string`',
        typeof positional[0] === 'string',
    );

    return htmlSafe(positional[0]);
});
