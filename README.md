# brokoli-ui

<p align="center">
  <a href="https://brokoli.reya.xyz/">
    <picture>
      <img src="./docs/brokoli-logo.png" alt="Reya" width="128" />
    </picture>
  </a>
</p>

<p align="center">Powering Reya and beyond!!!</p>

<p align="center">
  <img src="https://badgen.net/github/tag/Reya-Labs/brokoli-ui" alt="Tag" />
  <img src="https://badgen.net/github/checks/Reya-Labs/brokoli-ui/main" alt="Checks" />
  <img src="https://badgen.net/github/last-commit/Reya-Labs/brokoli-ui/main" alt="Checks" />
</p>

<p align="center">
An UI design language and React UI library powered by 🥦🥦🥦 and ☕
</p>

<br />

| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-62.04%25-red.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-41.9%25-red.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-58.22%25-red.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-60.2%25-red.svg?style=flat) |

# Installation

1. Run `yarn`

# Run

1. Run `yarn storybook`

# Contributing

## Branching model

In the UI world you should branch off `main` when building a feature.
So just go on `main`, pull latest and then branch out of it.
Create your PR against `main`.

Branch naming is quite standard, we tried to duplicate what we have done for
the committing messages, following standard commit message format: [https://www.conventionalcommits.org/en/v1.0.0/].

Branch names can start with the prefixes found in the regex under '.husky/pre-commit'.

### Short summary:

**DEVELOPING**
* create a branch from `main`, follow the naming convention for a branch
* wait for approval, resolve comments and make sure you have a green build
* merge to `main` using **Rebase and merge**

## Cloudflare

`brokoli-ui` uses Cloudflare to automate the process around creating builds that can be shared with the stakeholders.
What this means is that any push to a branch will create an environment for the team to test against!

These are sites hosted on Cloudflare and the build from main can be found at [brokoli.reya.xyz](brokoli.reya.xyz).

### Rules

**Environment branches (main)**
* merges to branch `main` always deploy to [brokoli.reya.xyz](brokoli.reya.xyz) with ENV variables specific for `main`

**Candidate branches:**
* commits on branches that follow the pattern `feat/*`, `fix/*`, `chore/*`, `refactor/*` and `test/*`. Please follow these patterns.

## Tools

Helpful tools to install to improve your development life!
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
