import Component from '@glimmer/component';

/**
    Content component for site copyright statement.

    @module SiteFooterComponent
    @extends Glimmer.Component
 */
export default class SiteFooterComponent extends Component {
    /**
        Provides current year for copyright statement.

        @property currentYear
        @type {String}
     */
    get currentYear() {
        return new Date().getFullYear();
    }
}
