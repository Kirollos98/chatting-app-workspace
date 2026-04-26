# Environment Configuration Guide

This guide explains how to manage different environments (dev, stage, prod) for each app in the TextMe workspace.

## 📁 Environment Files Structure

Each app has three environment-specific files:

```
apps/
├── text-me-api/
│   ├── .env.example     # Template (committed to git)
│   ├── .env.dev         # Development (ignored by git)
│   ├── .env.stage       # Staging (ignored by git)
│   └── .env.prod        # Production (ignored by git)
├── text-me-admin/
│   ├── .env.example
│   ├── .env.dev
│   ├── .env.stage
│   └── .env.prod
└── text-me/
    ├── .env.example
    ├── .env.dev
    ├── .env.stage
    └── .env.prod
```

## 🚀 Quick Start

### 1. Copy Environment Files

Environment files are pre-created with example values. Update them with your actual configuration:

```bash
# Backend API - Update these files with your config
nano apps/text-me-api/.env.dev
nano apps/text-me-api/.env.stage
nano apps/text-me-api/.env.prod

# Admin Dashboard - Update these files
nano apps/text-me-admin/.env.dev
nano apps/text-me-admin/.env.stage
nano apps/text-me-admin/.env.prod

# Mobile App - Update these files
nano apps/text-me/.env.dev
nano apps/text-me/.env.stage
nano apps/text-me/.env.prod
```

### 2. Run Apps with Specific Environment

**Development (default):**

```bash
npm run dev:api        # Uses .env.dev
npm run dev:admin      # Uses .env.dev
npm run dev:mobile     # Uses .env.dev
```

**Staging:**

```bash
npm run dev:api:stage
npm run dev:admin:stage
npm run dev:mobile:stage

# Or all at once
npm run dev:all:stage
```

**Production:**

```bash
npm run dev:api:prod
npm run dev:admin:prod
npm run dev:mobile:prod

# Or all at once
npm run dev:all:prod
```

## 📋 Available Scripts by Environment

### Backend API (text-me-api)

| Script                    | Environment            | Description              |
| ------------------------- | ---------------------- | ------------------------ |
| `npm run dev:api`         | Development (.env.dev) | Start API in dev mode    |
| `npm run dev:api:dev`     | Development (.env.dev) | Start API in dev mode    |
| `npm run dev:api:stage`   | Staging (.env.stage)   | Start API in stage mode  |
| `npm run dev:api:prod`    | Production (.env.prod) | Start API in prod mode   |
| `npm run build:api`       | Production (.env.prod) | Build API for production |
| `npm run build:api:dev`   | Development (.env.dev) | Build API for dev        |
| `npm run build:api:stage` | Staging (.env.stage)   | Build API for staging    |
| `npm run build:api:prod`  | Production (.env.prod) | Build API for production |

### Admin Dashboard (text-me-admin)

| Script                      | Environment            | Description                |
| --------------------------- | ---------------------- | -------------------------- |
| `npm run dev:admin`         | Development (.env.dev) | Start admin in dev mode    |
| `npm run dev:admin:dev`     | Development (.env.dev) | Start admin in dev mode    |
| `npm run dev:admin:stage`   | Staging (.env.stage)   | Start admin in stage mode  |
| `npm run dev:admin:prod`    | Production (.env.prod) | Start admin in prod mode   |
| `npm run build:admin`       | Production (.env.prod) | Build admin for production |
| `npm run build:admin:dev`   | Development (.env.dev) | Build admin for dev        |
| `npm run build:admin:stage` | Staging (.env.stage)   | Build admin for staging    |
| `npm run build:admin:prod`  | Production (.env.prod) | Build admin for production |

### Mobile App (text-me)

| Script                     | Environment            | Description                |
| -------------------------- | ---------------------- | -------------------------- |
| `npm run dev:mobile`       | Development (.env.dev) | Start mobile in dev mode   |
| `npm run dev:mobile:dev`   | Development (.env.dev) | Start mobile in dev mode   |
| `npm run dev:mobile:stage` | Staging (.env.stage)   | Start mobile in stage mode |
| `npm run dev:mobile:prod`  | Production (.env.prod) | Start mobile in prod mode  |

### Run All Apps

| Script                       | Environment            | Description            |
| ---------------------------- | ---------------------- | ---------------------- |
| `npm start` or `npm run dev` | Development (.env.dev) | All apps in dev mode   |
| `npm run dev:all:stage`      | Staging (.env.stage)   | All apps in stage mode |
| `npm run dev:all:prod`       | Production (.env.prod) | All apps in prod mode  |

## 🔧 Environment Variables Reference

### Backend API (.env.dev, .env.stage, .env.prod)

