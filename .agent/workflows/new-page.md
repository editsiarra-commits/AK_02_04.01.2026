---
description: Create a new page component in the React app
---

# Create New Page

Guide for creating a new page component in this React + React Router project.

## Steps

1. Create a new file in the `pages/` directory:
   - File name should be PascalCase (e.g., `NewPage.tsx`)

2. Use this template for the new page:
```tsx
import React from 'react';

interface NewPageProps {
  // Add props if needed
}

const NewPage: React.FC<NewPageProps> = () => {
  return (
    <div className="min-h-screen">
      <h1>New Page</h1>
      {/* Add your content here */}
    </div>
  );
};

export default NewPage;
```

3. Add the route in `App.tsx`:
```tsx
import NewPage from './pages/NewPage';
// ...
<Route path="/new-page" element={<NewPage />} />
```

4. Add navigation link if needed in your navigation component

## Notes
- Follow the existing page patterns in the `pages/` directory
- Use Tailwind CSS for styling
- Remember to export the component as default
