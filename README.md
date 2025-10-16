# NovaLux UI

**NovaLux UI** is a modern, lightweight, and flexible React component library built with **TypeScript** and **TailwindCSS**.  
It provides a set of reusable UI components that are easy to customize and extend for building consistent interfaces.

---

## 🚀 Features

- Built with **React + TypeScript**
- Fully **TailwindCSS** compatible
- Easy-to-use, composable components
- Light and Dark theme ready (optional)
- Type-safe props and variants

---

## 📦 Getting Started

Since this library is currently a **local GitHub project**, you can use it in your projects like this:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/nova-lux-ui.git
   ```

2. **Install dependencies:**

   ```bash
   cd nova-lux-ui
   npm install
   ```

3. **Use components locally in your React project**
   You can import them directly from the local path:

   ```tsx
   import { Button, Text } from '../nova-lux-ui/src/components';

   function App() {
     return (
       <div className="p-4">
         <Text as="h1">Welcome to NovaLux UI</Text>
         <Button variant="primary" size="md">
           Click Me
         </Button>
       </div>
     );
   }
   ```

---

## 🧩 Components

Currently included components:

- `Button`
- `Text`
- (more coming soon…)

---

## 📄 Contributing

1. Fork the repository
2. Create a feature branch
3. Write code and tests
4. Open a pull request
