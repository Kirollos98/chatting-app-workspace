# Quick Reference: Where Do Docs Go?

## Decision Tree

```
Is it a fix or bug resolution for a specific app?
├─ YES → apps/<app-name>/ACTIVITY.md
└─ NO  → Continue...

Is it architecture, guidelines, or best practices?
├─ YES → docs/<category>/ + update README.md
└─ NO  → Continue...

Is it feature documentation?
├─ YES → docs/features/<feature>.md
└─ NO  → Continue...

Is it root-level setup/command docs?
├─ YES → docs/setup/ (migrate from root .md)
└─ NO  → Check with team
```

## Cheat Sheet

| Doc Type | Location | README Link? | ACTIVITY? |
|----------|----------|--------------|-----------|
| Bug fix | `apps/<app>/ACTIVITY.md` | No | N/A |
| Architecture | `docs/architecture/` | Yes | No |
| Code guidelines | `docs/guidelines/` | Yes | No |
| API design | `docs/guidelines/api-design.md` | Yes | No |
| Feature spec | `docs/features/` | Yes | No |
| Setup guide | `docs/setup/` | Yes | No |
| State mgmt pattern | `docs/guidelines/state-management.md` | Yes | No |

## Quick Commands

```bash
# View ACTIVITY.md in specific app
cat apps/text-me-admin/ACTIVITY.md

# Check if docs/ folder exists
ls -la docs/

# Create new guideline
touch docs/guidelines/my-guideline.md

# Update README with link
# Edit README.md and add: [My Guideline](./docs/guidelines/my-guideline.md)
```

## File Naming Conventions

- **ACTIVITY.md** — Fixed, unchanging name for app fix logs
- **Architecture files** — `system-design.md`, `entity-models.md`, `deployment.md`
- **Guideline files** — `code-style.md`, `api-design.md`, `state-management.md`
- **Feature files** — `onboarding-flow.md`, `payment-processing.md`
- **Setup files** — `getting-started.md`, `local-dev.md`, `ci-cd.md`

## Key Rules

1. ✅ **DO**: Put fixes in app ACTIVITY.md
2. ✅ **DO**: Put guidelines in docs/ + link from README
3. ✅ **DO**: Delete root .md files after migration to docs/
4. ✅ **DO**: Include frontmatter in Docusaurus files
5. ❌ **DON'T**: Create .md files at project root
6. ❌ **DON'T**: Mix app fixes with guidelines
7. ❌ **DON'T**: Forget to update README with doc links
