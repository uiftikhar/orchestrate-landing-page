# Design System Documentation

A comprehensive, production-ready design system built with Next.js, TypeScript, and Tailwind CSS, based on the Framer project design tokens.

## Table of Contents

- [Installation](#installation)
- [Design Tokens](#design-tokens)
- [Typography](#typography)
- [Color System](#color-system)
- [Components](#components)
- [Layout System](#layout-system)
- [Best Practices](#best-practices)

---

## Installation

The design system is already integrated into this Next.js project. To use components:

```typescript
import { Button, Card, Heading, Text } from "@/components/ui";
```

---

## Design Tokens

### Color Scale

All colors are available as CSS custom properties and can be used throughout your application.

#### Gray Scale
- `--gray-0` to `--gray-950` (12 shades)
- Semantic: `--text-primary`, `--text-secondary`, `--text-tertiary`
- Background: `--background-default`, `--background-neutral`

#### Brand Colors
- **Purple**: `--purple-50` to `--purple-950`
- **Green**: `--green-50` to `--green-950`
- **Red**: `--red-50` to `--red-950`

#### Alpha Values
- Standard: `--alpha-50` to `--alpha-950`
- Inverted: `--alpha-inverted-50` to `--alpha-inverted-950`

### Spacing Scale

Based on 4px/0.25rem increments:

```css
--space-1: 0.25rem   /* 4px */
--space-2: 0.5rem    /* 8px */
--space-3: 0.75rem   /* 12px */
--space-4: 1rem      /* 16px */
--space-6: 1.5rem    /* 24px */
--space-8: 2rem      /* 32px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
--space-20: 5rem     /* 80px */
--space-24: 6rem     /* 96px */
--space-32: 8rem     /* 128px */
```

### Typography Scale

```css
--text-xs: 0.75rem      /* 12px */
--text-sm: 0.875rem     /* 14px */
--text-base: 1rem       /* 16px */
--text-lg: 1.125rem     /* 18px */
--text-xl: 1.25rem      /* 20px */
--text-2xl: 1.5rem      /* 24px */
--text-3xl: 1.875rem    /* 30px */
--text-4xl: 2.25rem     /* 36px */
--text-5xl: 3rem        /* 48px */
--text-6xl: 3.75rem     /* 60px */
--text-7xl: 4.5rem      /* 72px */
--text-8xl: 6rem        /* 96px */
```

### Font Weights

```css
--font-light: 300
--font-normal: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
--font-extrabold: 800
--font-black: 900
```

---

## Typography

### Font Family

The design system uses **Inter** as the primary typeface, loaded from local font files for optimal performance.

### Heading Component

```typescript
import { Heading } from "@/components/ui";

<Heading as="h1">Display Large</Heading>
<Heading as="h2" size="h3">Custom Size</Heading>
<Heading as="h3" weight="semibold" align="center">
  Centered Heading
</Heading>
```

**Props:**
- `as`: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" (default: "h2")
- `size`: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" (visual size)
- `weight`: "medium" | "semibold" | "bold" | "extrabold"
- `variant`: "primary" | "secondary" | "inverted-primary" | "inverted-secondary"
- `align`: "left" | "center" | "right"
- `tracking`: "tighter" | "tight" | "normal" | "wide"

### Text Component

```typescript
import { Text } from "@/components/ui";

<Text>Default paragraph text</Text>
<Text as="span" size="lg" weight="medium">
  Large inline text
</Text>
<Text variant="secondary" italic>
  Secondary italic text
</Text>
```

**Props:**
- `as`: "p" | "span" | "div" | "label" | "small"
- `size`: "xs" | "sm" | "base" | "lg" | "xl" | "2xl"
- `weight`: "light" | "normal" | "medium" | "semibold" | "bold"
- `variant`: "primary" | "secondary" | "tertiary" | "inverted-*"
- `align`: "left" | "center" | "right"
- `italic`: boolean

---

## Color System

### Usage in Components

Use semantic color classes for text:

```tsx
<div className="text-primary">Primary text color</div>
<div className="text-secondary">Secondary text color</div>
<div className="text-tertiary">Tertiary text color</div>
```

Use CSS variables for custom styling:

```tsx
<div style={{ color: "var(--purple-600)" }}>Purple text</div>
<div style={{ backgroundColor: "var(--green-100)" }}>Green background</div>
```

### Dark Mode

Dark mode is automatically supported through CSS media queries:

```css
@media (prefers-color-scheme: dark) {
  /* Dark mode styles */
}
```

All semantic colors automatically adjust for dark mode.

---

## Components

### Button

A flexible button component with multiple variants and sizes.

```typescript
import { Button } from "@/components/ui";

<Button variant="primary" size="lg">
  Primary Button
</Button>

<Button variant="outline" size="md" isLoading>
  Loading...
</Button>

<Button variant="ghost" fullWidth>
  Full Width Button
</Button>
```

**Props:**
- `variant`: "primary" | "secondary" | "outline" | "ghost" | "link"
- `size`: "sm" | "md" | "lg" | "xl"
- `fullWidth`: boolean
- `isLoading`: boolean
- `leftIcon`: ReactNode
- `rightIcon`: ReactNode

### Card

Versatile card component for displaying content.

```typescript
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui";

<Card variant="elevated" padding="lg">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main card content</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline">Action</Button>
  </CardFooter>
</Card>
```

**Props:**
- `variant`: "default" | "outlined" | "elevated" | "ghost"
- `padding`: "none" | "sm" | "md" | "lg" | "xl"
- `interactive`: boolean (adds hover effects)

### Badge

Small labels for status indicators.

```typescript
import { Badge } from "@/components/ui";

<Badge variant="success">Active</Badge>
<Badge variant="error" size="sm">Error</Badge>
<Badge variant="outline">Draft</Badge>
```

**Props:**
- `variant`: "default" | "primary" | "secondary" | "success" | "warning" | "error" | "outline"
- `size`: "sm" | "md" | "lg"

### Input

Text input component with various states.

```typescript
import { Input } from "@/components/ui";

<Input
  placeholder="Enter text..."
  inputSize="md"
/>

<Input
  type="email"
  error
  placeholder="Email address"
/>

<Input
  leftIcon={<SearchIcon />}
  placeholder="Search..."
/>
```

**Props:**
- `inputSize`: "sm" | "md" | "lg"
- `error`: boolean
- `leftIcon`: ReactNode
- `rightIcon`: ReactNode

### Textarea

Multi-line text input component.

```typescript
import { Textarea } from "@/components/ui";

<Textarea
  placeholder="Enter message..."
  textareaSize="md"
  rows={5}
/>
```

**Props:**
- `textareaSize`: "sm" | "md" | "lg"
- `error`: boolean

---

## Layout System

### Container

Centered container with responsive padding.

```typescript
import { Container } from "@/components/ui";

<Container size="default">
  {/* Content with max-width: 1280px */}
</Container>

<Container size="narrow" padding="lg">
  {/* Narrow container with large padding */}
</Container>
```

**Props:**
- `size`: "default" (1280px) | "narrow" (960px) | "wide" (1536px) | "full"
- `padding`: "none" | "sm" | "md" | "lg" | "xl"

### Section

Full-width section wrapper with background and spacing options.

```typescript
import { Section } from "@/components/ui";

<Section background="gradient" spacing="xl">
  {/* Section content */}
</Section>

<Section background="dark" spacing="2xl">
  {/* Dark section with extra spacing */}
</Section>
```

**Props:**
- `background`: "default" | "neutral" | "dark" | "gradient"
- `spacing`: "none" | "sm" | "md" | "lg" | "xl" | "2xl"

---

## Best Practices

### 1. Use Semantic Tokens

Instead of using raw colors, use semantic tokens:

```typescript
// ✅ Good
<Text variant="secondary">Secondary text</Text>
<div className="text-primary">Primary text</div>

// ❌ Avoid
<div style={{ color: "rgb(10, 10, 10)" }}>Text</div>
```

### 2. Responsive Typography

All heading components use `clamp()` for responsive sizing by default. For custom responsive text:

```tsx
<Heading as="h1">
  {/* Automatically responsive */}
  Responsive Heading
</Heading>
```

### 3. Consistent Spacing

Use the spacing scale for consistent layouts:

```tsx
<div className="space-y-6">
  <Card />
  <Card />
  <Card />
</div>
```

### 4. Accessible Components

All components follow accessibility best practices:

```tsx
<Button disabled>Disabled Button</Button>

<Input
  id="email"
  aria-label="Email address"
  aria-describedby="email-error"
/>
```

### 5. Dark Mode

Components automatically support dark mode. Test your layouts in both modes:

```tsx
<div className="bg-white dark:bg-gray-950">
  <Text>Adapts to dark mode</Text>
</div>
```

### 6. Component Composition

Build complex UIs by composing simple components:

```tsx
<Section background="neutral">
  <Container>
    <Card interactive>
      <CardHeader>
        <Badge variant="primary">New</Badge>
        <CardTitle>Feature Title</CardTitle>
        <CardDescription>Feature description</CardDescription>
      </CardHeader>
      <CardContent>
        <Text variant="secondary">Content details...</Text>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Learn More</Button>
      </CardFooter>
    </Card>
  </Container>
</Section>
```

---

## Customization

### Extending Components

To create custom variants, extend the base components:

```typescript
import { Button, ButtonProps } from "@/components/ui";

export function IconButton({ children, ...props }: ButtonProps) {
  return (
    <Button {...props} className="aspect-square p-0">
      {children}
    </Button>
  );
}
```

### Adding Custom Colors

Add new colors to `globals.css`:

```css
:root {
  --custom-blue-500: rgb(59, 130, 246);
}
```

### Theme Customization

Modify design tokens in `globals.css` to match your brand:

```css
:root {
  --purple-500: rgb(139, 92, 246); /* Your brand color */
  --text-primary: rgb(10, 10, 10); /* Primary text */
}
```

---

## Performance

- **Local Fonts**: Inter font is loaded locally for optimal performance
- **CSS Variables**: Design tokens use CSS custom properties for efficient updates
- **Tree Shaking**: Import only the components you need
- **No Runtime CSS**: All styles are generated at build time with Tailwind

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

---

## Contributing

When adding new components:

1. Follow the existing component patterns
2. Use TypeScript for type safety
3. Include all relevant props with proper types
4. Support dark mode
5. Add accessibility attributes
6. Document your component

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Inter Font](https://rsms.me/inter/)
- [WAI-ARIA Practices](https://www.w3.org/WAI/ARIA/apg/)

