//import { VAR2 } from "$env/dynamic/private"; //Not working
//import { VAR2 } from "$env/static/private"; //Working

//dynamic variables are not imported the same way as static variables!
import { env } from "$env/static/private";
const VAR2 = env.VAR2;

const config = {
  var2: VAR2,
};

export default config;
