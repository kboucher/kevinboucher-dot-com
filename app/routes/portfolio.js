import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

/**
    Provides Ember route for portfolio view.

    @module PortfolioRoute
    @extends Ember.Route
 */
export default class PortfolioRoute extends Route {
    @service store;

    /**
        Fetches `PortfolioEntryRecords` from the data store.

        @method model
        @returns {Promise} Resolves to an array of `PortfolioEntryRecords`
     */
    model() {
        return this.store.findAll('portfolio-entry');
    }

    /**
        Promise-aware Ember route lifecycle hook that initiates portfolio image
        caching (for quick loading) after `PortfolioEntryRecords` are loaded
        from the data store.

        @method afterModel
        @returns {Promise} Resolves to an array of loaded portfolio images
     */
    afterModel(model) {
        return this.preloadImages(model);
    }

    /**
        Preloads portfolio images.

        @method preloadImages
        @returns {Promise} Resolves to an array of loaded portfolio images
     */
    preloadImages(portfolioEntries) {
        const imageUrls = portfolioEntries.map((entry) => entry.image);
        const imageRequests = [];

        imageUrls.forEach((imageUrl) => {
            imageRequests.push(fetch(imageUrl));
        });

        return Promise.allSettled(imageRequests);
    }

    /**
        Assigns `model` to controller as `portfolioEntries`

        @method setupController
        @param {Ember.Controller} controller
        @param {ArrayProxy} model Resolved portfolio entries collection
     */
    setupController(controller, model) {
        Object.assign(controller, {
            portfolioEntries: model,
        });
    }
}
