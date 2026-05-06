# mark6-gen

Installable Mark Six number generator with both a Node.js CLI and a static Progressive Web App (PWA).

## What it does

- **Number mode:** generate one sorted set of X unique numbers between `1` and `49`. The count is optional and defaults to `7`.
- **Set mode:** generate X sorted sets. Each set contains `6` unique numbers between `1` and `49`.
- Web and CLI output group numbers three per row for easier reading.

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

Run the CLI from this checkout:

```sh
yarn g
```

CLI examples:

```sh
# Generate 7 numbers, the default number mode count.
yarn g

# Generate one set with 12 unique numbers.
yarn g numbers 12

# Generate 10 sets with 6 unique numbers in each set.
yarn g sets 10
```

## Installable npm CLI

This package exposes a `mark6-gen` binary and is ready to publish to npm later.
After publishing, users will be able to run it with:

```sh
npx mark6-gen
npx mark6-gen sets 10
```

For a local install test before publishing:

```sh
npm link
mark6-gen --help
```

## Checks

Run the TypeScript check for the TypeScript generator script:

```sh
yarn typecheck
```

## PWA files

- `manifest.webmanifest` defines install metadata, colors, description, and app icons.
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
