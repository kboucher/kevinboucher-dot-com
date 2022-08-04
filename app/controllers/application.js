/* eslint-disable ember/no-computed-properties-in-native-classes */
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

/**
    Provide Ember controller for top-level `ApplicationRoute`.

    @module ApplicationController
    @extends Ember.Controller
 */
export default class ApplicationController extends Controller {
    @service router;

    /**
        Tracked application property that provides route loading state (set from
        `ApplicationRoute`).

        @property isLoading
        @type {Boolean}
     */
    @tracked isLoading = true;

    /**
        Tracked application property that identifies when the current route is
        the `home` route.

        @property isHomeRoute
        @type {Boolean}
     */
    @tracked isHomeRoute = true;

    /**
        @class
     */
    constructor(...args) {
        super(...args);

        /**
            @event Router:routeDidChange
         */
        this.router.on(
            'routeDidChange',
            this,
            this.setIsHomeRoute,
        );
    }

    /**
        `routeDidChange` event handler that sets the `isHomeRoute` boolean.

        @method setIsHomeRoute
     */
    setIsHomeRoute() {
        this.isHomeRoute = this.router.currentRoute.name === 'home';
    }
}
