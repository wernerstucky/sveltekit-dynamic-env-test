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


**FOUND ERROR** : 
Importing variables from static vs dynamic are *notably* different.  For dynamic you need to import the **{ env }** object and then get the variable eg. **env.VAR1** as opposed to directly getting the var eg. **{ VAR1 }** when using static

Example Static : 
```
import { VAR1 } from "$env/static/private";
console.log("var1 is",VAR1);
```
Example Dynamic : 
```
import { env } from "$env/dynamic/private";
const VAR1 = env.VAR1;
console.log("var1 is",VAR1);
```


Hope this helps someone in future






2022-11-28 :

- FOUND ERROR : importing variables from static vs dynamic are notably different.  For dynamic you need to import the { env } object and then get the variable eg. env.VAR1 as opposed to directly getting the var eg. { VAR1 } when using static
- ~~Not working as expected when doing `npm run dev` ~~
- ~~Not working as expected when using modified run script ~~
