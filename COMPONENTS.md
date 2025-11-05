# Component Quick Reference

Quick reference guide for all available components in the design system.

## Import

```typescript
import {
  // Typography
  Text,
  Heading,
  
  // Layout
  Container,
  Section,
  
  // UI
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Input,
  Textarea,
} from "@/components/ui";
```

---

## Typography Components

### Heading

**Purpose**: Semantic headings with customizable visual appearance

```tsx
// Basic usage
<Heading as="h1">Page Title</Heading>

// Custom size (visual vs semantic)
<Heading as="h1" size="h2">Smaller H1</Heading>

// With styling
<Heading 
  as="h2" 
  weight="semibold"
  align="center"
  tracking="tight"
  variant="primary"
>
  Centered Heading
</Heading>
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| as | h1-h6 | h2 | Semantic heading level |
| size | h1-h6 | matches `as` | Visual size |
| weight | medium\|semibold\|bold\|extrabold | bold | Font weight |
| variant | primary\|secondary\|inverted-primary\|inverted-secondary | primary | Text color |
| align | left\|center\|right | left | Text alignment |
| tracking | tighter\|tight\|normal\|wide | tight | Letter spacing |

### Text

**Purpose**: Body text, labels, and inline text elements

```tsx
// Basic paragraph
<Text>Default paragraph text</Text>

// Inline text
<Text as="span" size="lg" weight="medium">
  Inline text
</Text>

// Styled text
<Text 
  as="p"
  size="xl"
  weight="semibold"
  variant="secondary"
  align="center"
  italic
>
  Styled paragraph
</Text>
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| as | p\|span\|div\|label\|small | p | HTML element |
| size | xs\|sm\|base\|lg\|xl\|2xl | base | Text size |
| weight | light\|normal\|medium\|semibold\|bold | normal | Font weight |
| variant | primary\|secondary\|tertiary\|inverted-* | primary | Text color |
| align | left\|center\|right | left | Text alignment |
| italic | boolean | false | Italic style |

---

## Layout Components

### Container

**Purpose**: Centered container with max-width and responsive padding

```tsx
// Default container (1280px max-width)
<Container>
  Content
</Container>

// Narrow container (960px)
<Container size="narrow" padding="lg">
  Content
</Container>

// Full width container
<Container size="full" padding="none">
  Content
</Container>
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | default\|narrow\|wide\|full | default | Max width |
| padding | none\|sm\|md\|lg\|xl | md | Responsive padding |

**Sizes**:
- `default`: 1280px (7xl)
- `narrow`: 960px (4xl)
- `wide`: 1536px (2xl)
- `full`: 100%

### Section

**Purpose**: Full-width page sections with background and spacing

```tsx
// Basic section
<Section>
  Content
</Section>

// Styled section
<Section background="gradient" spacing="xl">
  <Container>
    Content
  </Container>
</Section>

// Dark section
<Section background="dark" spacing="2xl">
  <Container>
    Light text on dark background
  </Container>
</Section>
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| background | default\|neutral\|dark\|gradient | default | Background style |
| spacing | none\|sm\|md\|lg\|xl\|2xl | lg | Vertical padding |

---

## UI Components

### Button

**Purpose**: Interactive buttons for actions

```tsx
// Primary action
<Button variant="primary" size="lg">
  Get Started
</Button>

// With loading state
<Button variant="secondary" isLoading>
  Processing...
</Button>

// Full width
<Button variant="outline" fullWidth>
  Full Width Button
</Button>

// With icons
<Button 
  variant="primary"
  leftIcon={<Icon />}
  rightIcon={<ArrowIcon />}
>
  Button with Icons
</Button>

// Disabled
<Button disabled>
  Disabled Button
</Button>
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | primary\|secondary\|outline\|ghost\|link | primary | Visual style |
| size | sm\|md\|lg\|xl | md | Button size |
| fullWidth | boolean | false | Full width |
| isLoading | boolean | false | Loading state |
| leftIcon | ReactNode | - | Left icon |
| rightIcon | ReactNode | - | Right icon |
| disabled | boolean | false | Disabled state |

**Variants**:
- `primary`: Solid dark button (main CTA)
- `secondary`: Purple brand button
- `outline`: Border with transparent background
- `ghost`: Transparent with hover effect
- `link`: Text-only button

### Card

**Purpose**: Content containers with various styles

```tsx
// Basic card
<Card>
  <CardContent>
    Simple content
  </CardContent>
</Card>

// Full featured card
<Card variant="elevated" padding="lg">
  <CardHeader>
    <Badge variant="primary">New</Badge>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>
      Description of the card content
    </CardDescription>
  </CardHeader>
  <CardContent>
    <Text variant="secondary">
      Main card content goes here
    </Text>
  </CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">
      Learn More
    </Button>
  </CardFooter>
</Card>

// Interactive card
<Card variant="default" interactive>
  <CardContent>
    Clickable card with hover effects
  </CardContent>
</Card>
```

**Card Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | default\|outlined\|elevated\|ghost | default | Card style |
| padding | none\|sm\|md\|lg\|xl | md | Internal padding |
| interactive | boolean | false | Hover/click effects |

**Variants**:
- `default`: White background with border
- `outlined`: Transparent with thick border
- `elevated`: With shadow
- `ghost`: Subtle background color

**Sub-components**:
- `CardHeader`: Top section for title/description
- `CardTitle`: Heading (h3)
- `CardDescription`: Subtitle text
- `CardContent`: Main content area
- `CardFooter`: Bottom section with border

### Badge

**Purpose**: Small labels and status indicators

```tsx
// Status badges
<Badge variant="success">Active</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="warning">Warning</Badge>

