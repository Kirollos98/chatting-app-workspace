# TextMe Chatting App

A full-stack chatting application built with Nx monorepo, featuring a React Native mobile app, Express.js backend, and React admin dashboard.

## 🚀 Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Setup environment variables
cp apps/text-me-api/.env.example apps/text-me-api/.env
cp apps/text-me-admin/.env.example apps/text-me-admin/.env
cp apps/text-me/.env.example apps/text-me/.env

# Start all apps in parallel
npm start
```

## 📦 What's Inside

- **text-me** - React Native mobile app (Expo + MobX)
- **text-me-api** - Express.js backend API
- **text-me-admin** - React admin dashboard (Vite + Tailwind + React Query)
- **@textme/shared-types** - Shared TypeScript types
- **@textme/shared-utils** - Shared utilities

## 📖 Documentation

- [SETUP.md](SETUP.md) - Complete setup and development guide
- [SCRIPTS.md](SCRIPTS.md) - NPM scripts reference
- [COMPLETED.md](COMPLETED.md) - Configuration summary

## 🎯 Common Commands

```bash
# Development
npm start              # Run all apps in parallel
npm run dev:api        # Run backend API only
npm run dev:admin      # Run admin dashboard only
npm run dev:mobile     # Run mobile app only

# Testing
npm test               # Test all apps
npm run test:api       # Test backend only
npm run test:admin     # Test admin only
npm run test:mobile    # Test mobile only

# Building
npm run build          # Build all apps
npm run build:api      # Build backend only
npm run build:admin    # Build admin only

# Utilities
npm run lint           # Lint all apps
npm run format         # Format code
npm run graph          # View project graph
```

## 🛠️ Technology Stack

### Mobile App (text-me)

- React Native + Expo
- Expo Router
- MobX
- Jest

### Backend (text-me-api)

- Express.js
- TypeScript
- dotenv
- Jest

### Admin Dashboard (text-me-admin)

- React
- Vite
- Tailwind CSS
- React Query
- Vitest

---

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Built with [Nx workspace](https://nx.dev) ✨

[Learn more about Nx](https://nx.dev) or run `npx nx graph` to visualize the project graph.
