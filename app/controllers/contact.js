/* eslint-disable ember/no-computed-properties-in-native-classes */
import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { tracked } from '@glimmer/tracking';

/**
    Provide Ember controller for the `ContactRoute`.

    @module ContactController
    @extends Ember.Controller
 */

const contactFormEmail = 'kevin@kevinboucher.com';
const mailScriptUrl = 'https://kevinboucher.com/cgi-sys/formmail.pl';
const mailSubject = 'KevinBoucher.com contact email';

export default class ContactController extends Controller {
    reCaptchaResponse = null;

    @tracked contactEmail;
    @tracked contactMessage;
    @tracked contactName;
    @tracked isHuman = false;
    @tracked showCaptchaError = false;

    /**
        Ember computed property that provides the contact form's validity state
        (via native form element `ValidityState`).

        @property isFormValid
        @type {Boolean}
     */
    @computed('contactEmail', 'isHuman')
    get isFormValid() {
        const { contactEmail, isHuman } = this;

        return isHuman &&
            !isEmpty(contactEmail) &&
            document.querySelector('[name="contact-email-input"]')
                .validity
                .valid;
    }

    /**
        Handles the `ember-g-captcha` component's `captchaExpired` event (sets
        flag used by form validation).

        @method onCaptchaExpired
     */
    @action onCaptchaExpired() {
        this.isHuman = false;
    }

    /**
        Handles the `ember-g-captcha` component's `captchaResolved` event (sets
        flag used by form validation).

        @method onCaptchaExpired
     */
    @action onCaptchaResolved(reCaptchaResponse) {
        this.reCaptchaResponse = reCaptchaResponse;
        this.isHuman = true;
    }

    /**
        Handles the contact form's submit event by invoking a request to an SMTP
        script that resides on the server.

        @method onContactFormSubmit
     */
    @action onContactFormSubmit() {
        const { contactEmail, contactMessage, contactName } = this;

        fetch(mailScriptUrl, {
            body: {
                recipient: contactFormEmail,
                subject: mailSubject,
                name: contactName,
                email: contactEmail,
                message: contactMessage,
            },
            method: 'POST',
        })
            .then((/* response */) => {
                // TODO: Handle server error
            })
            .catch((/* error */) => {
                // TODO: Handle network error
            });
    }
}