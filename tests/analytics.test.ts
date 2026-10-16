import assert from "node:assert/strict";
import { trackCtaClick } from "../src/analytics";

const events: Array<{ name: string; parameters?: Record<string, string> }> = [];

Object.assign(globalThis, {
  window: {
    gtag: (command: string, name: string, parameters?: Record<string, string>) => {
      if (command === "event") events.push({ name, parameters });
    },
  },
});

trackCtaClick("hero");

assert.deepEqual(events, [
  {
    name: "cta_click",
    parameters: {
      cta_name: "request_catalog",
      cta_location: "hero",
    },
  },
]);
