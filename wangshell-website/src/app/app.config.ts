import { APP_SERVE_URL, SALT_KEY } from "./app.global";

let appConfig = {
  title     : "汪壳官网",
  subTitle  : "汪壳官网",
  version   : "v1.0",
  salt_key  : SALT_KEY,
  url       : "",
  prefix    : "../assets/mock/",
  api       : APP_SERVE_URL,
  production: false
};

export { appConfig };
