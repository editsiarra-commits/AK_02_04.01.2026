---
description: Create a new reusable component
---

# Create New Component

Guide for creating a new reusable component.

## Steps

1. Create a new file in the `components/` directory:
   - File name should be PascalCase (e.g., `Button.tsx`)

2. Use this template:
```tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
```

3. Import and use in your pages:
```tsx
import Button from '../components/Button';
```

## Notes
- Keep components small and focused
- Use TypeScript interfaces for props
- Make components reusable with props
