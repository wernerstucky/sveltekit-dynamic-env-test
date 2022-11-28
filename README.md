# Testing Sveltekit $env/dynamic

This is a test repo for exploring Sveltekit $env functionality as per :

<!-- prettier-ignore-start -->
- [$env/dynamic/private](https://kit.svelte.dev/docs/modules#\$env-dynamic-private)
- [$env/dynamic/public](https://kit.svelte.dev/docs/modules#\$env-dynamic-public)
<!-- prettier-ignore-end -->

Examples show using a public and server config file that read dynamic ENV variables.
The variables should be exported from the .env file

Test public on the default route **/**
Test server on the server route **/server**

Another way to try make it work is to edit the "dev" run script in package.json as follows :

`"dev": "PUBLIC_VAR1=packagejson VAR2=packagejson vite dev",`

2022-11-28 :

- Not working as expected when doing `npm run dev`
- Not working as expected when using modified run script
