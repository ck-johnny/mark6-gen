# mark6-gen

Static Mark Six number generator with Progressive Web App (PWA) support.

## What it does

The browser app keeps the same generation behavior as `gen.ts`:

- `1` set generates `7` unique numbers.
- More than `1` set generates `6` unique numbers per set.
- Numbers are unique within each set, between `1` and `49`, and sorted.

## Local use

Install dependencies once:

```sh
yarn install
```

Run the static site locally:

```sh
yarn start
```

Then visit `http://localhost:8000`.

> PWA service workers require a secure context. `localhost` works for local testing; plain `file://` pages do not install the service worker.

## Command-line generator

Run the original CLI generator with Bun:

```sh
yarn g 3
```

The optional number is how many sets to generate.

## Checks

Run the TypeScript check for the CLI script:

```sh
yarn typecheck
```

## PWA files

- `manifest.webmanifest` defines install metadata, colors, and app icons.
- `service-worker.js` caches the app shell for offline use.
- `icons/icon.svg` is the installable app icon.

## GitHub Pages

To host it on GitHub:

1. Push this repository to GitHub.
2. Open the repository settings.
3. Go to **Pages**.
4. Set **Source** to **Deploy from a branch**.
5. Choose the branch, usually `main`, and the root folder `/`.
6. Save.

GitHub will publish the site at the URL shown in the Pages settings. Once served over HTTPS, the app can be installed from supported browsers.
