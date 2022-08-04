import Model, { attr } from '@ember-data/model';

/**
    Provides Ember model definition for a portfolio entry.

    @module PortfolioEntryModel
    @extends DS.Model
 */
export default class PortfolioEntryModel extends Model {
    /**
        Portfolio image URL.

        @property image
        @type {String}
     */
    @attr('string') image;

    /**
        Collection of URL/label pairs for related links.

        @property links
        @type {Array<Object>}
     */
    @attr() links;

    /**
        Portfolio entry description.

        @property summary
        @type {String}
     */
    @attr('string') summary;

    /**
        Portfolio entry title.

        @property summary
        @type {String}
     */
    @attr('string') title;
}
