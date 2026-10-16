export function trackCtaClick(ctaLocation: string) {
  const gtag = (window as typeof window & {
    gtag?: (
      command: "event",
      eventName: string,
      parameters?: Record<string, string>
    ) => void;
  }).gtag;

  gtag?.("event", "cta_click", {
    cta_name: "request_catalog",
    cta_location: ctaLocation,
  });
}
