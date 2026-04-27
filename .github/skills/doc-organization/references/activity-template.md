# ACTIVITY.md Template

Use this template for logging fixes, issues, and resolutions in each app.

## File Location
`apps/<app-name>/ACTIVITY.md`

## Template

```markdown
# Activity & Fixes

## [YYYY-MM-DD] - Issue Title
**App**: <app-name>  
**Status**: Fixed ✅ | In Progress 🔄 | Blocked ❌  
**Priority**: Critical | High | Medium | Low  
**Author**: @username  

### Problem
Clear description of the issue, error message, or bug behavior.

### Root Cause
Explanation of why this happened.

### Solution
Step-by-step fix or workaround applied.

### Files Modified
- `src/components/ComponentName.tsx`
- `src/utils/helperFunction.ts`
- `package.json`

### Testing Done
- [ ] Unit tests pass
- [ ] Component renders correctly
- [ ] No console errors
- [ ] Tested in [browser/device/environment]

### Related Issues
- Closes #123
- Related to PR #456

---
```

## Best Practices

1. **Be specific** — Include error messages, stack traces, and steps to reproduce
2. **Link references** — Reference GitHub issues, PRs, or commits
3. **Document solutions** — Make future developers' lives easier
4. **Update status** — Mark as Fixed, In Progress, or Blocked
5. **Keep chronological** — Newest entries at top
6. **Use consistent format** — Follow template for readability
