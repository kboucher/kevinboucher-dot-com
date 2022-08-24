import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
    dateRange() {
        return faker.date.recent();
    },

    details() {
        const details = [];

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < 5; i++) {
            details.push(faker.hacker.phrase());
        }

        return details;
    },

    organization() {
        return faker.company.companyName();
    },

    summary() {
        return faker.lorem.paragraph();
    },

    title() {
        return faker.name.jobTitle();
    },
});
