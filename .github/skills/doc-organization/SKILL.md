---
name: doc-organization
description: 'Manage documentation across the workspace: route fixes to activity tabs, architecture/guidelines to docusaurus, and link from README. Use when creating docs, adding fixes, establishing code guidelines, or updating architecture.'
argument-hint: 'Type of documentation (fix, guideline, architecture, feature) and app name'
---

# Documentation Organization

## Overview

This skill ensures consistent documentation placement across the workspace:
- **Fixes to problems** → Activity tab for each app
- **Architecture/code guidelines/best practices** → Docusaurus documentation + README reference
- **Feature documentation** → Docusaurus with README link
- **Root documentation** → Converted to Docusaurus docs

## When to Use

Use this skill when:
- Creating new documentation files (instead of root .md files)
- Adding fix notes for problems/bugs in specific apps
- Establishing architecture or code guidelines
- Creating best practices documentation
- Setting up coding standards

## Documentation Types & Destinations

### 1. Problem Fixes
**Destination**: `ACTIVITY.md` in each app folder

**What goes here**:
- Bug fixes and solutions
- Troubleshooting steps
- Error resolutions
- Known issues and workarounds

**Example path**: `apps/text-me-admin/ACTIVITY.md`

**File format**:
```markdown
# Activity & Fixes

## [Date] - Issue Title
**App**: text-me-admin  
**Status**: Fixed ✅

### Problem
Description of the issue...

### Solution
Steps taken to resolve...

### Files Modified
- src/components/...
- src/utils/...

---
```

### 2. Architecture & Code Guidelines
**Destination**: Docusaurus docs + README reference

**What goes here**:
- System architecture diagrams
- Design patterns used
- Code style guidelines
- Project conventions
- Development workflows
- Database schema documentation
- API design standards

**Locations**:
- Write detailed docs in: `docs/` folder (root level, for Docusaurus)
- Reference from: `README.md` in root and each app
- Link pattern: `See [Architecture Guide](./docs/architecture/index.md)`

**File structure**:
```
docs/
├── architecture/
│   ├── index.md           # Overview
│   ├── system-design.md   # High-level diagram & flow
│   └── entity-models.md   # Data models
├── guidelines/
│   ├── code-style.md      # Coding standards
│   ├── state-management.md # MobX patterns
│   └── api-design.md      # API conventions
├── setup/
│   ├── monorepo-setup.md
│   └── local-dev.md
└── features/
    ├── onboarding-flow.md
    └── payment-processing.md
```

### 3. Feature Documentation
**Destination**: Docusaurus docs

**What goes here**:
- Feature specifications
- User workflows
- Integration guides
- API endpoint documentation

**File format**: `docs/features/<feature-name>.md`

### 4. Root-Level Documentation
**Current files to migrate to Docusaurus**:
- `SETUP.md` → `docs/setup/getting-started.md`
- `COMMANDS.md` → `docs/setup/commands.md`
- `ENVIRONMENTS.md` → `docs/setup/environments.md`
- `SCRIPTS.md` → `docs/setup/scripts.md`

**Action**: Delete root .md files after migration and update `README.md` with Docusaurus links.

## Step-by-Step Procedures

### Procedure A: Add a Fix to Activity Tab

**When**: Resolving a bug or problem in an app

1. Locate the app folder: `apps/<app-name>/`
2. Create or open `ACTIVITY.md`
3. Add entry with:
   - Date (ISO format: YYYY-MM-DD)
   - Issue title
   - Problem description
   - Solution/fix details
   - Files modified (relative paths)
4. Commit with message:
   ```
   docs(activity): [app-name] Fix issue title
   
   - Problem: ...
   - Solution: ...
   - Activity tracked in apps/<app-name>/ACTIVITY.md
   ```
5. No README update needed; this is internal tracking

**Example**:
```markdown
# Activity & Fixes - text-me-admin

## 2026-04-27 - Query Client Configuration Issue
**Status**: Fixed ✅

### Problem
Query client was not properly configured for production, causing cache conflicts between requests.

### Solution
Updated QueryClient instantiation with proper cache settings and timeouts.

### Files Modified
- src/lib/queryClient.ts
- src/main.tsx

---
```

### Procedure B: Create Architecture/Guidelines Documentation

**When**: Establishing project standards, documenting design decisions

1. Determine category:
   - Architecture → `docs/architecture/`
   - Guidelines → `docs/guidelines/`
   - Setup → `docs/setup/`
   - Features → `docs/features/`

