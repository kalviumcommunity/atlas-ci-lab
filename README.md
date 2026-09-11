# atlas-ci-lab

A tiny Node.js app used for a **CI/CD debugging exercise** with GitHub Actions.

> ⚠️ **This repository is intentionally broken.** It contains **three planted faults**.
> Your task is to fix them so the CI pipeline turns **fully green** on push.

## What the app does

`src/math.js` exports three pure functions — `add`, `isEven`, and `formatName` —
covered by tests in `test/math.test.js`. Run them locally with:

```bash
npm test
```

## Expected (healthy) CI behaviour

The workflow at `.github/workflows/ci.yml` has **two jobs**:

1. **`test`** — checks out the code, sets up Node, installs dependencies, and runs `npm test`.
2. **`deploy-check`** — runs **after** `test` (`needs: test`) and echoes a deploy
   message using a repository **secret** named `APP_TOKEN`.

The workflow triggers on every `push` and `pull_request`.

### You must add a secret

`deploy-check` reads a repository secret named **`APP_TOKEN`**. It does **not**
exist yet — create it in your fork under **Settings → Secrets and variables →
Actions → New repository secret** (any non-empty value works).

## The goal

After you fix the three faults **and** add the `APP_TOKEN` secret, a push should
produce a **fully green** run: both `test` and `deploy-check` pass.

## The three faults to fix

1. **Workflow YAML** — the `ci.yml` file has a structural/syntax error that stops
   GitHub from running the workflow. Read the YAML (and the Actions error) carefully.
2. **Broken test** — `npm test` fails because of a real bug. Fix the source or the
   expectation — do **not** delete or skip the test.
3. **Secret & permissions** — the `deploy-check` job references the secret
   incorrectly and is missing a minimal `permissions:` block.


......