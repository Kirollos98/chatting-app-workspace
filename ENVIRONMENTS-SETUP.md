# 🎉 Environment-Specific Scripts Added!

## ✅ What Was Completed

### 1. **Installed Environment Management Tools**
- ✅ `dotenv-cli` - Load environment variables from files
- ✅ `cross-env` - Cross-platform environment variable support

### 2. **Created Environment Files (Pre-configured)**

For **each app**, created 3 environment files with example values:

#### Backend API (apps/text-me-api/)
- ✅ `.env.dev` - Development config (localhost:3000, dev database)
- ✅ `.env.stage` - Staging config (api-stage.textme.app, staging DB)
- ✅ `.env.prod` - Production config (api.textme.app, production DB)

#### Admin Dashboard (apps/text-me-admin/)
- ✅ `.env.dev` - Development config (localhost:3000 API)
- ✅ `.env.stage` - Staging config (api-stage.textme.app API)
- ✅ `.env.prod` - Production config (api.textme.app API)

#### Mobile App (apps/text-me/)
- ✅ `.env.dev` - Development config (localhost:3000 API)
- ✅ `.env.stage` - Staging config (api-stage.textme.app API)
- ✅ `.env.prod` - Production config (api.textme.app API)

### 3. **Added Environment-Specific Scripts**

#### Development Scripts (serve apps)

**Individual Apps:**
```bash
# Backend API
npm run dev:api           # Dev mode (default)
npm run dev:api:dev       # Dev mode
npm run dev:api:stage     # Stage mode
npm run dev:api:prod      # Prod mode

# Admin Dashboard
npm run dev:admin         # Dev mode (default)
npm run dev:admin:dev     # Dev mode
npm run dev:admin:stage   # Stage mode
npm run dev:admin:prod    # Prod mode

# Mobile App
npm run dev:mobile        # Dev mode (default)
npm run dev:mobile:dev    # Dev mode
npm run dev:mobile:stage  # Stage mode
npm run dev:mobile:prod   # Prod mode
```

**All Apps Together:**
```bash
npm start                 # All apps in dev mode (default)
npm run dev               # All apps in dev mode
npm run dev:all:stage     # All apps in stage mode
npm run dev:all:prod      # All apps in prod mode
```

#### Build Scripts

```bash
# Backend API
npm run build:api         # Prod mode (default)
npm run build:api:dev     # Dev mode
npm run build:api:stage   # Stage mode
npm run build:api:prod    # Prod mode

# Admin Dashboard
npm run build:admin       # Prod mode (default)
npm run build:admin:dev   # Dev mode
npm run build:admin:stage # Stage mode
npm run build:admin:prod  # Prod mode
```

### 4. **Updated Git Configuration**
- ✅ Added `.env.dev`, `.env.stage`, `.env.prod` to .gitignore
- ✅ Only `.env.example` files are tracked in git
- ✅ Actual environment files are excluded from repository

### 5. **Created Documentation**
- ✅ **ENVIRONMENTS.md** - Complete environment configuration guide
- ✅ Updated **SCRIPTS.md** - Added environment-specific commands

## 🚀 Quick Start Examples

### Example 1: Run Backend in Staging Mode
```bash
npm run dev:api:stage
```
This will:
- Load `apps/text-me-api/.env.stage`
- Start API with staging configuration
- Connect to staging database
- Use staging API URL

### Example 2: Build Admin for Production
```bash
npm run build:admin:prod
```
This will:
- Load `apps/text-me-admin/.env.prod`
- Build admin dashboard with production settings
- Use production API endpoint
- Optimize for production deployment

### Example 3: Run All Apps in Staging
```bash
npm run dev:all:stage
```
This will:
- Start API with `.env.stage`
- Start Admin with `.env.stage`
- Start Mobile with `.env.stage`
- All apps in parallel, color-coded output

### Example 4: Test Mobile Against Prod API
```bash
npm run dev:mobile:prod
```
This will:
- Load `apps/text-me/.env.prod`
- Run mobile app locally
- Connect to production API endpoint

## 📁 Environment File Contents

### Backend API Environment Variables