```bash
# Environment
NODE_ENV=development|staging|production
PORT=3000

# API
API_URL=http://localhost:3000 | https://api-stage.textme.app | https://api.textme.app

# Database
DATABASE_URL=your-database-connection-string

# JWT Authentication
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d

# CORS
ALLOWED_ORIGINS=comma-separated-origins

# Optional: Redis, logging, etc.
REDIS_URL=redis://...
LOG_LEVEL=debug|info|warn|error
```

### Admin Dashboard (.env.dev, .env.stage, .env.prod)

```bash
# Environment
VITE_ENV=development|staging|production

# API Endpoint
VITE_API_URL=http://localhost:3000 | https://api-stage.textme.app | https://api.textme.app

# App Name
VITE_APP_NAME=TextMe Admin (Dev) | TextMe Admin (Stage) | TextMe Admin
```

### Mobile App (.env.dev, .env.stage, .env.prod)

```bash
# Environment
EXPO_PUBLIC_ENV=development|staging|production

# API Endpoint
EXPO_PUBLIC_API_URL=http://localhost:3000 | https://api-stage.textme.app | https://api.textme.app

# App Name
EXPO_PUBLIC_APP_NAME=TextMe (Dev) | TextMe (Stage) | TextMe
```

## 🔐 Security Best Practices

1. **Never commit actual environment files** (.env.dev, .env.stage, .env.prod are gitignored)
2. **Keep .env.example up to date** as a template for your team
3. **Use strong secrets** for JWT_SECRET and other sensitive values
4. **Different secrets per environment** - never use the same secret across environments
5. **Rotate secrets regularly** especially in production
6. **Use environment variables** in CI/CD pipelines instead of files

## 🔄 Environment File Management

### For New Team Members

1. Get the environment files from your team lead (securely, not via git)
2. Place them in the correct locations:
   ```bash
   apps/text-me-api/.env.dev
   apps/text-me-api/.env.stage
   apps/text-me-api/.env.prod
   # ... and so on
   ```

### Updating Environment Variables

1. Update the specific environment file
2. Restart the app for changes to take effect
3. Notify your team if variables are added/removed

### Creating New Environments

To add a new environment (e.g., `.env.uat`):

1. Create the env file: `apps/text-me-api/.env.uat`
2. Add to .gitignore: `apps/**/.env.uat`
3. Add script to package.json:
   ```json
   "dev:api:uat": "dotenv -e apps/text-me-api/.env.uat -- npx nx serve text-me-api"
   ```

## 📊 Environment Comparison

| Feature     | Development    | Staging              | Production     |
| ----------- | -------------- | -------------------- | -------------- |
| API URL     | localhost:3000 | api-stage.textme.app | api.textme.app |
| Database    | Local/Dev DB   | Staging DB           | Production DB  |
| Logging     | Verbose        | Normal               | Minimal        |
| Debug Mode  | Enabled        | Enabled              | Disabled       |
| Source Maps | Yes            | Yes                  | No             |
| Caching     | Disabled       | Enabled              | Enabled        |
| SSL/TLS     | No             | Yes                  | Yes            |

## 🐛 Troubleshooting

### Environment not loading?

1. Check the file path is correct
2. Make sure the file exists (not just .example)
3. Verify dotenv-cli is installed: `npm list dotenv-cli`
4. Check for typos in the script command

### Variables not accessible in app?

**Vite (Admin):** Variables must be prefixed with `VITE_`

```bash
✅ VITE_API_URL=...
❌ API_URL=...
```

**Expo (Mobile):** Variables must be prefixed with `EXPO_PUBLIC_`

```bash
✅ EXPO_PUBLIC_API_URL=...
❌ API_URL=...
```

**Node (Backend):** No prefix required

```bash
✅ DATABASE_URL=...
```

### Want to override a variable temporarily?

Use inline environment variables:

```bash
PORT=4000 npm run dev:api
```

## 📝 Examples

### Example 1: Test against staging API locally

```bash
# Run mobile app pointing to staging API
npm run dev:mobile:stage
```

### Example 2: Build all apps for production

```bash
npm run build:api:prod
npm run build:admin:prod
```

### Example 3: Run admin against prod API for testing

```bash
npm run dev:admin:prod
```

### Example 4: Custom combination

```bash
# Run API in dev, but admin in stage
concurrently "npm run dev:api:dev" "npm run dev:admin:stage"
```

## 🎯 Summary

- **3 environments** per app: dev, stage, prod
- **Pre-created files** with example values - just update them
- **Simple commands**: `npm run dev:api:stage`, `npm run build:admin:prod`, etc.
- **Git safe**: Actual env files are ignored, only .example is committed
- **Team friendly**: Share encrypted env files, never commit them

---

**Need help?** Check [SCRIPTS.md](SCRIPTS.md) for all available commands.
