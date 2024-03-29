export default function() {
    window.server = this; // Expose server for debugging purposes

    this.passthrough(
        '/write-coverage',
        '/images/screenshots/**',
        'https://kevinboucher.com/cgi-bin/formmail.pl',
        'https://kevinboucher.com/cgi-sys/formmail.pl',
        'https://kevinboucher.com/images/**',
        'https://www.kevinboucher.com/cgi-bin/formmail.pl',
        'https://www.kevinboucher.com/cgi-sys/formmail.pl',
        'https://www.kevinboucher.com/images/**',
    );

    // These comments are here to help you get started. Feel free to delete them.

    /**
        Config (with defaults).

        Note: these only affect routes defined *after* them!
     */

    /**
        this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
        this.namespace = '';    // make this `/api`, for example, if your API is namespaced
        this.timing = 400;      // delay for each request, automatically set to 0 during testing
     */

    /**
        Shorthand cheatsheet:

        this.get('/posts');
        this.post('/posts');
        this.get('/posts/:id');
        this.put('/posts/:id'); // or this.patch
        this.del('/posts/:id');

        https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
     */

    this.get('positions');
    this.get('skills');

    this.get('portfolio-entries', function(schema/* , request */) {
        return schema.portfolioEntries.all();
    });
}
