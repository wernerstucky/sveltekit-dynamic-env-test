//import { PUBLIC_VAR1 } from "$env/dynamic/public"; //Not working
//import { PUBLIC_VAR1 } from "$env/static/public"; //Working

//dynamic variables are not imported the same way as static variables!
import { env } from "$env/static/public";
const PUBLIC_VAR1 = env.PUBLIC_VAR1;

const config = {
  var1: PUBLIC_VAR1,
};

export default config;
