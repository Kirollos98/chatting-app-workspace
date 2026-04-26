# Mobile App (text-me) - Commands Reference

This document covers all available commands for the React Native Expo mobile app with different platforms and environments.

## Quick Reference

```bash
# Start Metro bundler (default: dev environment)
npx nx run text-me:start
npx nx run text-me:start:dev
npx nx run text-me:start:stage
npx nx run text-me:start:prod

# Start with Android emulator/device
npx nx run text-me:android
npx nx run text-me:android:dev
npx nx run text-me:android:stage
npx nx run text-me:android:prod

# Start with iOS simulator/device
npx nx run text-me:ios
npx nx run text-me:ios:dev
npx nx run text-me:ios:stage
npx nx run text-me:ios:prod

# Build native apps (requires EAS account)
npx nx run text-me:build-android
npx nx run text-me:build-android:dev
npx nx run text-me:build-android:stage
npx nx run text-me:build-android:prod

npx nx run text-me:build-ios
npx nx run text-me:build-ios:dev
npx nx run text-me:build-ios:stage
npx nx run text-me:build-ios:prod

# Run on physical devices with native builds
npx nx run text-me:run-android
npx nx run text-me:run-android:dev
npx nx run text-me:run-android:stage
npx nx run text-me:run-android:prod

npx nx run text-me:run-ios
npx nx run text-me:run-ios:dev
npx nx run text-me:run-ios:stage
npx nx run text-me:run-ios:prod

# Export for production
npx nx run text-me:export
npx nx run text-me:export:dev
npx nx run text-me:export:stage
npx nx run text-me:export:prod

# Testing and linting
npx nx test text-me
npx nx lint text-me
```

## NPM Scripts (Shortcuts)

For convenience, package.json includes shortcut scripts:

```bash
# Start commands
npm run dev:mobile              # Default (dev environment)
npm run dev:mobile:dev
npm run dev:mobile:stage
npm run dev:mobile:prod

# Android commands
npm run dev:mobile:android
npm run dev:mobile:android:dev
npm run dev:mobile:android:stage
npm run dev:mobile:android:prod

# iOS commands
npm run dev:mobile:ios
npm run dev:mobile:ios:dev
npm run dev:mobile:ios:stage
npm run dev:mobile:ios:prod
```

## Command Details

### `start` - Start Metro Bundler

Starts the Expo development server and Metro bundler. Use this for general development.

```bash
npx nx run text-me:start              # Uses .env.dev
npx nx run text-me:start:stage        # Uses .env.stage
npx nx run text-me:start:prod         # Uses .env.prod
```

**What it does:**

- Starts Metro bundler
- Shows QR code for Expo Go app
- Allows you to press `a` for Android, `i` for iOS
- Loads environment variables from respective .env file

**When to use:**

- Initial development
- When you want to choose platform after starting
- When using Expo Go app on physical devices

---

### `android` - Start with Android

Starts the development server and automatically opens on Android emulator or connected device.

```bash
npx nx run text-me:android            # Uses .env.dev
npx nx run text-me:android:stage      # Uses .env.stage
npx nx run text-me:android:prod       # Uses .env.prod
```

**Requirements:**

- Android Studio installed
- Android emulator running or device connected via ADB
- Expo Go app (for development builds)

**When to use:**

- Android-specific development
- Testing Android UI/UX
- Debugging Android-specific issues

---

### `ios` - Start with iOS

Starts the development server and automatically opens on iOS simulator or connected device.

```bash
npx nx run text-me:ios                # Uses .env.dev
npx nx run text-me:ios:stage          # Uses .env.stage
npx nx run text-me:ios:prod           # Uses .env.prod
```

**Requirements:**

- Xcode installed (macOS only)
- iOS simulator running or device connected
- Expo Go app (for development builds)

**When to use:**

- iOS-specific development
- Testing iOS UI/UX
- Debugging iOS-specific issues

---

### `run-android` / `run-ios` - Development Builds

Creates and runs development builds with native code on actual devices/emulators.

```bash
# Android
npx nx run text-me:run-android:dev
npx nx run text-me:run-android:stage
npx nx run text-me:run-android:prod

# iOS
npx nx run text-me:run-ios:dev
npx nx run text-me:run-ios:stage
npx nx run text-me:run-ios:prod
```

