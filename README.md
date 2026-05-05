# mark6-gen

Static Mark Six number generator.

## Local use

Open `index.html` in a browser, or run:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

The browser version keeps the same generation behavior as `gen.ts`:

- `1` set generates `7` unique numbers.
- More than `1` set generates `6` unique numbers per set.
- Numbers are unique within each set, between `1` and `49`, and sorted.

## GitHub Pages

To host it on GitHub:

1. Push this repository to GitHub.
2. Open the repository settings.
3. Go to **Pages**.
4. Set **Source** to **Deploy from a branch**.
5. Choose the branch, usually `main`, and the root folder `/`.
6. Save.

GitHub will publish the site at the URL shown in the Pages settings.
