# Backend API (text-me-api) - Commands Reference

This document covers all available commands for the Node.js + Express backend API with different environments.

## Tech Stack & Best Practices

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Dev Tool**: `tsx` (modern TypeScript executor with watch mode)
- **Build Tool**: Webpack (via Nx)
- **Test Framework**: Jest
- **Best Practices**:
  - Hot reload with `tsx watch` for fast development
  - Debug mode enabled by default (`--inspect`)
  - Source maps for better debugging
  - Environment-specific configurations

## Quick Reference

```bash
# Development with hot reload
npx nx run text-me-api:dev
npx nx run text-me-api:dev:dev
npx nx run text-me-api:dev:stage
npx nx run text-me-api:dev:prod

# Serve (alias for dev)
npx nx run text-me-api:serve
npx nx run text-me-api:serve:dev
npx nx run text-me-api:serve:stage
npx nx run text-me-api:serve:prod

# Start (production mode, requires build first)
npx nx run text-me-api:start
npx nx run text-me-api:start:dev
npx nx run text-me-api:start:stage
npx nx run text-me-api:start:prod

# Build
npx nx run text-me-api:build
npx nx run text-me-api:build:dev
npx nx run text-me-api:build:stage
npx nx run text-me-api:build:prod

# Testing
npx nx test text-me-api
npx nx run text-me-api:test:watch
npx nx run text-me-api:test:coverage

# Type checking and linting
npx nx run text-me-api:typecheck
npx nx lint text-me-api
```

## NPM Scripts (Shortcuts)

```bash
# Development
npm run dev:api              # Default (dev environment)
npm run dev:api:dev
npm run dev:api:stage
npm run dev:api:prod

# Build
npm run build:api            # Production build
npm run build:api:dev
npm run build:api:stage
npm run build:api:prod

# Testing
npm run test:api
```

---

## Command Details

### `dev` - Development Mode (Recommended)

**Best practice for Node.js development.** Runs TypeScript directly with hot reload and debugging enabled.

```bash
npx nx run text-me-api:dev              # Uses .env.dev
npx nx run text-me-api:dev:stage        # Uses .env.stage
npx nx run text-me-api:dev:prod         # Uses .env.prod
```

**What it does:**

- Runs TypeScript directly using `tsx` (no build step needed)
- Hot reload on file changes (automatic restart)
- Debugger enabled on default port (9229)
- Loads environment variables from respective .env file
- Faster feedback loop than build + start

**When to use:**

- Local development (99% of the time)
- Debugging with breakpoints
- Quick iteration on features
- Testing API endpoints

**Debugger setup:**

- VS Code: Attach debugger to port 9229
- Chrome DevTools: `chrome://inspect`
- Node.js automatically pauses on `debugger;` statements

---

### `serve` - Serve Mode (Alias for dev)

Same as `dev` target. Provided for consistency with Nx conventions.

```bash
npx nx run text-me-api:serve
npx nx run text-me-api:serve:stage
```

---

### `start` - Production Start

**Best practice for production deployments.** Runs the compiled JavaScript (requires build first).

```bash
# Must build first
npx nx run text-me-api:build:prod

# Then start
npx nx run text-me-api:start:prod
```

**What it does:**

- Runs compiled JavaScript from `dist/` directory
- No TypeScript compilation overhead
- Fastest runtime performance
- No file watching
- Production-optimized code

**When to use:**

- Production servers
- Docker containers
- PM2/systemd services
- Performance testing
- CI/CD deployments

**Workflow:**

```bash
# Local production test
npm run build:api:prod
npx nx run text-me-api:start:prod

# In Docker
COPY dist/apps/text-me-api /app
CMD ["node", "main.js"]
```

---

### `build` - Build for Production

Compiles TypeScript to optimized JavaScript using Webpack.

```bash
npx nx run text-me-api:build            # Production (default)
npx nx run text-me-api:build:dev        # Development build
npx nx run text-me-api:build:stage      # Staging build
npx nx run text-me-api:build:prod       # Production build
```

**Output:** `dist/apps/text-me-api/`

**Build configurations:**

| Environment | Optimization | Source Maps | Extract Licenses |
| ----------- | ------------ | ----------- | ---------------- |
| dev         | ❌           | ✅          | ❌               |
| stage       | ✅           | ✅          | ✅               |
| prod        | ✅           | ❌          | ✅               |

**What gets built:**

- `main.js` - Bundled application code
- `package.json` - Generated with only production dependencies
- `assets/` - Static files (if any)

**When to use:**

- Before deploying to production
- Creating Docker images
- Performance benchmarking
- CI/CD pipelines

---

### `test` - Run Tests

Runs Jest tests with TypeScript support.

