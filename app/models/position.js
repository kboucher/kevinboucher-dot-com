import Model, { attr } from '@ember-data/model';

/**
    Provides Ember model definition for a employment position.

    @module PositionModel
    @extends DS.Model
 */
export default class PositionModel extends Model {
    /**
        Employment position data range.

        @property dateRange
        @type {String}
     */
    @attr('string') dateRange;

    /**
        Collection of highlights (bullet points).

        @property details
        @type {Array<String>}
     */
    @attr() details;

    /**
        Employment position organization name range.

        @property organization
        @type {String}
     */
    @attr('string') organization;

    /**
        Employment position summary of duties and achievements.

        @property summary
        @type {String}
     */
    @attr('string') summary;

    /**
        Employment position title.

        @property organization
        @type {String}
     */
    @attr('string') title;
}
