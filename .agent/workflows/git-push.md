---
description: Commit and push changes to GitHub
---

# Git Push

Stage, commit, and push changes to the remote repository.

## Steps

1. Check the current status:
```bash
git status
```

2. Stage all changes:
```bash
git add .
```

3. Commit with a descriptive message:
```bash
git commit -m "Your commit message here"
```

4. Push to the remote repository:
```bash
git push
```

## Notes
- Always review `git status` before committing
- Use meaningful commit messages
- If pushing fails, you may need to `git pull` first
