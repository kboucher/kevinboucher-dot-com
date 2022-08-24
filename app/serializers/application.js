import JSONAPISerializer from '@ember-data/serializer/json-api';

/**
    Provides base Ember Data DS.Serializer for all data-layer models.

    @module ApplicationSerializer
    @extends DS.JSONAPISerializer
 */
export default class ApplicationSerializer extends JSONAPISerializer {
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
        return super.normalizeArrayResponse(store, primaryModelClass, payload, id, requestType);
    }
}
