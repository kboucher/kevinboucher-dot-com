/* eslint-disable ember/no-computed-properties-in-native-classes */
import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { tracked } from '@glimmer/tracking';

/**
    TODO: Uncomment this when SMTP script returns

    const mailScriptUrl = 'https://www.kevinboucher.com/cgi-sys/formmail.pl';
    const mailSubject = 'KevinBoucher.com contact email';
 */

const contactFormEmail = 'kevin@kevinboucher.com';

/**
    Provide Ember controller for the `ContactRoute`.

    @module ContactController
    @extends Ember.Controller
 */
export default class ContactController extends Controller {
    gRecaptcha = null;
    reCaptchaResponse = null;

    @tracked contactEmail;
    @tracked contactMessage;
    @tracked contactMailTo;
    @tracked contactName;
    @tracked isHuman = false;
    @tracked showBrokenEmailModal = false;
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
            document.querySelector('[id="contact-email-input"]')
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
    @action onContactFormSubmit(event) {
        event.preventDefault();

        const { /* contactEmail, */ contactMessage, contactName } = this;

        const emailBody = contactName || contactMessage ?
            `?body=${contactName ? `${encodeURI(`${contactName}\n\n`)}` : ''}${contactMessage ? encodeURI(contactMessage) : ''}` :
            '';

        this.contactMailTo = `mailto:${contactFormEmail}${emailBody}`;
        this.showBrokenEmailModal = true;

        /**
            TODO: Uncomment this when SMTP script returns

            fetch(mailScriptUrl, {
                body: JSON.stringify({
                    recipient: contactFormEmail,
                    subject: mailSubject,
                    name: contactName,
                    email: contactEmail,
                    message: contactMessage,
                }),
                method: 'POST',
            })
                .then((response) => {
                    // TODO: Handle server error
                })
                .catch((error) => {
                    // TODO: Handle network error
                });
         */
    }
}
