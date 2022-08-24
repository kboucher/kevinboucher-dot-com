import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
    category() {
        return faker.commerce.product();
    },

    details() {
        const details = [];

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < 5; i++) {
            details.push(faker.commerce.productAdjective());
        }

        return details;
    },
});
