import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

/**
    Provides affordance for presenting reduced portfolio images along with
    full-size version in a modal dialog.

    @module ImagePreviewModalComponent
    @extends Glimmer.Component
 */
export default class ImagePreviewModalComponent extends Component {
    /**
        Tracked component property that controls rendering of BS.Modal.

        @property showModal
        @type {Boolean}
     */
    @tracked showModal = false;
}
