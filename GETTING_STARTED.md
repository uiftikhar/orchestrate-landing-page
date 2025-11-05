# Getting Started

Welcome to your production-ready Next.js design system! This guide will help you get up and running quickly.

## ✅ What's Included

### 1. **Complete Design System**
- **Design Tokens**: All colors, typography, spacing from your Framer project
- **CSS Custom Properties**: Easy theming and customization
- **Dark Mode**: Automatic theme switching based on system preferences
- **Responsive**: Mobile-first design with breakpoint utilities

### 2. **Typography System**
- `<Heading />` - Semantic headings (h1-h6) with customizable visual appearance
- `<Text />` - Body text, labels, and inline text with size variants
- **Inter Font**: Loaded locally from `assets/fonts/inter/`
- **Responsive Sizing**: Uses CSS `clamp()` for fluid typography

### 3. **UI Component Library**
- `<Button />` - 5 variants, 4 sizes, loading states
- `<Card />` - 4 variants with Header, Title, Description, Content, Footer
- `<Badge />` - 7 variants, 3 sizes for status indicators
- `<Input />` - Text inputs with icons and error states
- `<Textarea />` - Multi-line text inputs

### 4. **Layout Components**
- `<Container />` - Centered containers (default, narrow, wide, full)
- `<Section />` - Full-width sections with background options

### 5. **Documentation**
- `README.md` - Quick start guide
- `DESIGN_SYSTEM.md` - Complete design system documentation
- `COMPONENTS.md` - Component quick reference with examples

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd /Users/umeriftikhar/hiq/example-unframer-app/next-js/landing-page
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - you'll see the design system showcase.

### 3. Start Building

Create a new page or edit `app/page.tsx`:

```tsx
import { Container, Section, Heading, Text, Button } from "@/components/ui";

export default function Page() {
  return (
    <Section background="gradient" spacing="xl">
      <Container>
        <Heading as="h1" align="center">
          Your Page Title
        </Heading>
        <Text size="lg" align="center" variant="secondary">
          Your page description
        </Text>
        <div className="flex justify-center gap-4">
          <Button variant="primary" size="lg">
            Primary Action
          </Button>
          <Button variant="outline" size="lg">
            Secondary Action
          </Button>
        </div>
      </Container>
    </Section>
  );
}
```

## 📁 File Structure

```
landing-page/
├── app/
│   ├── globals.css          ← Design tokens & global styles
│   ├── layout.tsx            ← Root layout with Inter font
│   └── page.tsx              ← Demo page (showcase)
│
├── components/
│   └── ui/
│       ├── Text.tsx          ← Text component
│       ├── Heading.tsx       ← Heading component
│       ├── Button.tsx        ← Button component
│       ├── Card.tsx          ← Card components
│       ├── Container.tsx     ← Container component
│       ├── Section.tsx       ← Section component
│       ├── Badge.tsx         ← Badge component
│       ├── Input.tsx         ← Input component
│       ├── Textarea.tsx      ← Textarea component
│       └── index.ts          ← Component exports
│
├── lib/
│   └── utils.ts              ← Utility functions (cn)
│
├── assets/
│   └── fonts/
│       └── inter/            ← Inter font files (local)
│
├── README.md                 ← Project overview
├── DESIGN_SYSTEM.md          ← Complete design system docs
├── COMPONENTS.md             ← Component quick reference
└── GETTING_STARTED.md        ← This file
```

## 🎨 Design Tokens

All design tokens from your Framer project are available as CSS custom properties:

### Colors
```css
/* Gray Scale */
--gray-0, --gray-50, --gray-100, ... --gray-950

/* Brand Colors */
--purple-50 to --purple-950
--green-50 to --green-950
--red-50 to --red-950

/* Semantic Colors */
--text-primary, --text-secondary, --text-tertiary
--background-default, --background-neutral
```

### Typography
```css
/* Font Sizes */
--text-xs (12px) to --text-8xl (96px)

/* Font Weights */
--font-light (300) to --font-black (900)

/* Line Heights */
--leading-none (1) to --leading-loose (2)
```

### Spacing
```css
--space-1 (4px) to --space-32 (128px)
```

## 🧩 Common Use Cases

### 1. Hero Section

