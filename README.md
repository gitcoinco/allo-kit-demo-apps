# Allo Kit Demo Apps

## Table of Contents

1. [Introduction](#introduction)
2. [Peer Dependencies](#peer-dependencies)
3. [Demo App](#demo-app)

## Introduction

AlloKit is a collection of functions, hooks, and components for interacting with the Allo Protocol and its Indexer.

This repo has 2 example usage, demo and opengraph

## Peer Dependencies

AlloKit has the following peer dependencies that you need to install in your project:

- `react` (version ^18.0.0)
- `react-dom` (version ^18.0.0)
- `@rainbow-me/rainbowkit` (version ^2.1.4)
- `wagmi` (version ^2.12.2)

Make sure these packages are installed in your project.

## Demo App

The Demo App shows most of the basic usage.

Link: https://allo-starter-kit-demo.vercel.app

Explore code:

- [AlloKit Providers](./apps/demo/src/app/providers.tsx)
- [Discover Rounds page](./apps/demo/src/app/%5BchainId%5D/page.tsx)
- [Round Details page + Discover Applications](./apps/demo/src/app/%5BchainId%5D/rounds/%5BroundId%5D/page.tsx)
- [Project Details page](./apps/demo/src/app/%5BchainId%5D/projects/%5BprojectId%5D/page.tsx)
- [Create Application / Apply to Round](./apps/demo/src/app/%5BchainId%5D/rounds/%5BroundId%5D/apply/page.tsx)
- [Create Round](./apps/demo/src/app/admin/rounds/create/page.tsx)
- [Review Applications](./apps/demo/src/app/admin/rounds/%5BchainId%5D/%5BroundId%5D/page.tsx)
- [Metadata Upload API](./apps/demo/src/app/api/ipfs/route.ts)

### Run Demo App

This will build the kit and run the demo app.

```sh
pnpm run dev:demo
```

### Open Demo App in your browser

```sh
open http://localhost:3000
```
