import { address, port, path, REGION } from "./constant";
import getURL from "./utils";

const url = getURL(address, port, path);

export { REGION as region };
export { url };
