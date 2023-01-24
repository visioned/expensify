const { RemixBrowser } = require("@remix-run/react");

const { startTransition, StrictMode } = require("react");

const { hydrateRoot } = require("react-dom/client");

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  window.setTimeout(hydrate, 1);
}
