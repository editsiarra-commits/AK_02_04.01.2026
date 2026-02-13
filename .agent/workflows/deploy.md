---
description: Deploy the project to Firebase Hosting
---

# Deploy to Firebase Hosting

Build and deploy the project to Firebase Hosting.

## Steps

// turbo
1. First, build the project:
```bash
npm run build
```

2. Deploy to Firebase Hosting:
```bash
firebase deploy --only hosting
```

## Notes
- Make sure you're logged into Firebase: `firebase login`
- The deployment URL will be shown after successful deploy
- You can check the project at: https://console.firebase.google.com