2. Create markdown file: `docs/<category>/<filename>.md`

3. Add frontmatter (Docusaurus-friendly):
   ```yaml
   ---
   title: Page Title
   description: Brief description for SEO
   sidebar_position: 1
   ---
   ```

4. Write content with:
   - Clear headings (use H1 for title, H2 for sections)
   - Code examples where applicable
   - Links to related docs
   - Visual diagrams if helpful (use Mermaid or ASCII)

5. **Update README.md** with reference:
   ```markdown
   ### Architecture & Guidelines
   - [System Architecture](./docs/architecture/system-design.md) - High-level overview
   - [Code Style Guide](./docs/guidelines/code-style.md) - Coding standards
   - See [full documentation](./docs/) for more resources
   ```

6. If migrating from root .md file:
   - Copy content to `docs/`
   - Delete root .md file
   - Update all internal links in README/docs

7. Commit with message:
   ```
   docs: Add architecture/guidelines documentation
   
   - Created docs/architecture/system-design.md
   - Updated README.md with Docusaurus reference
   - Removed ARCHITECTURE.md from root
   ```

### Procedure C: Link Docusaurus Docs from App README

**When**: App-specific README should reference shared architectural docs

In each app's `README.md` or `COMMANDS.md`:

```markdown
## Architecture & Guidelines
See the [root documentation](../../docs/) for:
- [System Architecture](../../docs/architecture/system-design.md)
- [Code Style Guide](../../docs/guidelines/code-style.md)
- [API Design Standards](../../docs/guidelines/api-design.md)

## Setup
Follow [local development setup](../../docs/setup/local-dev.md) for environment configuration.
```

### Procedure D: Docusaurus Configuration (One-time)

If not already setup:

1. Install Docusaurus dependencies (see `docs/setup/getting-started.md`)
2. Create `docusaurus.config.js` at root
3. Configure sidebars in `sidebars.js`
4. Add build script to `package.json`:
   ```json
   "scripts": {
     "docs:build": "docusaurus build",
     "docs:serve": "docusaurus serve"
   }
   ```
5. Deploy via CI/CD pipeline

## Documentation Checklist

- [ ] Type identified (fix/guideline/architecture/feature)
- [ ] Correct destination folder selected
- [ ] File created with proper naming convention
- [ ] Content formatted with clear headings and structure
- [ ] If relevant: ACTIVITY.md updated for tracking
- [ ] If relevant: README.md updated with Docusaurus link
- [ ] Commit message includes doc reference
- [ ] Root .md files migrated to `docs/` if applicable
- [ ] No orphaned .md files at root (except README, nx.json config files)

## Folder Structure Example

```
chatting-app/
├── README.md                    ← Links to ./docs/
├── docs/                        ← Docusaurus source
│   ├── architecture/
│   │   ├── index.md
│   │   └── system-design.md
│   ├── guidelines/
│   │   ├── code-style.md
│   │   ├── state-management.md
│   │   └── api-design.md
│   ├── setup/
│   │   ├── getting-started.md
│   │   └── local-dev.md
│   └── features/
│       └── onboarding-flow.md
├── apps/
│   ├── text-me/
│   │   ├── README.md
│   │   └── ACTIVITY.md          ← Fixes & issues
│   ├── text-me-admin/
│   │   ├── README.md
│   │   └── ACTIVITY.md          ← Fixes & issues
│   ├── text-me-api/
│   │   ├── README.md
│   │   └── ACTIVITY.md          ← Fixes & issues
│   └── text-me-api-e2e/
│       └── ACTIVITY.md          ← Fixes & issues
└── packages/
    ├── shared-types/
    │   └── ACTIVITY.md
    └── shared-utils/
        └── ACTIVITY.md
```

## Common Patterns

### Pattern 1: Fix Log Template
See [./references/activity-template.md](./references/activity-template.md)

### Pattern 2: Architecture Doc Template
See [./references/architecture-template.md](./references/architecture-template.md)

### Pattern 3: Guideline Doc Template
See [./references/guideline-template.md](./references/guideline-template.md)

## Key Rules

1. **No root .md files** (except README.md) — migrate to `docs/`
2. **Every fix** goes to `ACTIVITY.md` in that app
3. **Every guideline/architecture doc** links from README.md
4. **Each app has ACTIVITY.md** for internal tracking
5. **Docusaurus** is single source of truth for guidelines
6. **Commit messages** reference the documentation file
