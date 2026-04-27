# Code Guidelines & Standards Template

Use this template for establishing coding standards, best practices, and project conventions.

## File Location
`docs/guidelines/<filename>.md`

## Template

```markdown
---
title: Code Style Guide
description: Coding standards and conventions for the project
sidebar_position: 1
---

# Code Style Guide

## Overview
This guide establishes coding standards to ensure consistency, maintainability, and code quality across the project.

## Core Principles
1. **Readability** — Code should be clear to team members
2. **Consistency** — Follow established patterns throughout project
3. **Maintainability** — Easy to debug, extend, and refactor
4. **Performance** — Optimize for production use cases

## Language-Specific Standards

### TypeScript

#### File Organization
```
src/
├── components/      # React components
├── stores/         # MobX stores
├── utils/          # Utility functions
├── lib/            # External integrations
├── types/          # Type definitions
└── constants/      # App constants
```

#### Naming Conventions
| Element | Pattern | Example |
|---------|---------|---------|
| Files | kebab-case | `auth-store.ts`, `user-profile.tsx` |
| Classes | PascalCase | `class AuthStore {}` |
| Functions | camelCase | `function getUserData() {}` |
| Constants | UPPER_SNAKE_CASE | `const API_TIMEOUT = 5000;` |
| Types | PascalCase | `type UserProfile = {}` |
| Interfaces | PascalCase | `interface IUser {}` |

#### Code Examples

**✅ Good: Clear naming and structure**
```typescript
// store.ts
import { makeAutoObservable } from 'mobx';
import type { User } from '@shared/types';

export class UserStore {
  user: User | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchUser(id: string) {
    this.isLoading = true;
    try {
      this.user = await apiClient.get(`/users/${id}`);
    } finally {
      this.isLoading = false;
    }
  }
}
```

**❌ Bad: Vague naming, unclear logic**
```typescript
class US {
  u = null;
  l = false;

  async fu(i) {
    this.l = true;
    this.u = await api(i);
    this.l = false;
  }
}
```

### React Components

#### Component Structure
```typescript
import { observer } from 'mobx-react-lite';
import type { FC } from 'react';
import { useUserStore } from '@stores/user.store';

interface UserProfileProps {
  userId: string;
}

export const UserProfile: FC<UserProfileProps> = observer(({ userId }) => {
  const { user, isLoading } = useUserStore();

  if (isLoading) return <LoadingSpinner />;
  if (!user) return <ErrorMessage />;

  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  );
});

UserProfile.displayName = 'UserProfile';
```

#### Guidelines
- Use functional components with hooks
- Use TypeScript for prop typing
- Wrap with `observer()` for MobX observables
- Keep components under 200 lines
- Extract complex logic to custom hooks

### MobX Stores

#### Store Template
```typescript
import { makeAutoObservable } from 'mobx';

export class FeatureStore {
  // Properties
  data: DataType[] = [];
  isLoading = false;
  error: Error | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Actions
  async loadData() {
    this.isLoading = true;
    try {
      this.data = await api.get('/data');
      this.error = null;
    } catch (err) {
      this.error = err as Error;
    } finally {
      this.isLoading = false;
    }
  }

  // Computed
  get isEmpty() {
    return this.data.length === 0;
  }

  get displayData() {
    return this.data.filter(item => item.isActive);
  }
}
```

#### Guidelines
- Use `makeAutoObservable()` for automatic observable setup
- Keep stores focused (one responsibility)
- Separate UI state from business logic
- Use computed values for derived state
- Handle errors explicitly

## Testing Standards

### Unit Tests
```typescript
describe('UserStore', () => {
  it('should fetch user data', async () => {
    const store = new UserStore();
    await store.fetchUser('123');
    
    expect(store.user).toBeDefined();
    expect(store.isLoading).toBe(false);
  });
});
```

### Integration Tests
```typescript
describe('User API Integration', () => {
  it('should create and fetch user', async () => {
    const response = await api.post('/users', { name: 'John' });
    const user = await api.get(`/users/${response.id}`);
    
    expect(user.name).toBe('John');
  });
});
```

## API Design Standards

See [API Design Guidelines](./api-design.md) for REST conventions.

## Error Handling

```typescript
// ✅ Good: Explicit error handling
try {
  const data = await fetchData();
  return data;
} catch (error) {
  if (error instanceof NetworkError) {
    // Handle network errors
  } else if (error instanceof ValidationError) {
    // Handle validation errors
  } else {
    // Log unknown error
    logger.error('Unexpected error:', error);
  }
}
```

## Performance Guidelines

- [ ] Memoize expensive computations with `@computed`
- [ ] Use React.memo for heavy components
- [ ] Lazy load large components
- [ ] Optimize images and assets
- [ ] Monitor bundle size in CI

## Accessibility Standards

- [ ] Use semantic HTML elements
- [ ] Provide alt text for images
- [ ] Ensure keyboard navigation
- [ ] Test with screen readers
- [ ] Follow WCAG 2.1 guidelines

## Documentation Standards

- [ ] Add JSDoc comments to public functions
- [ ] Document complex algorithms
- [ ] Include examples in README files
- [ ] Keep documentation up to date
- [ ] Link related docs

## Code Review Checklist

- [ ] Code follows naming conventions
- [ ] No console.log() statements in production code
- [ ] Error handling is explicit
- [ ] Types are properly defined
- [ ] Tests are included
- [ ] No hardcoded values (use constants)
- [ ] Performance optimizations applied where needed

## Tools & Enforcement

- **Linter**: ESLint with strict rules
- **Formatter**: Prettier (auto-format on save)
- **Type Check**: TypeScript strict mode
- **Tests**: Jest/Vitest required for PRs

```bash
# Run all checks
npm run lint
npm run type-check
npm run test
```

## Related Documentation
- [Architecture Overview](../architecture/index.md)
- [API Design Guidelines](./api-design.md)
- [State Management with MobX](./state-management.md)
```

## Best Practices

1. **Provide examples** — Show good and bad patterns
2. **Keep it practical** — Focus on what team follows
3. **Link standards** — Reference external guides where relevant
4. **Include tools** — Document linters, formatters, type checking
5. **Make enforceable** — Include PR checklist
6. **Update regularly** — Sync with team decisions
