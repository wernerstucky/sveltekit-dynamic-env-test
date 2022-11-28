import { PUBLIC_VAR1 } from "$env/dynamic/public"; //Not working
//import { PUBLIC_VAR1 } from "$env/static/public"; //Working

const config = {
  var1: PUBLIC_VAR1,
};

export default config;