**When to use:**

- Testing native modules that don't work in Expo Go
- Custom native code integration
- Full app testing with native dependencies

**Note:** First run will take longer as it builds native code.

---

### `build-android` / `build-ios` - EAS Build

Creates production-ready builds using Expo Application Services (EAS).

```bash
# Android builds
npx nx run text-me:build-android:dev          # development profile
npx nx run text-me:build-android:stage        # preview profile
npx nx run text-me:build-android:prod         # production profile

# iOS builds
npx nx run text-me:build-ios:dev              # development profile
npx nx run text-me:build-ios:stage            # preview profile
npx nx run text-me:build-ios:prod             # production profile
```

**Requirements:**

- EAS account (sign up at expo.dev)
- EAS CLI configured (`npx eas-cli login`)
- Build profiles configured in `eas.json`

**Profiles:**

- `development`: Internal testing, debugging
- `preview`: Staging/QA testing, TestFlight/Internal Testing
- `production`: App Store/Play Store release

**When to use:**

- Creating APK/AAB for Android
- Creating IPA for iOS
- Submitting to app stores
- Sharing builds with testers

---

### `export` - Web Export

Exports the app for web deployment.

```bash
npx nx run text-me:export:dev
npx nx run text-me:export:stage
npx nx run text-me:export:prod
```

**Output:** Static files in `dist/` directory

**When to use:**

- Deploying to web hosting (Vercel, Netlify, etc.)
- Creating web version of the app
- Progressive Web App (PWA) deployment

---

## Environment Variables

Each environment uses its own `.env` file:

| Environment | File         | Usage                            |
| ----------- | ------------ | -------------------------------- |
| Development | `.env.dev`   | Local development, debugging     |
| Staging     | `.env.stage` | QA testing, integration testing  |
| Production  | `.env.prod`  | Production app, app store builds |

**Mobile Environment Variables** must be prefixed with `EXPO_PUBLIC_`:

```bash
# .env.dev example
EXPO_PUBLIC_API_URL=http://localhost:3000
EXPO_PUBLIC_APP_NAME=TextMe Dev
EXPO_PUBLIC_ENVIRONMENT=development
```

**Access in code:**

```typescript
const apiUrl = process.env.EXPO_PUBLIC_API_URL;
```

---

## Common Workflows

### Local Development

```bash
# Terminal 1: Start backend
npm run dev:api

# Terminal 2: Start mobile app
npm run dev:mobile

# Opens with QR code, scan with Expo Go app
```

### Android Development

```bash
# Start Android emulator first, then:
npm run dev:mobile:android
```

### iOS Development

```bash
# Start iOS simulator first, then:
npm run dev:mobile:ios
```

### Testing on Physical Device

```bash
# 1. Start the server
npm run dev:mobile

# 2. Install Expo Go from App Store/Play Store

# 3. Scan QR code with:
#    - iOS: Camera app
#    - Android: Expo Go app
```

### Building for App Stores

```bash
# 1. Configure EAS (first time only)
npx eas-cli login
npx eas build:configure

# 2. Build for production
npx nx run text-me:build-android:prod
npx nx run text-me:build-ios:prod

# 3. Wait for build to complete on EAS servers

# 4. Download and test the build

# 5. Submit to stores
npx eas submit --platform android
npx eas submit --platform ios
```

---

## Troubleshooting

### Metro bundler issues

```bash
# Clear cache and restart
npx expo start -c
```

### Android emulator not detected

```bash
# Check ADB devices
adb devices

# Restart ADB
adb kill-server
adb start-server
```

### iOS simulator not opening

```bash
# List available simulators
xcrun simctl list devices

# Open specific simulator
open -a Simulator
```

### Environment variables not updating

```bash
# Stop the server and clear cache
# Then restart
npx nx run text-me:start:dev -c
```

### Native module errors

```bash
# Rebuild native code
npm run dev:mobile
# Press 'r' to reload
# Or use run-android/run-ios for full native rebuild
```

---

## Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [React Native Documentation](https://reactnative.dev/)
