# General Troubleshooting

This section contains common issues and solutions that affect the entire workspace or are not specific to a particular application.

## Common Issues

### Workspace Issues

#### Peer Dependencies Conflicts

When installing dependencies in this monorepo, you may encounter peer dependency conflicts due to the mix of React Native (Expo), React (Admin), and Node.js (API) packages.

**Solution:**
Always use the `--legacy-peer-deps` flag when installing packages:

```bash
npm install PACKAGE_NAME --legacy-peer-deps
```

#### Node.js Version Compatibility

**Issue:** Some packages (like Vite 8) require specific Node.js versions.

**Current Setup:**
- ✅ Node.js 18.x - Supported
- ✅ Node.js 20.x - Supported  
- ✅ Node.js 21.x - Supported (current)
- ✅ Node.js 22.x - Supported

**Recommendation:** Use Node.js 20 LTS or 22 LTS for best compatibility.

#### Clean Install

If you encounter persistent issues:

```bash
# Remove dependencies and caches
rm -rf node_modules package-lock.json
rm -rf apps/*/node_modules
rm -rf .nx

# Reinstall
npm install --legacy-peer-deps

# Clear Nx cache
npx nx reset
```

## Environment Setup

### Creating Environment Files

All apps need their environment files:

```bash
# Backend API
cp apps/text-me-api/.env.example apps/text-me-api/.env

# Admin Dashboard
cp apps/text-me-admin/.env.example apps/text-me-admin/.env

# Mobile App
cp apps/text-me/.env.example apps/text-me/.env
```

### Environment Variable Loading

- **Backend (text-me-api):** Uses `dotenv`, variables defined in `.env`
- **Admin (text-me-admin):** Uses Vite, variables must be prefixed with `VITE_`
- **Mobile (text-me):** Uses Expo, variables must be prefixed with `EXPO_PUBLIC_`

## Tips

- Always ensure your dependencies are up to date: `npm install --legacy-peer-deps`
- Clear the Nx cache if you encounter build issues: `npx nx reset`
- Check the application-specific troubleshooting sections for app-related errors
- Use `npx nx reset` to clear all Nx caches
- Verify Node.js version: `node --version`
