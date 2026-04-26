# TextMe Chatting App - Workspace Setup Guide

This is an Nx monorepo containing all apps and shared libraries for the TextMe chatting application.

## 📦 Project Structure

```
chatting-app/
├── apps/
│   ├── text-me/              # React Native mobile app (Expo)
│   ├── text-me-api/          # Node.js Express backend
│   └── text-me-admin/        # React admin dashboard (Vite)
└── packages/
    ├── shared-types/         # Shared TypeScript types
    └── shared-utils/         # Shared utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm
- Expo CLI (for mobile development)
- iOS Simulator (Mac) or Android Emulator

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Kirollos98/chatting-app-workspace.git
cd chatting-app-workspace
```

2. **Install dependencies**

```bash
npm install --legacy-peer-deps
```

3. **Setup environment variables**

Copy the example env files and update with your values:

```bash
# Backend API
cp apps/text-me-api/.env.example apps/text-me-api/.env

# Admin Dashboard
cp apps/text-me-admin/.env.example apps/text-me-admin/.env

# Mobile App
cp apps/text-me/.env.example apps/text-me/.env
```

## 🏗️ Development

### Run All Apps in Parallel (Recommended)

Start all three apps at once with a single command:

```bash
npm start
# or
npm run dev
```

This will run:

- 🔵 Backend API on http://localhost:3000
- 🟢 Admin Dashboard on http://localhost:4200
- 🟣 Mobile App (follow Expo instructions)

Press `Ctrl+C` to stop all apps.

### Run Individual Apps

**Backend API (Express)**

```bash
npm run dev:api
# or: npx nx serve text-me-api
# API will be available at http://localhost:3000
```

**Admin Dashboard (React + Vite)**

```bash
npm run dev:admin
# or: npx nx serve text-me-admin
# Dashboard will be available at http://localhost:4200
```

**Mobile App (Expo)**

```bash
npm run dev:mobile
# or: npx nx start text-me
# Follow Expo instructions to open on iOS/Android
```

> 💡 **Tip**: See [SCRIPTS.md](SCRIPTS.md) for a complete list of all available npm scripts.

## 🧪 Testing

```bash
# Run all tests
npm test
# or: npx nx run-many -t test

# Test specific app
npm run test:api
npm run test:admin
npm run test:mobile
```

## 🔨 Building

```bash
# Build all apps
npm run build
# or: npx nx run-many -t build

# Build specific app
npm run build:api
npm run build:admin
```

## 📚 Technology Stack

### text-me (Mobile App)

- **Framework**: React Native with Expo
- **Router**: Expo Router (file-based routing)
- **State Management**: MobX
- **Testing**: Jest
- **Language**: TypeScript

### text-me-api (Backend)

- **Framework**: Express.js
- **Language**: TypeScript
- **Testing**: Jest
- **Environment**: dotenv

### text-me-admin (Admin Dashboard)

- **Framework**: React
- **Bundler**: Vite
- **Styling**: Tailwind CSS (ready for shadcn/ui)
- **Data Fetching**: React Query
- **Routing**: React Router
- **Testing**: Vitest
- **Language**: TypeScript

### Shared Libraries

- **@textme/shared-types**: Common TypeScript interfaces and types
- **@textme/shared-utils**: Shared utility functions

## 🔧 Common Commands

```bash
# Format code
npx nx format:write

# Lint code
npx nx run-many -t lint

# View project graph
npx nx graph

# List all projects
npx nx show projects

# Reset Nx cache
npx nx reset
```

## 📝 Adding New Features

### Create a New Library

```bash
npx nx g @nx/js:library my-new-lib --directory=packages/my-new-lib
```

### Add Dependencies Between Projects

Use the link-workspace-packages skill or manually add to package.json:

```bash
npm install @textme/shared-types --workspace text-me-api
```

## 🐛 Troubleshooting

### Vite Native Binding Issues

If you encounter native binding errors with Vite:

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Expo Not Starting

```bash
npx expo start --clear
```

### API Port Already in Use

Change the PORT in `apps/text-me-api/.env`

## 📖 Documentation

- [Nx Documentation](https://nx.dev)
- [Expo Documentation](https://docs.expo.dev)
- [Express Documentation](https://expressjs.com)
- [React Query Documentation](https://tanstack.com/query)
- [MobX Documentation](https://mobx.js.org)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## 📄 License

MIT
