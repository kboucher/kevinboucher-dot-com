import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

/**
    Provides Ember route for résumé view.

    @module ResumeRoute
    @extends Ember.Route
 */
export default class ResumeRoute extends Route {
    @service store;

    /**
        Fetches `PortfolioEntryRecords` from the data store.

        @method model
        @returns {Promise} Resolves to a hash containing an array of
            `PositionRecords` and `SkillRecords`
     */
    model() {
        return hash({
            positions: this.store.findAll('position'),
            skills: this.store.findAll('skill'),
        });
    }

    /**
        Decompose model hash

        @param {Ember.Controller} controller
        @param {Object} model Hash of resolved `ArrayProxy` objects
     */
    setupController(controller, model) {
        const { positions, skills } = model;

        Object.assign(controller, { positions, skills });
    }
}
