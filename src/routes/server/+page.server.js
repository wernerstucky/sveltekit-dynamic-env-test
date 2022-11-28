import config from "$lib/server_config.server.js";
import { error, json } from "@sveltejs/kit";

console.log("Server config", config);

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return config;
}
