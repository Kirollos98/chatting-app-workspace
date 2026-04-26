# NPM Scripts Reference

This document lists all available npm scripts for the TextMe workspace.

## 🚀 Development Scripts

### Start All Apps in Parallel

```bash
npm start
# or
npm run dev
```

This runs all three apps simultaneously:

- **API** (blue) - Backend API on port 3000
- **ADMIN** (green) - Admin dashboard on port 4200
- **MOBILE** (magenta) - Expo mobile app

### Run Individual Apps

**Backend API**

```bash
npm run dev:api
# Equivalent to: npx nx serve text-me-api
```

**Admin Dashboard**

```bash
npm run dev:admin
# Equivalent to: npx nx serve text-me-admin
```

**Mobile App**

```bash
npm run dev:mobile
# Equivalent to: npx nx start text-me
```

## 🏗️ Build Scripts

### Build All Apps

```bash
npm run build
```

### Build Individual Apps

**Backend API**

```bash
npm run build:api
```

**Admin Dashboard**

```bash
npm run build:admin
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