// Different sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>

// Custom styling
<Badge variant="outline">
  Draft
</Badge>
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | default\|primary\|secondary\|success\|warning\|error\|outline | default | Badge style |
| size | sm\|md\|lg | md | Badge size |

### Input

**Purpose**: Text input fields

```tsx
// Basic input
<Input 
  placeholder="Enter text..."
  inputSize="md"
/>

// With label
<label htmlFor="email">
  <Text weight="medium">Email</Text>
</label>
<Input
  id="email"
  type="email"
  placeholder="you@example.com"
/>

// Error state
<Input
  error
  placeholder="This field has an error"
/>
<Text size="sm" className="text-red-600">
  Error message
</Text>

// With icons
<Input
  leftIcon={<SearchIcon />}
  placeholder="Search..."
/>

<Input
  rightIcon={<EyeIcon />}
  type="password"
  placeholder="Password"
/>
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| inputSize | sm\|md\|lg | md | Input size |
| error | boolean | false | Error state |
| leftIcon | ReactNode | - | Left icon |
| rightIcon | ReactNode | - | Right icon |

### Textarea

**Purpose**: Multi-line text input

```tsx
// Basic textarea
<Textarea
  placeholder="Enter message..."
  textareaSize="md"
/>

// With label and error
<label htmlFor="message">
  <Text weight="medium">Message</Text>
</label>
<Textarea
  id="message"
  placeholder="Type your message..."
  rows={5}
  error
/>
<Text size="sm" className="text-red-600">
  Message is too short
</Text>
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| textareaSize | sm\|md\|lg | md | Textarea size |
| error | boolean | false | Error state |

---

## Common Patterns

### Hero Section

```tsx
<Section background="gradient" spacing="2xl">
  <Container>
    <div className="text-center space-y-6">
      <Badge variant="primary">New Feature</Badge>
      <Heading as="h1">
        Welcome to Our Platform
      </Heading>
      <Text size="xl" variant="secondary" className="max-w-2xl mx-auto">
        Build amazing things with our comprehensive design system
      </Text>
      <div className="flex gap-4 justify-center">
        <Button variant="primary" size="lg">
          Get Started
        </Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </div>
    </div>
  </Container>
</Section>
```

### Feature Cards Grid

```tsx
<Section background="neutral" spacing="xl">
  <Container>
    <div className="space-y-8">
      <div className="text-center">
        <Heading as="h2">Features</Heading>
        <Text size="lg" variant="secondary">
          Everything you need to succeed
        </Text>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Card key={feature.id} variant="elevated">
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Text variant="secondary">{feature.details}</Text>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </Container>
</Section>
```

### Contact Form

```tsx
<Section background="default" spacing="xl">
  <Container size="narrow">
    <Card variant="default" padding="lg">
      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name">
            <Text weight="medium">Full Name</Text>
          </label>
          <Input
            id="name"
            placeholder="John Doe"
            inputSize="md"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email">
            <Text weight="medium">Email</Text>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            inputSize="md"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message">
            <Text weight="medium">Message</Text>
          </label>
          <Textarea
            id="message"
            placeholder="Tell us about your project..."
            textareaSize="md"
            rows={5}
          />
        </div>
        
        <Button variant="primary" size="lg" fullWidth>
          Send Message
        </Button>
      </form>
    </Card>
  </Container>
</Section>
```

### CTA Section

```tsx
<Section background="dark" spacing="xl">
  <Container>
    <div className="text-center space-y-6">
      <Heading as="h2" variant="inverted-primary">
        Ready to Get Started?
      </Heading>
      <Text size="lg" variant="inverted-secondary" className="max-w-2xl mx-auto">
        Join thousands of users who are already building amazing things
      </Text>
      <div className="flex gap-4 justify-center">
        <Button variant="primary" size="lg">
          Start Free Trial
        </Button>
        <Button variant="outline" size="lg">
          Contact Sales
        </Button>
      </div>
    </div>
  </Container>
</Section>
```

---

## Styling Tips

### Using Tailwind with Components

All components accept `className` prop for custom styling:

```tsx
<Button className="shadow-xl hover:shadow-2xl">
  Custom Button
</Button>

<Card className="border-2 border-purple-500">
  Custom Card
</Card>
```

### Spacing Utilities

Use Tailwind spacing utilities for consistent layouts:

```tsx
<div className="space-y-4">  {/* Vertical spacing */}
  <Card />
  <Card />
</div>

<div className="flex gap-6">  {/* Horizontal spacing */}
  <Button />
  <Button />
</div>
```

### Responsive Design

Use responsive prefixes for breakpoint-specific styles:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>

<Text className="text-base md:text-lg lg:text-xl">
  Responsive text size
</Text>
```

### Dark Mode

All components support dark mode automatically. Override with `dark:` prefix:

```tsx
<div className="bg-white dark:bg-gray-950">
  <Text className="text-gray-900 dark:text-white">
    Custom dark mode colors
  </Text>
</div>
```

---

For complete documentation, see [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)

