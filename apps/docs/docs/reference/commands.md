# Complete Commands Reference

This document provides a comprehensive overview of all available commands for the TextMe workspace following best practices for each technology stack.

## 🎯 Quick Start

```bash
# Start all apps in parallel (dev environment)
npm start
# or
npm run dev

# Start individual apps
npm run dev:mobile     # Expo mobile app
npm run dev:api        # Node.js backend
npm run dev:admin      # React admin dashboard
```

---

## 📱 Mobile App (text-me)

**Tech Stack:** React Native + Expo + TypeScript + MobX + Jest

### Development Commands

```bash
# Start Metro bundler
npx nx run text-me:start              # dev environment (default)
npx nx run text-me:start:dev
npx nx run text-me:start:stage
npx nx run text-me:start:prod

# Start with platform
npx nx run text-me:android:dev        # Android
npx nx run text-me:ios:stage          # iOS

# NPM shortcuts
npm run dev:mobile
npm run dev:mobile:android:stage
npm run dev:mobile:ios:prod
```

### Native Builds

```bash
# Development builds (run on device)
npx nx run text-me:run-android:dev
npx nx run text-me:run-ios:prod

# EAS Cloud builds (for app stores)
npx nx run text-me:build-android:prod
npx nx run text-me:build-ios:prod
```

### Testing

```bash
npx nx test text-me
npx nx lint text-me
```

**📚 Full documentation:** `apps/text-me/MOBILE-COMMANDS.md`

---

## 🚀 Backend API (text-me-api)

**Tech Stack:** Node.js + Express + TypeScript + Jest + tsx

**Best Practice:** Use `dev` target for development (hot reload + debugging)

### Development Commands

```bash
# Development with hot reload (recommended)
npx nx run text-me-api:dev            # Uses tsx watch + debugger
npx nx run text-me-api:dev:dev
npx nx run text-me-api:dev:stage
npx nx run text-me-api:dev:prod

# NPM shortcuts
npm run dev:api
npm run dev:api:stage
```

**Features:**

- ✅ Hot reload on file changes
- ✅ Debugger enabled (port 9229)
- ✅ No build step needed
- ✅ TypeScript executed directly with tsx

### Production Commands

```bash
# Build first
npx nx run text-me-api:build:prod

# Then start (runs compiled JS)
npx nx run text-me-api:start:prod

# NPM shortcut
npm run build:api:prod
```

### Testing & Quality

```bash
# Tests
npx nx test text-me-api
npx nx run text-me-api:test:watch
npx nx run text-me-api:test:coverage

# Type checking
npx nx run text-me-api:typecheck

# Linting
npx nx lint text-me-api
```

**📚 Full documentation:** `apps/text-me-api/API-COMMANDS.md`

---

## 💻 Admin Dashboard (text-me-admin)

**Tech Stack:** React + Vite + TypeScript + React Query + Tailwind + Vitest

**Best Practice:** Use `dev` target for development (instant HMR)

### Development Commands

```bash
# Development server (recommended)
npx nx run text-me-admin:dev          # Lightning-fast HMR
npx nx run text-me-admin:dev:dev
npx nx run text-me-admin:dev:stage
npx nx run text-me-admin:dev:prod

# NPM shortcuts
npm run dev:admin
npm run dev:admin:prod
```

**Features:**

- ⚡ Instant HMR (Hot Module Replacement)
- ⚡ Fast server start (less than 1 second)
- 🌐 Network accessible (`--host` flag)
- 📱 Test on mobile devices

**Note:** Currently has Vite native binding issue (Node.js version 21.7.1 not officially supported)

### Production Commands

```bash
# Build
npx nx run text-me-admin:build:prod
npm run build:admin:prod

# Preview production build locally
npx nx run text-me-admin:preview
```

### Testing & Quality

```bash
# Tests
npx nx test text-me-admin
npx nx run text-me-admin:test:watch    # Watch mode
npx nx run text-me-admin:test:ui       # Visual UI
npx nx run text-me-admin:test:coverage # Coverage

# Type checking
npx nx run text-me-admin:typecheck

# Linting
npx nx lint text-me-admin
```

**📚 Full documentation:** `apps/text-me-admin/ADMIN-COMMANDS.md`

---

## 🔄 Multi-App Commands

### Run All Apps

```bash
# All apps in parallel (dev environment)
npm start
npm run dev

# All apps with specific environment
npm run dev:all:stage
npm run dev:all:prod
```

### Build All Apps

```bash
# Build everything
npm run build

# Build specific apps
npm run build:api:prod
npm run build:admin:prod
```

### Test All Apps

```bash
npm run test          # Run all tests
npm run test:api
npm run test:admin
npm run test:mobile
```

### Lint All Apps

```bash
npm run lint          # Lint everything
npm run lint:api
npm run lint:admin
npm run lint:mobile
```

---

## 🌍 Environment Management

Each app has 3 environment files:

| Environment | File Pattern | Usage             |
| ----------- | ------------ | ----------------- |
| Development | `.env.dev`   | Local development |
| Staging     | `.env.stage` | QA/Testing        |
| Production  | `.env.prod`  | Production        |

### Environment Variable Naming

**Backend (Node.js):**

```bash
# No prefix needed
PORT=3000
DATABASE_URL=postgresql://localhost:5432/textme
JWT_SECRET=your-secret
```

**Admin (Vite):**

```bash
# Must prefix with VITE_
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=TextMe Admin
VITE_ENVIRONMENT=development
```

**Mobile (Expo):**

```bash
# Must prefix with EXPO_PUBLIC_
EXPO_PUBLIC_API_URL=http://localhost:3000
EXPO_PUBLIC_APP_NAME=TextMe
EXPO_PUBLIC_ENVIRONMENT=development
```

