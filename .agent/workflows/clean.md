---
description: Clean build artifacts and reinstall dependencies
---

# Clean Project

Remove build artifacts and node_modules, then reinstall fresh.

## Steps

1. Remove the dist folder:
```bash
rm -rf dist
```

2. Remove node_modules:
```bash
rm -rf node_modules
```

// turbo
3. Reinstall dependencies:
```bash
npm install
```

## Notes
- Use this when you encounter strange build issues
- This gives you a completely fresh environment
