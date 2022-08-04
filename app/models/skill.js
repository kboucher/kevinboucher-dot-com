import Model, { attr } from '@ember-data/model';

/**
    Provides Ember model definition for a skill-set or tools collection.

    @module SkillModel
    @extends DS.Model
 */
export default class SkillModel extends Model {
    /**
        Skill-set/tool category.

        @property category
        @type {String}
     */
    @attr('string') category;

    /**
        Collection of skill-set/tool highlights (bullet points).

        @property details
        @type {Array<String>}
     */
    @attr() details;
}