```bash
# .env.dev
NODE_ENV=development
PORT=3000
API_URL=http://localhost:3000
DATABASE_URL=mongodb://localhost:27017/textme_dev
JWT_SECRET=your-dev-secret
ALLOWED_ORIGINS=http://localhost:4200,http://localhost:8081

# .env.stage
NODE_ENV=staging
PORT=3000
API_URL=https://api-stage.textme.app
DATABASE_URL=your-staging-database-url
JWT_SECRET=your-stage-secret
ALLOWED_ORIGINS=https://admin-stage.textme.app

# .env.prod
NODE_ENV=production
PORT=3000
API_URL=https://api.textme.app
DATABASE_URL=your-production-database-url
JWT_SECRET=your-production-secret
ALLOWED_ORIGINS=https://admin.textme.app,https://textme.app
LOG_LEVEL=error
```

### Admin Dashboard Environment Variables

```bash
# .env.dev
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=TextMe Admin (Dev)
VITE_ENV=development

# .env.stage
VITE_API_URL=https://api-stage.textme.app
VITE_APP_NAME=TextMe Admin (Stage)
VITE_ENV=staging

# .env.prod
VITE_API_URL=https://api.textme.app
VITE_APP_NAME=TextMe Admin
VITE_ENV=production
```

### Mobile App Environment Variables

```bash
# .env.dev
EXPO_PUBLIC_API_URL=http://localhost:3000
EXPO_PUBLIC_APP_NAME=TextMe (Dev)
EXPO_PUBLIC_ENV=development

# .env.stage
EXPO_PUBLIC_API_URL=https://api-stage.textme.app
EXPO_PUBLIC_APP_NAME=TextMe (Stage)
EXPO_PUBLIC_ENV=staging

# .env.prod
EXPO_PUBLIC_API_URL=https://api.textme.app
EXPO_PUBLIC_APP_NAME=TextMe
EXPO_PUBLIC_ENV=production
```

## 🔐 Important Security Notes

1. **Environment files are pre-created** with example values
2. **Update them with your actual values** - Don't commit sensitive data!
3. **Different secrets per environment** - Never reuse secrets
4. **Files are gitignored** - `.env.dev`, `.env.stage`, `.env.prod` won't be committed
5. **Share securely** - Send environment files to team members via encrypted channels

## 📊 Environment Comparison Table

| Feature | Development | Staging | Production |
|---------|------------|---------|------------|
| **API URL** | localhost:3000 | api-stage.textme.app | api.textme.app |
| **Database** | Local/Dev DB | Staging DB | Production DB |
| **Debug Logging** | Verbose | Normal | Minimal |
| **Source Maps** | Yes | Yes | No |
| **Hot Reload** | Yes | Yes | No |
| **Optimizations** | Minimal | Moderate | Maximum |

## 🎯 Common Use Cases

### Use Case 1: Local Development
```bash
npm start
# All apps use .env.dev (localhost:3000)
```

### Use Case 2: Test Against Staging Backend
```bash
npm run dev:admin:stage
# Admin connects to staging API
```

### Use Case 3: Deploy to Production
```bash
npm run build:api:prod
npm run build:admin:prod
# Builds with production config
```

### Use Case 4: Mixed Environment Testing
```bash
# Run specific combinations
concurrently "npm run dev:api:dev" "npm run dev:admin:stage"
```

## 📚 Documentation Files

1. **ENVIRONMENTS.md** - Comprehensive environment guide
2. **SCRIPTS.md** - All npm scripts reference
3. **SETUP.md** - Complete setup guide
4. **README.md** - Project overview

## ✅ Changes Committed & Pushed

All changes have been:
- ✅ Committed to git
- ✅ Pushed to GitHub: https://github.com/Kirollos98/chatting-app-workspace
- ✅ Environment files excluded from git (only examples committed)

## 🎯 Next Steps

1. **Update environment files** with your actual configuration:
   ```bash
   nano apps/text-me-api/.env.dev
   nano apps/text-me-api/.env.stage
   nano apps/text-me-api/.env.prod
   # ... and so on for other apps
   ```

2. **Try different environments**:
   ```bash
   npm run dev:api:stage
   ```

3. **Read the docs**:
   - [ENVIRONMENTS.md](ENVIRONMENTS.md) - Full environment guide
   - [SCRIPTS.md](SCRIPTS.md) - All available scripts

---

**🎉 You can now run each app with different environments! Try it:**
```bash
npm run dev:api:stage    # Run API in staging mode
npm run dev:all:prod     # Run all apps in production mode
```