```tsx
<Section background="gradient" spacing="2xl">
  <Container>
    <div className="text-center space-y-6">
      <Badge variant="primary">New Feature</Badge>
      <Heading as="h1">Your Hero Title</Heading>
      <Text size="xl" variant="secondary">
        Your hero description
      </Text>
      <Button variant="primary" size="lg">
        Get Started
      </Button>
    </div>
  </Container>
</Section>
```

### 2. Feature Grid

```tsx
<Section background="neutral" spacing="xl">
  <Container>
    <div className="grid md:grid-cols-3 gap-6">
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Feature 1</CardTitle>
          <CardDescription>Feature description</CardDescription>
        </CardHeader>
        <CardContent>
          <Text variant="secondary">Details...</Text>
        </CardContent>
      </Card>
      {/* More cards... */}
    </div>
  </Container>
</Section>
```

### 3. Form

```tsx
<Card variant="default" padding="lg">
  <div className="space-y-4">
    <div>
      <Text weight="medium">Email</Text>
      <Input type="email" placeholder="you@example.com" />
    </div>
    <div>
      <Text weight="medium">Message</Text>
      <Textarea placeholder="Your message..." />
    </div>
    <Button variant="primary" fullWidth>Submit</Button>
  </div>
</Card>
```

## 🎯 Key Features

### 1. Type-Safe Components
All components are built with TypeScript and have proper type definitions:

```tsx
import { ButtonProps } from "@/components/ui";

const CustomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

### 2. Flexible Styling
Components accept `className` for custom styling:

```tsx
<Button className="shadow-xl hover:shadow-2xl">
  Custom Styled Button
</Button>
```

### 3. Dark Mode Support
Automatic dark mode based on system preferences:

```tsx
// Components automatically support dark mode
<Card>Content adapts to dark mode</Card>

// Custom dark mode styles
<div className="bg-white dark:bg-gray-950">
  Custom dark mode
</div>
```

### 4. Responsive Design
All components are responsive out of the box:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Responsive grid */}
</div>
```

### 5. Accessibility
Components follow WCAG guidelines:

```tsx
<Button disabled>Disabled Button</Button>
<Input aria-label="Email address" />
```

## 🛠️ Customization

### Change Brand Colors

Edit `app/globals.css`:

```css
:root {
  --purple-500: rgb(139, 92, 246);  /* Your brand color */
  --text-primary: rgb(10, 10, 10);   /* Primary text */
}
```

### Add New Components

1. Create `components/ui/NewComponent.tsx`
2. Export from `components/ui/index.ts`
3. Use TypeScript for type safety

```tsx
// components/ui/NewComponent.tsx
import React from "react";
import { cn } from "@/lib/utils";

export interface NewComponentProps {
  variant?: "default" | "custom";
  children: React.ReactNode;
}

export const NewComponent = React.forwardRef<
  HTMLDivElement,
  NewComponentProps
>(({ variant = "default", className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("base-classes", className)} {...props}>
      {children}
    </div>
  );
});

NewComponent.displayName = "NewComponent";
```

### Extend Existing Components

```tsx
import { Button, ButtonProps } from "@/components/ui";

export function IconButton({ children, ...props }: ButtonProps) {
  return (
    <Button {...props} className="aspect-square p-2">
      {children}
    </Button>
  );
}
```

## 📚 Documentation

- **README.md**: Project overview and quick start
- **DESIGN_SYSTEM.md**: Complete design system documentation
- **COMPONENTS.md**: Component quick reference with examples

## 🔧 Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 💡 Tips

1. **Use Semantic HTML**: Choose the correct `as` prop for headings
2. **Consistent Spacing**: Use Tailwind spacing utilities (`space-y-4`, `gap-6`)
3. **Responsive First**: Design for mobile, then add tablet/desktop styles
4. **Accessibility**: Always add labels for form inputs
5. **Component Composition**: Build complex UIs by composing simple components

## 🎓 Next Steps

1. **Explore the Demo**: Check out `app/page.tsx` for component examples
2. **Read Documentation**: Review `DESIGN_SYSTEM.md` for complete details
3. **Build Your First Page**: Create a new route in `app/`
4. **Customize**: Adjust design tokens in `globals.css` to match your brand
5. **Add Components**: Extend the component library as needed

## 🤝 Need Help?

- Review the documentation files in this project
- Check component examples in `app/page.tsx`
- Refer to `COMPONENTS.md` for quick reference

---

Happy building! 🚀

