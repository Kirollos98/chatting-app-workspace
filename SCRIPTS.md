# NPM Scripts Reference

This document lists all available npm scripts for the TextMe workspace.

> 💡 **New!** Environment-specific scripts available. See [ENVIRONMENTS.md](ENVIRONMENTS.md) for detailed guide.

## 🚀 Development Scripts

### Start All Apps in Parallel

```bash
npm start
# or
npm run dev
```

This runs all three apps simultaneously in **development mode**:

- **API** (blue) - Backend API on port 3000
- **ADMIN** (green) - Admin dashboard on port 4200
- **MOBILE** (magenta) - Expo mobile app

### Start All Apps with Different Environments

```bash
npm run dev              # All apps in development mode (default)
npm run dev:all:stage    # All apps in staging mode
npm run dev:all:prod     # All apps in production mode
```

### Run Individual Apps

**Backend API**

```bash
npm run dev:api          # Development mode (.env.dev)
npm run dev:api:dev      # Development mode (.env.dev)
npm run dev:api:stage    # Staging mode (.env.stage)
npm run dev:api:prod     # Production mode (.env.prod)
```

**Admin Dashboard**

```bash
npm run dev:admin        # Development mode (.env.dev)
npm run dev:admin:dev    # Development mode (.env.dev)
npm run dev:admin:stage  # Staging mode (.env.stage)
npm run dev:admin:prod   # Production mode (.env.prod)
```

**Mobile App**

```bash
npm run dev:mobile
       # Development mode (.env.dev)
npm run dev:mobile:dev   # Development mode (.env.dev)
npm run dev:mobile:stage # Staging mode (.env.stage)
npm run dev:mobile:prod  # Production mode (.env.prod)
```

## 🏗️ Build Scripts

### Build All Apps

```bash
npm run build            # Builds all apps with production config
```

### Build Individual Apps with Environment

**Backend API**

```bash
npm run build:api        # Production mode (.env.prod)
npm run build:api:dev    # Development mode (.env.dev)
npm run build:api:stage  # Staging mode (.env.stage)
npm run build:api:prod   # Production mode (.env.prod)
```

**Admin Dashboard**

```bash
npm run build:admin        # Production mode (.env.prod)
npm run build:admin:dev    # Development mode (.env.dev)
npm run build:admin:stage  # Staging mode (.env.stage)
npm run build:admin:prod   # Production mode (.env.prod)
```

## 🧪 Test Scripts

### Test All Apps

```bash
npm test
```

### Test Individual Apps

**Backend API**

```bash
npm run test:api
```

**Admin Dashboard**

```bash
npm run test:admin
```

**Mobile App**

```bash
npm run test:mobile
```

## 🔍 Lint Scripts

### Lint All Apps

```bash
npm run lint
```

### Lint Individual Apps

**Backend API**

```bash
npm run lint:api
```

**Admin Dashboard**

```bash
npm run lint:admin
```

**Mobile App**

```bash
npm run lint:mobile
```

## 🛠️ Utility Scripts

### Format Code

```bash
npm run format
```

### View Project Graph

```bash
npm run graph
```

### Reset Nx Cache

```bash
npm run reset
```

## 📝 Script Colors

When running `npm run dev`, the output is color-coded:

- 🔵 **Blue** = Backend API (text-me-api)
- 🟢 **Green** = Admin Dashboard (text-me-admin)
- 🟣 **Magenta** = Mobile App (text-me)

## 💡 Tips

1. **Stop all running processes**: Press `Ctrl+C` once to stop all apps when using `npm run dev`

2. **Run specific combinations**: You can use concurrently directly for custom combinations:

   ```bash
   npx concurrently "npm run dev:api" "npm run dev:admin"
   ```

3. **View logs for specific app**: When running all apps, logs are prefixed with the app name

4. **Background processes**: If you need to run apps in separate terminals, use individual dev scripts
