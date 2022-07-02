# Generating a Self-signed SSL Certificate

In order to support secure authentication token (SAT) cookies for API authentication, it is necessary to run the Ember server on SSL. Additionally, to prevent Chrome complaints about _invalid certificates_ it is necessary to generate a _Subject Alternate Names_ (SAN) certificate and mark it as a trusted certificate in your system.

## OpenSSL

The key and certificate in this folder were generated using OpenSSL (https://www.openssl.org/). OpenSSL can be installed on a Mac via Homebrew:

`brew install openssl`

### Generate a Key & Certificate Signing Request (CSR)

1. `openssl genrsa -des3 -out localhost.pass.key 2048` (Choose a pass phrase)
2. `openssl rsa -in localhost.pass.key -out localhost.key` (Enter pass phrase)
3. `rm localhost.pass.key`
4. `openssl req -new -key localhost.key -out localhost.csr`

### Generate the Certificate

1. Make sure you have a certificate configuration file that includes Subject Alternative Names (see example below).
2. `openssl x509 -req -sha256 -days 18250 -in localhost.csr -signkey localhost.key -out localhost.crt -extfile san.cnf -extensions req_ext`

#### Example SAN Certificate Configuration File (san.cnf)

```
[ req ]
default_bits       = 2048
distinguished_name = req_distinguished_name
req_extensions     = req_ext
[ req_distinguished_name ]
countryName                 = US
stateOrProvinceName         = Texas
localityName               = Austin
organizationName           = IDAuto
organizationalUnit         = UI
commonName                 = IDAutoUI
[ req_ext ]
subjectAltName = @alt_names
[alt_names]
DNS.1   = localhost
DNS.2   = idautocloud.com
DNS.3   = *.idautocloud.com
DNS.4   = idautoengineering.net
DNS.5   = *.idautoengineering.net
```

### Configure Ember to Run on SSL

In the `.ember-cli` configuration file include the following settings (referencing the key and certificate generated in the steps above):

```
{
    /* ... */
    "ssl": true,
    "ssl-key": "ssl/localhost.key",
    "ssl-cert": "ssl/localhost.crt"
}
```

### Trust the Certificate in Chrome

Access Chrome's certificate configuration by entering `chrome://settings` and searching for _manage certificates_ in your browser's address bar.

1. Open the certificate manager wizard (_Keychain_ on MAC and _Certificates_ on Windows)
2. Import the generated certificate
3. Mark as trusted
4. Relaunch Chrome (Enter `chrome://restart` in the address bar)
