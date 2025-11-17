import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const blogPosts = [
  {
    title: "Building Scalable React Applications with Redux Toolkit",
    excerpt: "Learn how to manage complex state in React applications using Redux Toolkit. This guide covers best practices, performance optimization, and real-world examples from production apps.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "Redux", "State Management"],
    content: `
## Introduction

Redux Toolkit has become the standard way to write Redux logic. It simplifies the setup and reduces boilerplate code significantly. In this article, I'll share insights from building production applications with Redux Toolkit.

## Why Redux Toolkit?

After working on multiple React projects, I found Redux Toolkit solves several pain points:

- **Reduced Boilerplate**: No more action types, action creators, and reducers spread across multiple files
- **Built-in Best Practices**: Includes Redux Thunk and Immer by default
- **Better DevTools Integration**: Enhanced debugging capabilities
- **TypeScript Support**: Excellent type inference out of the box

## Setting Up Redux Toolkit

First, install the required packages:

\`\`\`bash
npm install @reduxjs/toolkit react-redux
\`\`\`

### Creating a Store

The \`configureStore\` function simplifies store setup:

\`\`\`javascript
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
\`\`\`

## Creating Slices

Slices contain the reducer logic and actions for a specific feature:

\`\`\`javascript
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, loading: false },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
\`\`\`

## Async Operations with createAsyncThunk

For API calls, use \`createAsyncThunk\`:

\`\`\`javascript
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId) => {
    const response = await fetch(\`/api/users/\${userId}\`);
    return response.json();
  }
);
\`\`\`

## Best Practices from Production

### 1. Feature-Based Organization
Organize your Redux logic by features, not by file type:

\`\`\`
src/
  features/
    user/
      userSlice.js
      userAPI.js
    products/
      productsSlice.js
      productsAPI.js
\`\`\`

### 2. Use RTK Query for API Calls
For complex API interactions, RTK Query provides powerful features:

- Automatic caching
- Request deduplication
- Polling
- Optimistic updates

### 3. Normalize State Shape
Keep your state flat and normalized to avoid nested updates and improve performance.

## Performance Optimization Tips

1. **Use Memoized Selectors**: Leverage \`createSelector\` from Reselect
2. **Avoid Unnecessary Re-renders**: Use \`React.memo\` and proper selector design
3. **Split Large Slices**: Keep slices focused and manageable
4. **Lazy Load Reducers**: For code splitting in large applications

## Real-World Example: E-Commerce Cart

Here's how I implemented a shopping cart in the TowDepo project:

\`\`\`javascript
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0 },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total = calculateTotal(state.items);
    },
  },
});
\`\`\`

## Conclusion

Redux Toolkit has transformed how I build React applications. It reduces complexity while maintaining the power and predictability of Redux. Start with these patterns and adjust based on your application's needs.

**Key Takeaways:**
- Use createSlice for reducer logic
- Leverage createAsyncThunk for async operations
- Organize by features, not file types
- Consider RTK Query for complex API interactions

Have questions? Feel free to reach out!
    `,
  },
  {
    title: "Optimizing React Performance: Tips and Tricks",
    excerpt: "Discover practical techniques to improve your React app's performance. From memoization to code splitting, learn how to make your applications faster and more efficient.",
    date: "February 28, 2024",
    readTime: "6 min read",
    category: "Performance",
    tags: ["React", "Performance", "Optimization"],
    content: `
## Introduction

Performance is crucial for user experience. Through my work at YesMinds, I've learned that even small optimizations can significantly impact application speed and user satisfaction.

## Performance Metrics That Matter

### Key Metrics to Track:
1. **First Contentful Paint (FCP)** - When users see the first element
2. **Time to Interactive (TTI)** - When the page becomes fully interactive
3. **Largest Contentful Paint (LCP)** - When main content is visible

## React Performance Optimization Techniques

### 1. Use React.memo for Pure Components

Prevent unnecessary re-renders by memoizing components:

\`\`\`javascript
const ProductCard = React.memo(({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
});
\`\`\`

### 2. Leverage useMemo and useCallback

Memoize expensive calculations and callback functions:

\`\`\`javascript
const ExpensiveComponent = ({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => complexCalculation(item));
  }, [data]);

  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);

  return <div>{/* render */}</div>;
};
\`\`\`

### 3. Code Splitting with React.lazy

Load components only when needed:

\`\`\`javascript
const Dashboard = React.lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Dashboard />
    </Suspense>
  );
}
\`\`\`

## Real-World Implementation

In the TowDepo project, I implemented several optimizations:

### Virtualized Lists
For rendering 1000+ products, I used windowing:

\`\`\`javascript
import { FixedSizeList } from 'react-window';

const ProductList = ({ products }) => (
  <FixedSizeList
    height={600}
    itemCount={products.length}
    itemSize={100}
  >
    {({ index, style }) => (
      <div style={style}>
        <ProductCard product={products[index]} />
      </div>
    )}
  </FixedSizeList>
);
\`\`\`

### Image Optimization
- Used WebP format with fallbacks
- Implemented lazy loading for images
- Added proper width/height attributes

\`\`\`javascript
<img
  src={product.image}
  alt={product.name}
  loading="lazy"
  width={300}
  height={200}
/>
\`\`\`

## State Management Optimization

### Avoid Prop Drilling
Use Context API or Redux for global state:

\`\`\`javascript
const UserContext = React.createContext();

const App = () => {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Dashboard />
    </UserContext.Provider>
  );
};
\`\`\`

### Split State Logically
Don't put everything in one state object:

\`\`\`javascript
// ❌ Bad
const [state, setState] = useState({
  user: null,
  products: [],
  cart: [],
});

// ✅ Good
const [user, setUser] = useState(null);
const [products, setProducts] = useState([]);
const [cart, setCart] = useState([]);
\`\`\`

## Bundle Size Optimization

### 1. Analyze Bundle Size
Use webpack-bundle-analyzer to identify large dependencies.

### 2. Tree Shaking
Import only what you need:

\`\`\`javascript
// ❌ Bad
import _ from 'lodash';

// ✅ Good
import debounce from 'lodash/debounce';
\`\`\`

### 3. Dynamic Imports
Load modules on demand:

\`\`\`javascript
const loadChartLibrary = async () => {
  const { Chart } = await import('chart.js');
  return Chart;
};
\`\`\`

## Results from Production

After implementing these optimizations in TowDepo:
- **50% faster** initial page load
- **15% improvement** in UI consistency
- **40% reduction** in bundle size
- **Better user engagement** with improved responsiveness

## Tools for Performance Monitoring

1. **React DevTools Profiler** - Identify slow components
2. **Chrome DevTools Performance** - Analyze runtime performance
3. **Lighthouse** - Comprehensive performance audits
4. **Web Vitals** - Monitor core metrics

## Conclusion

Performance optimization is an ongoing process. Start with the biggest bottlenecks, measure everything, and iterate. Remember: premature optimization is the root of all evil—profile first, then optimize.

**Quick Wins:**
- Implement React.memo for pure components
- Use code splitting for large applications
- Optimize images and assets
- Monitor performance metrics regularly
    `,
  },
  {
    title: "Material-UI Best Practices for Enterprise Applications",
    excerpt: "A comprehensive guide to using Material-UI effectively in large-scale applications. Covers theming, customization, and maintaining consistency across your project.",
    date: "February 10, 2024",
    readTime: "10 min read",
    category: "UI/UX",
    tags: ["Material-UI", "Design System", "Best Practices"],
    content: "Material-UI is a powerful component library that brings Google's Material Design to React. Throughout my experience building enterprise applications, I've developed best practices for using MUI effectively. This article covers theming strategies, component customization, performance optimization, and maintaining design consistency across large applications. Learn how to create scalable design systems, override default styles properly, and build accessible components that work for all users.",
  },
  {
    title: "Case Study: Building TowDepo E-Commerce Platform",
    excerpt: "An in-depth look at the architecture and implementation of TowDepo. Learn about the challenges faced and solutions implemented to achieve an 18% increase in conversions.",
    date: "January 22, 2024",
    readTime: "12 min read",
    category: "Case Study",
    tags: ["E-Commerce", "React", "Case Study"],
    content: "TowDepo is a comprehensive e-commerce platform I built for automotive parts. This case study explores the architecture decisions, technical challenges, and solutions that led to an 18% increase in conversions and 22% boost in user engagement. I'll cover the implementation of location-based inventory, guest-to-authorized user flow, Redux state management for cart persistence, admin dashboard development, and Razorpay payment integration. The project demonstrates real-world application of React patterns, Material-UI theming, and performance optimization techniques.",
  },
  {
    title: "RESTful API Integration in React: A Complete Guide",
    excerpt: "Master the art of integrating RESTful APIs in your React applications. Covers error handling, loading states, caching strategies, and authentication.",
    date: "January 5, 2024",
    readTime: "9 min read",
    category: "React",
    tags: ["API", "React", "Integration"],
    content: "Integrating RESTful APIs is a fundamental skill for React developers. This comprehensive guide covers everything from basic fetch requests to advanced patterns like request cancellation, retry logic, and optimistic updates. Learn how to handle authentication tokens, implement proper error boundaries, manage loading states elegantly, and cache API responses for better performance. I'll share patterns I use in production, including custom hooks for data fetching, TypeScript types for API responses, and testing strategies for components that consume APIs.",
  },
  {
    title: "Responsive Design Patterns for Modern Web Apps",
    excerpt: "Explore modern responsive design patterns and techniques. Learn how to create fluid layouts that work seamlessly across all devices and screen sizes.",
    date: "December 18, 2023",
    readTime: "7 min read",
    category: "Design",
    tags: ["Responsive Design", "CSS", "Mobile-First"],
    content: "Creating responsive web applications that work beautifully on all devices is essential in today's mobile-first world. This article explores modern responsive design patterns including fluid grids, flexible images, CSS Grid and Flexbox layouts, media queries best practices, and mobile-first development strategies. I'll share techniques for handling touch interactions, optimizing for different screen densities, and creating layouts that adapt intelligently. Learn from real examples of responsive patterns I've implemented in production applications.",
  },
];

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  return (
    <>
      <section id="blog" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Blog & Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sharing my knowledge and experiences in frontend development, React patterns, 
              and lessons learned from real-world projects.
            </p>
          </div>
        
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.title} 
                className="bg-card shadow-card border-border p-6 flex flex-col hover:shadow-glow transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedPost(post)}
              >
              <div className="mb-4">
                <Badge variant="secondary" className="mb-3">
                  {post.category}
                </Badge>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

                <Button 
                  variant="ghost" 
                  className="mt-auto w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-4xl max-h-[85vh] bg-card">
          <DialogHeader>
            <div className="flex items-start justify-between mb-4">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {selectedPost?.category}
                </Badge>
                <DialogTitle className="text-3xl font-bold mb-2">
                  {selectedPost?.title}
                </DialogTitle>
              </div>
            </div>
            <DialogDescription className="text-base">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedPost?.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{selectedPost?.readTime}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPost?.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="h-[50vh] pr-4">
            <div className="prose prose-invert max-w-none">
              <div className="text-muted-foreground whitespace-pre-wrap leading-relaxed">
                {selectedPost?.content}
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