---

## 🎨 Best Practices by Technology

### Node.js + Express (Backend)

✅ **DO:**

- Use `tsx watch` for development (hot reload)
- Enable debugger with `--inspect`
- Build for production deployments
- Use environment variables for config
- Type check before deploying

❌ **DON'T:**

- Use `nodemon` (tsx is better)
- Skip type checking
- Run TypeScript in production (compile first)

### React + Vite (Admin)

✅ **DO:**

- Use Vite dev server for development
- Preview production builds locally
- Lazy load routes with React.lazy()
- Use `import.meta.env` for environment variables
- Test with Vitest (Vite-native)

❌ **DON'T:**

- Skip the preview step
- Use Create React App commands
- Access env vars without VITE\_ prefix

### React Native + Expo (Mobile)

✅ **DO:**

- Use `expo start` for flexibility
- Test on physical devices
- Use platform-specific targets (android/ios)
- Use EAS for production builds
- Access env vars with EXPO*PUBLIC* prefix

❌ **DON'T:**

- Skip testing on real devices
- Use bare workflow unless necessary
- Forget to configure EAS before building

---

## 🐛 Debugging Guide

### Backend Debugging

```bash
# Start with debugger
npm run dev:api

# VS Code: Attach to port 9229
# Chrome: chrome://inspect
```

### Admin Debugging

```bash
# Browser DevTools (automatic)
npm run dev:admin

# Vitest UI for tests
npx nx run text-me-admin:test:ui
```

### Mobile Debugging

```bash
# React Native Debugger
npm run dev:mobile
# Press 'j' to open debugger
```

---

## 🚢 Deployment Checklist

### Backend (text-me-api)

- [ ] Type check: `npx nx run text-me-api:typecheck`
- [ ] Run tests: `npm run test:api`
- [ ] Lint: `npx nx lint text-me-api`
- [ ] Build: `npm run build:api:prod`
- [ ] Test build: `npx nx run text-me-api:start:prod`
- [ ] Deploy `dist/apps/text-me-api/`
- [ ] Set environment variables on server
- [ ] Test health endpoint

### Admin (text-me-admin)

- [ ] Type check: `npx nx run text-me-admin:typecheck`
- [ ] Run tests: `npm run test:admin`
- [ ] Lint: `npx nx lint text-me-admin`
- [ ] Build: `npm run build:admin:prod`
- [ ] Preview: `npx nx run text-me-admin:preview`
- [ ] Deploy `dist/apps/text-me-admin/`
- [ ] Test on hosting platform
- [ ] Verify API connections

### Mobile (text-me)

- [ ] Run tests: `npx nx test text-me`
- [ ] Lint: `npx nx lint text-me`
- [ ] Configure EAS: `npx eas-cli login`
- [ ] Build Android: `npx nx run text-me:build-android:prod`
- [ ] Build iOS: `npx nx run text-me:build-ios:prod`
- [ ] Test builds on devices
- [ ] Submit to stores: `npx eas submit`

---

## 📊 Command Comparison Matrix

| Task           | Mobile                         | Backend                          | Admin                              |
| -------------- | ------------------------------ | -------------------------------- | ---------------------------------- |
| **Start Dev**  | `npx nx run text-me:start:dev` | `npx nx run text-me-api:dev:dev` | `npx nx run text-me-admin:dev:dev` |
| **Hot Reload** | ✅ Metro                       | ✅ tsx watch                     | ✅ Vite HMR                        |
| **Debug**      | React Native Debugger          | Node Inspector (9229)            | Browser DevTools                   |
| **Build**      | EAS Build                      | Webpack                          | Vite                               |
| **Test**       | Jest                           | Jest                             | Vitest                             |
| **Preview**    | Expo Go                        | Start built code                 | Vite preview                       |

---

## 🔧 Troubleshooting

### Port Conflicts

```bash
# Find and kill process
lsof -i :3000    # Backend
lsof -i :5173    # Admin
lsof -i :8081    # Mobile

kill -9 PID
```

### Environment Variables Not Loading

```bash
# Verify .env files exist
ls -la apps/*/. env.*

# Restart dev server
# Environment variables load at startup
```

### Native Binding Errors (Admin)

Current issue with Vite + Node.js 21.7.1

**Solution:** Upgrade to Node.js 22.12+ or downgrade to 20.19+

```bash
# Check Node version
node --version

# Install nvm and switch versions
nvm install 22
nvm use 22
```

### Build Failures

```bash
# Type check first
npx nx run APP:typecheck

# Clean and rebuild
rm -rf dist node_modules/.cache
npm install --legacy-peer-deps
npm run build:<app>:prod
```

---

## 📖 Further Reading

- **Mobile:** `apps/text-me/MOBILE-COMMANDS.md`
- **Backend:** `apps/text-me-api/API-COMMANDS.md`
- **Admin:** `apps/text-me-admin/ADMIN-COMMANDS.md`
- **Environments:** `ENVIRONMENTS.md`
- **Scripts:** `SCRIPTS.md`
- **Setup:** `SETUP.md`

---

## 🎯 Quick Command Reference

```bash
# Most common commands you'll use daily:

# Start everything
npm start

# Start individual apps
npm run dev:mobile
npm run dev:api
npm run dev:admin

# With specific environment
npx nx run text-me-api:dev:stage
npx nx run text-me-admin:dev:prod
npx nx run text-me:android:dev

# Build for production
npm run build:api:prod
npm run build:admin:prod

# Run tests
npm run test
npm run test:api
```

---

**🚀 You're all set! Happy coding!**
