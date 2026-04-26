# Admin App (text-me-admin) - Commands Reference

This document covers all available commands for the React + Vite admin dashboard with different environments.

## Tech Stack & Best Practices

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (fast HMR, instant server start)
- **State Management**: React Query (@tanstack/react-query)
- **Styling**: Tailwind CSS
- **Test Framework**: Vitest
- **Best Practices**:
  - Lightning-fast HMR with Vite
  - Host binding for network access (test on mobile devices)
  - Environment-specific builds with Vite modes
  - Preview mode to test production builds locally

## Quick Reference

```bash
# Development server
npx nx run text-me-admin:dev
npx nx run text-me-admin:dev:dev
npx nx run text-me-admin:dev:stage
npx nx run text-me-admin:dev:prod

# Serve (alias for dev)
npx nx run text-me-admin:serve
npx nx run text-me-admin:serve:dev
npx nx run text-me-admin:serve:stage
npx nx run text-me-admin:serve:prod

# Build
npx nx run text-me-admin:build
npx nx run text-me-admin:build:dev
npx nx run text-me-admin:build:stage
npx nx run text-me-admin:build:prod

# Preview (test production build)
npx nx run text-me-admin:preview

# Testing
npx nx test text-me-admin
npx nx run text-me-admin:test:watch
npx nx run text-me-admin:test:ui
npx nx run text-me-admin:test:coverage

# Type checking and linting
npx nx run text-me-admin:typecheck
npx nx lint text-me-admin
```

## NPM Scripts (Shortcuts)

```bash
# Development
npm run dev:admin              # Default (dev environment)
npm run dev:admin:dev
npm run dev:admin:stage
npm run dev:admin:prod

# Build
npm run build:admin            # Production build
npm run build:admin:dev
npm run build:admin:stage
npm run build:admin:prod

# Testing
npm run test:admin
```

---

## Command Details

### `dev` / `serve` - Development Server

**Best practice for Vite development.** Starts dev server with instant HMR and network access.

```bash
npx nx run text-me-admin:dev              # Uses .env.dev
npx nx run text-me-admin:dev:stage        # Uses .env.stage
npx nx run text-me-admin:dev:prod         # Uses .env.prod
```

**What it does:**

- Starts Vite dev server on port 5173 (configurable)
- Hot Module Replacement (HMR) - instant updates
- Network accessible with `--host` flag
- Loads environment variables from respective .env file
- Pre-bundled dependencies for speed
- TypeScript checking in IDE

**When to use:**

- Local development (99% of the time)
- Testing UI changes with instant feedback
- Developing components
- Testing on mobile devices (network accessible)

**Network access:**

```bash
# Server starts with --host flag
# Access from any device on network:
#   - Local:   http://localhost:5173
#   - Network: http://192.168.1.x:5173
```

---

### `build` - Build for Production

Builds optimized static files using Vite.

```bash
npx nx run text-me-admin:build            # Production (default)
npx nx run text-me-admin:build:dev        # Development build
npx nx run text-me-admin:build:stage      # Staging build
npx nx run text-me-admin:build:prod       # Production build
```

**Output:** `dist/apps/text-me-admin/`

**Build modes:**

| Mode  | Optimization | Minification | Source Maps | Vite Mode   |
| ----- | ------------ | ------------ | ----------- | ----------- |
| dev   | Basic        | ❌           | ✅          | development |
| stage | Full         | ✅           | ✅          | staging     |
| prod  | Full         | ✅           | ❌          | production  |

**What gets built:**

- `index.html` - Entry point
- `assets/*.js` - Bundled JavaScript (code-split)
- `assets/*.css` - Extracted CSS
- Static assets (images, fonts, etc.)

**Build optimizations:**

- Tree-shaking (removes unused code)
- Code splitting (lazy load routes)
- Asset optimization (compress images)
- CSS minification
- Legacy browser support (if configured)

**When to use:**

- Before deploying to hosting (Vercel, Netlify, etc.)
- Testing production bundle locally
- CI/CD pipelines
- Performance analysis

---

### `preview` - Preview Production Build

**Best practice for testing production builds locally.** Serves the built files with production-like settings.

```bash
# Build first
npx nx run text-me-admin:build:prod

# Then preview
npx nx run text-me-admin:preview
```

**What it does:**

- Serves files from `dist/apps/text-me-admin/`
- Production-like server behavior
- Test before deploying
- Network accessible with `--host`

**When to use:**

- Testing production build locally
- Verifying build output
- Checking asset loading
- Performance testing
- Before deployment

---

### `test` - Run Tests

Runs Vitest tests with React Testing Library.

```bash
# Run once
npx nx test text-me-admin
npm run test:admin

# Watch mode (re-run on changes)
npx nx run text-me-admin:test:watch

# UI mode (visual test runner)
npx nx run text-me-admin:test:ui

# With coverage report
npx nx run text-me-admin:test:coverage
```

**Vitest features:**

- Vite-native test runner (same config as dev)
- Instant test execution
- Component testing with React Testing Library
- UI mode for visual debugging
- Coverage reports with c8

**When to use:**

- TDD development (use watch mode)
- Component testing
- Before committing
- CI/CD pipelines

---

### `typecheck` - Type Check

Runs TypeScript compiler in check mode.

```bash
npx nx run text-me-admin:typecheck
```

**When to use:**

- Pre-commit hooks
- Finding type errors
- CI/CD verification
- Before building

