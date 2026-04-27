# Welcome to TextMe Documentation

A full-stack chatting application built with Nx monorepo, featuring a React Native mobile app, Express.js backend, and React admin dashboard.

## 📦 What's Inside

This workspace contains:

- **text-me** - React Native mobile app (Expo + MobX)
- **text-me-api** - Express.js backend API
- **text-me-admin** - React admin dashboard (Vite + Tailwind + React Query)
- **@textme/shared-types** - Shared TypeScript types
- **@textme/shared-utils** - Shared utilities

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

## 📖 Documentation Structure

This documentation is organized into the following sections:

- **Getting Started** - Installation, setup, and quick start guides
- **Guides** - Step-by-step tutorials for common tasks
- **Reference** - Command reference and configuration details
- **Development** - Development workflow and best practices
- **Troubleshooting** - Common issues and solutions
- **Archive** - Historical documentation and resolved issues

## Next Steps

1. Read the [Setup Guide](./setup.md) for detailed installation instructions
2. Check out the [Guides](../guides/environments-setup.md) for environment configuration
3. Browse the [Reference](../reference/commands.md) for command documentation

---

✨ Built with [Nx workspace](https://nx.dev) ✨