```bash
# Run once
npx nx test text-me-api
npm run test:api

# Watch mode (re-run on changes)
npx nx run text-me-api:test:watch

# With coverage report
npx nx run text-me-api:test:coverage
```

**Output:** Coverage reports in `coverage/apps/text-me-api/`

**When to use:**

- Before committing code
- CI/CD pipelines
- TDD development (use watch mode)
- Code reviews

---

### `typecheck` - Type Check

Runs TypeScript compiler in check mode (no output files).

```bash
npx nx run text-me-api:typecheck
```

**When to use:**

- Pre-commit hooks
- CI/CD verification
- Finding type errors quickly
- Before building

---

### `lint` - ESLint

Runs ESLint to check code quality and style.

```bash
npx nx lint text-me-api
```

---

## Environment Variables

Each environment uses its own `.env` file:

| Environment | File         | Usage                           |
| ----------- | ------------ | ------------------------------- |
| Development | `.env.dev`   | Local development, debugging    |
| Staging     | `.env.stage` | QA testing, integration testing |
| Production  | `.env.prod`  | Production server               |

**Backend Environment Variables** (no prefix needed):

```bash
# .env.dev example
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://localhost:5432/textme_dev
JWT_SECRET=dev-secret-change-in-production
REDIS_URL=redis://localhost:6379
API_VERSION=v1
LOG_LEVEL=debug
CORS_ORIGIN=http://localhost:5173,http://localhost:8081
```

**Access in code:**

```typescript
import 'dotenv/config'; // Already imported in main.ts

const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;
```

---

## Common Workflows

### Local Development (Standard)

```bash
# Terminal 1: Start backend with hot reload
npm run dev:api

# Backend runs on http://localhost:3000
# Auto-reloads on file changes
# Debugger available on port 9229
```

### Debugging in VS Code

1. Start the API:

   ```bash
   npm run dev:api
   ```

2. Add to `.vscode/launch.json`:

   ```json
   {
     "type": "node",
     "request": "attach",
     "name": "Attach to Backend",
     "port": 9229,
     "restart": true,
     "skipFiles": ["<node_internals>/**"]
   }
   ```

3. Press F5 to attach debugger

4. Set breakpoints in TypeScript files

### Testing Changes

```bash
# Run tests in watch mode while developing
npx nx run text-me-api:test:watch

# Make changes to code
# Tests automatically re-run

# Check coverage when done
npx nx run text-me-api:test:coverage
```

### Pre-Production Testing

```bash
# 1. Build for production
npm run build:api:prod

# 2. Start with production environment
npx nx run text-me-api:start:prod

# 3. Test API endpoints
curl http://localhost:3000/api/health

# 4. Check performance, memory usage
```

### Deployment Workflow

```bash
# 1. Type check
npx nx run text-me-api:typecheck

# 2. Run tests
npm run test:api

# 3. Lint
npx nx lint text-me-api

# 4. Build for production
npm run build:api:prod

# 5. Test production build locally
npx nx run text-me-api:start:prod

# 6. Deploy dist/apps/text-me-api to server
```

---

## Docker Best Practices

```dockerfile
# Dockerfile.api
FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .
RUN npx nx run text-me-api:build:prod

FROM node:22-alpine

WORKDIR /app
COPY --from=builder /app/dist/apps/text-me-api ./
COPY --from=builder /app/apps/text-me-api/.env.prod ./.env

CMD ["node", "main.js"]
```

---

## Performance Tips

1. **Use `dev` for development** - Faster than build + start cycle
2. **Enable debugger** - Already enabled by default with `--inspect`
3. **Watch mode for tests** - Instant feedback on changes
4. **Production builds are optimized** - Smaller bundles, tree-shaking
5. **Source maps in staging** - Debug production builds easily

---

## Troubleshooting

### Port already in use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>

# Or change PORT in .env file
```

### Environment variables not loading

```bash
# Verify .env file exists
ls -la apps/text-me-api/.env.*

# Check file content
cat apps/text-me-api/.env.dev

# Ensure dotenv is imported in main.ts
```

### Hot reload not working

```bash
# tsx watch should be running
# Check terminal output for errors

# Restart with clean cache
npm run dev:api
```

### Build fails

```bash
# Type check first to find issues
npx nx run text-me-api:typecheck

# Check webpack config
cat apps/text-me-api/webpack.config.js
```

### Tests failing

```bash
# Run with verbose output
npx nx test text-me-api --verbose

# Check Jest config
cat apps/text-me-api/jest.config.cts
```

---

## Additional Resources

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Express.js Documentation](https://expressjs.com/)
- [tsx Documentation](https://github.com/privatenumber/tsx)
- [Jest Documentation](https://jestjs.io/)
- [Nx Node Documentation](https://nx.dev/recipes/node)
