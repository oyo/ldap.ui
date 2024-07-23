# ldap.ui

A minimalistic web UI to browse and query LDAP servers.

### run

This is designed to run with [`ldap.api`](https://github.com/oyo/ldap.api)
so the first step is to head over there and get that running on your machine.
After that open
[`vite.config.ts`](https://github.com/oyo/ldap.ui/blob/main/vite.config.ts#L4)
to check or adjust the settings to your config. If you haven't modified port
or path it should work right out of the box. With the LDAP API running as a
separate process start up the development server with

    yarn
    yarn dev

Then press [o + Enter] to open the UI in a browser.
