const PRIVATE_ANALYTICS = {
  // Paste the Cloudflare Web Analytics token between the quotes.
  // Leave it empty to keep private analytics disabled.
  cloudflareToken: "",
};

if (PRIVATE_ANALYTICS.cloudflareToken) {
  const cloudflareBeacon = document.createElement("script");
  cloudflareBeacon.defer = true;
  cloudflareBeacon.src = "https://static.cloudflareinsights.com/beacon.min.js";
  cloudflareBeacon.setAttribute(
    "data-cf-beacon",
    JSON.stringify({ token: PRIVATE_ANALYTICS.cloudflareToken })
  );
  document.head.appendChild(cloudflareBeacon);
}