---

### `lint` - ESLint

Runs ESLint to check code quality.

```bash
npx nx lint text-me-admin
```

---

## Environment Variables

Each environment uses its own `.env` file:

| Environment | File         | Usage                        |
| ----------- | ------------ | ---------------------------- |
| Development | `.env.dev`   | Local development, mock APIs |
| Staging     | `.env.stage` | QA testing, staging APIs     |
| Production  | `.env.prod`  | Production APIs, analytics   |

**Vite Environment Variables** must be prefixed with `VITE_`:

```bash
# .env.dev example
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=TextMe Admin (Dev)
VITE_ENVIRONMENT=development
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEBUG=true
VITE_WS_URL=ws://localhost:3000
```

**Access in code:**

```typescript
// Typed environment variables (recommended)
const apiUrl = import.meta.env.VITE_API_URL;
const appName = import.meta.env.VITE_APP_NAME;

// Check mode
if (import.meta.env.DEV) {
  console.log('Development mode');
}

if (import.meta.env.PROD) {
  console.log('Production mode');
}
```

**TypeScript types** (add to `src/vite-env.d.ts`):

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_ENVIRONMENT: string;
  readonly VITE_ENABLE_ANALYTICS: string;
  readonly VITE_ENABLE_DEBUG: string;
  readonly VITE_WS_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

---

## Common Workflows

### Local Development

```bash
# Terminal 1: Start backend
npm run dev:api

# Terminal 2: Start admin
npm run dev:admin

# Admin runs on http://localhost:5173
# Auto-reloads on file changes
# HMR preserves component state
```

### Mobile Device Testing

```bash
# Start with network access (default)
npm run dev:admin

# Terminal shows network URLs:
# ➜  Local:   http://localhost:5173/
# ➜  Network: http://192.168.1.100:5173/

# Access from mobile on same network
```

### Component Development

```bash
# Terminal 1: Tests in watch mode
npx nx run text-me-admin:test:watch

# Terminal 2: Dev server
npm run dev:admin

# Terminal 3: Vitest UI (optional)
npx nx run text-me-admin:test:ui
```

### Pre-Production Testing

```bash
# 1. Build for production
npm run build:admin:prod

# 2. Preview locally
npx nx run text-me-admin:preview

# 3. Test all features
# 4. Check console for errors
# 5. Verify API calls work
```

### Deployment Workflow

```bash
# 1. Type check
npx nx run text-me-admin:typecheck

# 2. Lint
npx nx lint text-me-admin

# 3. Run tests
npm run test:admin

# 4. Build for production
npm run build:admin:prod

# 5. Preview build
npx nx run text-me-admin:preview

# 6. Deploy dist/apps/text-me-admin to hosting
```

---

## Hosting Platforms

### Vercel (Recommended for Vite)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Automatic settings:
# - Build Command: npm run build:admin:prod
# - Output Directory: dist/apps/text-me-admin
# - Install Command: npm install --legacy-peer-deps
```

### Netlify

```bash
# netlify.toml
[build]
  command = "npm run build:admin:prod"
  publish = "dist/apps/text-me-admin"

[build.environment]
  NODE_VERSION = "22"
```

### Docker + Nginx

```dockerfile
# Dockerfile.admin
FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .
RUN npx nx run text-me-admin:build:prod

FROM nginx:alpine
COPY --from=builder /app/dist/apps/text-me-admin /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
```

---

## Performance Tips

1. **Vite is fast by default** - Leverages native ES modules
2. **Use lazy loading** - Split routes with React.lazy()
3. **Optimize images** - Use WebP, lazy load images
4. **Code splitting** - Vite does this automatically
5. **Preview before deploy** - Test production build locally
6. **Lighthouse** - Check performance scores

**Lazy loading example:**

```typescript
import { lazy } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Users = lazy(() => import('./pages/Users'));
```

---

## Troubleshooting

### Port 5173 already in use

```bash
# Kill process on port
lsof -i :5173
kill -9 <PID>

# Or change port in vite.config.ts
export default defineConfig({
  server: {
    port: 3001
  }
});
```

### Environment variables not updating

```bash
# Stop server and restart
# Vite loads .env files at startup only

npm run dev:admin:stage
```

### Slow initial page load

```bash
# Vite pre-bundles dependencies
# Clear cache if stale

rm -rf node_modules/.vite
npm run dev:admin
```

### Build fails

```bash
# Type check first
npx nx run text-me-admin:typecheck

# Check for import errors
# Vite is strict about imports
```

### HMR not working

```bash
# Restart dev server
# Check browser console for errors
# Ensure file changes are being saved
```

### Network access not working

```bash
# Ensure --host flag is used (already in config)
# Check firewall settings
# Verify IP address is correct

# Test with curl from another device
curl http://192.168.1.x:5173
```

---

## Vite vs Create React App

| Feature          | Vite    | CRA     |
| ---------------- | ------- | ------- |
| Dev server start | Instant | 10-30s  |
| HMR speed        | <50ms   | 1-3s    |
| Build speed      | Fast    | Slow    |
| Bundle size      | Smaller | Larger  |
| Native ESM       | ✅      | ❌      |
| Config           | Simple  | Complex |

**Migration from CRA:** Already done! This project uses Vite.

---

## Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vitest Documentation](https://vitest.dev/)
- [Nx Vite Documentation](https://nx.dev/recipes/vite)
