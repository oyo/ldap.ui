# ldap.ui

A minimalistic web UI to browse and query LDAP servers.

Note: this is work in progress with many basic features still missing.

It is designed to run with the API from a separate repository:

- [`ldap.api`](https://github.com/oyo/ldap.api)
- [`ldap.ui`](https://github.com/oyo/ldap.ui)

### run

The first step is to head over to the ldap.api folder and get that running on
your machine. Check the README.md there. After that open
[`vite.config.ts`](https://github.com/oyo/ldap.ui/blob/main/vite.config.ts#L14-L15)
to check or adjust the settings according to your config. If you haven't modified
path or port it should work right out of the box. With the LDAP API running as a
separate process start up the development server with

    yarn
    yarn dev

Then press [o + Enter] to open the UI in a browser.
