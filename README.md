# Landing Page - Next.js Design System

A modern, production-ready landing page built with Next.js 16, TypeScript, and a comprehensive design system based on Framer design tokens.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
landing-page/
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Main page (design system showcase)
│   └── globals.css         # Global styles & design tokens
├── components/
│   └── ui/                 # Reusable UI components
│       ├── Text.tsx
│       ├── Heading.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       ├── Section.tsx
│       ├── Badge.tsx
│       ├── Input.tsx
│       ├── Textarea.tsx
│       └── index.ts        # Component exports
├── lib/
│   └── utils.ts            # Utility functions
├── assets/
│   └── fonts/
│       └── inter/          # Inter font files (local)
└── DESIGN_SYSTEM.md        # Complete design system docs
```

## 🎨 Design System

This project includes a comprehensive design system with:

- **Design Tokens**: Colors, typography, spacing, shadows, and more
- **Typography System**: Responsive headings and text components
- **Color System**: Full color palette with semantic naming
- **UI Components**: Button, Card, Badge, Input, Textarea
- **Layout Components**: Container, Section
- **Dark Mode Support**: Automatic theme switching
- **Accessibility**: WCAG compliant components

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for complete documentation.

## 🧩 Component Usage

### Basic Example

```tsx
import { 
  Container, 
  Section, 
  Heading, 
  Text, 
  Button, 
  Card 
} from "@/components/ui";

export default function Page() {
  return (
    <Section background="gradient" spacing="xl">
      <Container>
        <Heading as="h1" align="center">
          Welcome to Our Platform
        </Heading>
        <Text size="lg" variant="secondary" align="center">
          Build amazing things with our design system
        </Text>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </Container>
    </Section>
  );
}
```

### Card Example

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui";

<Card variant="elevated" padding="lg">
  <CardHeader>
    <CardTitle>Feature Title</CardTitle>
    <CardDescription>Feature description</CardDescription>
  </CardHeader>
  <CardContent>
    <Text>Detailed content goes here...</Text>
  </CardContent>
</Card>
```

## 🎯 Key Features

### 1. Local Font Loading
Inter font is loaded from local files for optimal performance and GDPR compliance.

### 2. CSS Custom Properties
All design tokens are available as CSS variables:

```css
:root {
  --gray-950: rgb(10, 10, 10);
  --purple-500: rgb(139, 92, 246);
  --space-4: 1rem;
  --text-xl: 1.25rem;
}
```

### 3. TypeScript Support
Full TypeScript support with proper type definitions for all components.

### 4. Responsive Design
All components are responsive out of the box with mobile-first approach.

### 5. Dark Mode
Automatic dark mode support based on system preferences.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Font**: [Inter Variable](https://rsms.me/inter/)
- **Class Management**: [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge)

## 📦 Available Components

### Typography
- `<Heading />` - Semantic headings (h1-h6)
- `<Text />` - Paragraphs and inline text

### Layout
- `<Container />` - Responsive container
- `<Section />` - Full-width sections

### UI Components
- `<Button />` - Buttons with variants
- `<Card />` - Content cards
- `<Badge />` - Status badges
- `<Input />` - Text inputs
- `<Textarea />` - Multi-line inputs

## 🎨 Design Tokens

### Colors
- Gray scale (12 shades)
- Purple, Green, Red scales
- Alpha values for transparency
- Semantic colors (text-primary, text-secondary, etc.)

### Typography
- 12 font sizes (xs to 8xl)
- 7 font weights (light to black)
- Multiple line heights
- Letter spacing utilities

### Spacing
- 13 spacing values (0 to 32)
- Based on 4px/0.25rem increments

### Other Tokens
- Border radius (7 values)
- Shadows (6 levels)
- Transitions (4 speeds)
- Z-index scale

## 🚦 Development

### Adding New Components

1. Create component file in `components/ui/`
2. Use TypeScript for props interface
3. Export from `components/ui/index.ts`
4. Add to documentation

Example:

```tsx
// components/ui/NewComponent.tsx
import React from "react";
import { cn } from "@/lib/utils";

export interface NewComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "custom";
  children: React.ReactNode;
}

export const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
  ({ variant = "default", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("base-classes", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

NewComponent.displayName = "NewComponent";
```

### Customizing Styles

Modify design tokens in `app/globals.css`:

```css
:root {
  --purple-500: rgb(139, 92, 246); /* Change brand color */
  --font-sans: "Inter", sans-serif; /* Change font */
}
```

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

1. Follow the existing component patterns
2. Use TypeScript for all new components
3. Ensure components support dark mode
4. Add proper accessibility attributes
5. Document your changes

## 📄 License

This project is created for demonstration purposes.

## 🙏 Acknowledgments

- Design tokens based on Framer project
- Inter font by Rasmus Andersson
- Built with Next.js and Tailwind CSS

---

For detailed component documentation, see [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
