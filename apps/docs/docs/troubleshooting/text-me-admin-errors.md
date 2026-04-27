# text-me-admin (Admin Dashboard) - Troubleshooting

This section documents common errors and their solutions for the **text-me-admin** application (React/Vite).

## Error History

### ✅ RESOLVED: Vite Native Binding Error

**Error:**
```
Error: Cannot find native binding. npm has a bug related to optional dependencies
Cannot find module '@rolldown/binding-darwin-arm64'
```

**Root Cause:** Vite 8.0.10 requires Node.js 20.19+ or 22.12+, but the system was running Node.js 21.7.1 (not officially supported).

**Solution Applied:**

Downgraded to Vite 5.4.21 for better Node.js compatibility:

| Package | Before | After | Reason |
|---------|--------|-------|--------|
| vite | 8.0.10 | 5.4.21 | Compatible with Node.js 21.x |
| @vitejs/plugin-react | 5.x | 4.7.0 | Matches Vite 5.x |
| tailwindcss | 4.2.4 | 3.4.18 | v4 has breaking PostCSS changes |

**Why Vite 5.x?**
- ✅ Compatible with Node.js 18.x, 20.x, 21.x, and 22.x
- ✅ Production-ready, battle-tested version
- ✅ Fast performance (ready in less than 350ms)
- ✅ All modern features (HMR, ESM, etc.)

**Verification:**
```bash
# Development server
npx nx run text-me-admin:dev:dev
# ✅ VITE v5.4.21 ready in 327 ms

# Production build
npx nx run text-me-admin:build:prod
# ✅ built in 1.16s
```

**Future Upgrade Path:**

To upgrade to Vite 8 in the future:
1. Upgrade Node.js to 22 LTS: `nvm install 22 && nvm use 22`
2. Upgrade Vite: `npm install vite@latest @vitejs/plugin-react@latest --save-dev --legacy-peer-deps`
3. Test thoroughly

## Common Issues

### Peer Dependencies Warning

When installing new packages, always use the `--legacy-peer-deps` flag:

```bash
npm install PACKAGE_NAME --legacy-peer-deps
```

This prevents peer dependency conflicts in the monorepo.

### Build & Development

**Issue:** Vite cache causing stale builds

**Solution:**
```bash
rm -rf node_modules/.vite
npx nx run text-me-admin:dev:dev
```

**Issue:** Dependencies not installing

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Runtime Errors

**Issue:** Environment variables not loading

**Solution:**
1. Ensure your `.env` file exists: `cp apps/text-me-admin/.env.example apps/text-me-admin/.env`
2. All Vite environment variables must be prefixed with `VITE_`
3. Restart the dev server after changing .env files

## Performance Metrics (Reference)

| Metric | Value |
|--------|-------|
| Dev server start | 87-327ms |
| HMR update | less than 50ms |
| Production build | 1.16s |
| Bundle size (gzipped) | 83.17 KB |

## Tips

- Clear Vite cache if builds fail: `rm -rf node_modules/.vite`
- Check browser console for client-side errors
- Verify your environment variables are properly configured
- Always use `--legacy-peer-deps` when installing packages
