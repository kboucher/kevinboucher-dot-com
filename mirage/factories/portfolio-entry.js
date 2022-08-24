import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
    image() {
        faker.image.imageUrl();
    },

    links() {
        const details = [];

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < 2; i++) {
            details.push({
                title: faker.company.companyName(),
                url: faker.internet.url(),
            });
        }

        return details;
    },

    summary() {
        return faker.lorem.paragraph();
    },

    title() {
        return faker.company.companyName();
    },
});
