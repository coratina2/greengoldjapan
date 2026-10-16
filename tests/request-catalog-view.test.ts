import assert from "node:assert/strict";
import { trackRequestCatalogView } from "../src/analytics";

const events: Array<{ name: string; parameters?: Record<string, string> }> = [];

Object.assign(globalThis, {
  window: {
    gtag: (command: string, name: string, parameters?: Record<string, string>) => {
      if (command === "event") events.push({ name, parameters });
    },
  },
});

trackRequestCatalogView();

assert.deepEqual(events, [
  {
    name: "request_catalog_view",
    parameters: {
      page_name: "request_catalog",
      page_location: "hash_route",
    },
  },
]);
