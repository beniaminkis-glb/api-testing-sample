# API Testing Workshop — Test Runner

This repository contains a small API test suite using Mocha, Chai, Axios and Mochawesome for reporting. The tests exercise example endpoints (the suite targets https://jsonplaceholder.typicode.com).

## Prerequisites

- Node.js (recommended: v16 or newer)
- npm (comes with Node) or yarn
- Internet access (tests call jsonplaceholder.typicode.com)
- On macOS: the `open` command is used by the `test` script to open the HTML report after the run. On Linux use `xdg-open` or open the file manually.

## Install

1. Clone or open this project folder.
2. Install dev dependencies:

```bash
npm install
```

(Or with yarn: `yarn`)

## Run tests

The project provides an npm script `test` defined in `package.json`.

- Run the full test command (this removes any previous Mochawesome report, runs tests with the Mochawesome reporter and opens the HTML report on macOS):

```bash
npm test
```

- If you prefer not to automatically open the HTML (for CI or Linux), run the mocha command directly (uses the locally installed mocha):

```bash
npm run cleanup && npx mocha tests/api.test.js --reporter mochawesome
```

After the run, the Mochawesome HTML report will be in:

```
mochawesome-report/mochawesome.html
```

Open it with your OS's default viewer. On macOS:

```bash
open mochawesome-report/mochawesome.html
```

On Linux (if `xdg-open` is available):

```bash
xdg-open mochawesome-report/mochawesome.html
```

## What the tests do

The tests in `tests/api.test.js` call the public JSONPlaceholder API and perform CRUD operations (GET, POST, PUT, DELETE) using `axios`, with assertions from `chai`.

Note: Because the test target is a public demo API, behavior (especially for writes/deletes) may be simulated by the service.

## Dependencies (dev)

- mocha
- chai
- axios
- mochawesome

These are installed by `npm install` from `package.json`.

## CI / Headless runs

For CI environments, avoid opening the HTML report. Use the direct mocha command shown above and then publish or archive the `mochawesome-report` directory as an artifact.

Example CI snippet (bash):

```bash
npm ci
npm run cleanup
npx mocha tests/api.test.js --reporter mochawesome
# Save or upload the mochawesome-report directory as build artifact
```

## Troubleshooting

- "mocha: command not found": run `npm install` and use `npx mocha` or `./node_modules/.bin/mocha`.
- `open` not found on Linux/Windows: open the HTML manually or use `xdg-open` (Linux) or `start` (Windows PowerShell/CMD).
- Network errors: ensure you have network connectivity. The tests call https://jsonplaceholder.typicode.com.

## Extending the suite

- Add more test files under `tests/` and update the `npm test` script or create new scripts to run groups of tests.
- To change the target API, update `apiUrl` in `tests/api.test.js` or refactor it to read from an environment variable.

---

Completion: README created. See `mochawesome-report/mochawesome.html` for the generated report after running tests.