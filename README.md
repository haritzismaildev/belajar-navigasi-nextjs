# 🚀 Belajar Navigation - Next.js 16

Project untuk belajar **Programmatic Navigation** di Next.js 15 menggunakan `useRouter` hook.

## 📦 Tech Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS

## 🚀 Quick Start
```bash

Install dependencies
npm installRun development server
npm run devOpen browser
http://localhost:3001

## 📚 Apa yang Dipelajari?

- ✅ `router.push()` - Navigate dengan history
- ✅ `router.replace()` - Navigate tanpa history
- ✅ `router.back()` - Kembali ke halaman sebelumnya
- ✅ `router.refresh()` - Refresh data
- ✅ Client Component vs Server Component

## 📂 Structure
src/
├── app/
│   ├── about/         → Halaman About
│   ├── dashboard/     → Halaman Dashboard
│   ├── profile/       → Halaman Profile
│   └── page.tsx       → Home Page
└── components/
└── NavigationButtons.tsx  → Navigation Component

## 👨‍💻 Author

Haritz - Learning Next.js 15

## 📄 License

MIT
## 👨‍💻 Author

Haritz - Learning Next.js 16

## 📄 License

MIT
# 🚀 Belajar Navigation - Next.js 15

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)

Project pembelajaran untuk menguasai **Programmatic Navigation** di Next.js 15 dari dasar hingga mahir.

## 📋 Daftar Isi

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Learning Path](#learning-path)
- [Screenshots](#screenshots)
- [FAQ](#faq)

## 📖 About

Project ini dibuat untuk memahami konsep **Programmatic Navigation** di Next.js 15, yaitu cara melakukan navigasi/perpindahan halaman secara programatis (melalui kode JavaScript) bukan melalui klik link biasa.

**Kapan pakai Programmatic Navigation?**
- ✅ Setelah login berhasil → redirect ke dashboard
- ✅ Setelah submit form → redirect ke halaman success
- ✅ Setelah logout → redirect ke login page
- ✅ Validasi data → redirect berdasarkan kondisi

## ✨ Features

- 🎯 **router.push()** - Navigasi dengan history (bisa back)
- 🔄 **router.replace()** - Navigasi tanpa history (tidak bisa back)
- ⏪ **router.back()** - Kembali ke halaman sebelumnya
- 🔄 **router.refresh()** - Refresh data tanpa reload
- 📱 **Responsive Design** - Mobile & Desktop friendly
- 🎨 **Beautiful UI** - Gradient backgrounds & animations
- 🐛 **Console Logging** - Debug-friendly dengan log messages

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.x | React Framework |
| **React** | 18.x | UI Library |
| **TypeScript** | 5.x | Type Safety |
| **Tailwind CSS** | 3.x | Styling |
| **Node.js** | 18+ | Runtime |

## 📦 Installation

### Prerequisites

Pastikan sudah install:
- Node.js 18.17 atau lebih baru
- npm atau yarn atau pnpm

### Steps

1. **Clone repository**
```bash
git clone https://github.com/your-username/belajar-navigation.git
cd belajar-navigation
```

2. **Install dependencies**
```bash
npm install
# atau
yarn install
# atau
pnpm install
```

3. **Run development server**
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

4. **Open browser**
```
http://localhost:3001
```

## 🎮 Usage

### Custom Port Configuration

Project ini menggunakan **port 3001** (bukan default 3000).

**Ubah port di `package.json`:**
```json
{
  "scripts": {
    "dev": "next dev -p 3001",
    "start": "next start -p 3001"
  }
}
```

**Atau buat file `.env.local`:**
```bash
PORT=3001
```

### Available Scripts
```bash
# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📂 Project Structure
```
belajar-navigation/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx              # Halaman About
│   │   ├── dashboard/
│   │   │   └── page.tsx              # Halaman Dashboard
│   │   ├── profile/
│   │   │   └── page.tsx              # Halaman Profile
│   │   ├── layout.tsx                # Root Layout
│   │   ├── page.tsx                  # Home Page
│   │   └── globals.css               # Global Styles
│   └── components/
│       └── NavigationButtons.tsx     # Navigation Component
├── public/                           # Static Assets
├── .env.local                        # Environment Variables
├── next.config.js                    # Next.js Config
├── tailwind.config.ts                # Tailwind Config
├── tsconfig.json                     # TypeScript Config
└── package.json                      # Dependencies & Scripts
```

## 🎓 Learning Path

### Module 1: Basic Navigation
- [x] Setup Next.js 15 project
- [x] Configure custom port
- [x] Create navigation component
- [x] Implement `router.push()`

### Module 2: Advanced Navigation
- [ ] Implement `router.replace()`
- [ ] Create custom back button
- [ ] Implement `router.refresh()`
- [ ] Build login form with navigation

### Module 3: Real-World Examples
- [ ] Protected routes
- [ ] Multi-step forms
- [ ] Conditional navigation
- [ ] Loading states

## 📸 Screenshots

### Home Page
![Home Page](./screenshots/home.png)
*Halaman utama dengan navigation buttons*

### Dashboard Page
![Dashboard](./screenshots/dashboard.png)
*Halaman dashboard dengan stats cards*

### Profile Page
![Profile](./screenshots/profile.png)
*Halaman profile pengguna*

## 🤔 FAQ

<details>
<summary><strong>Q: Kenapa harus pakai 'use client'?</strong></summary>

**A:** Di Next.js 15, semua component default adalah Server Component. `useRouter` adalah React Hook yang hanya bisa jalan di Client Component. Makanya harus kasih `'use client'` di baris pertama.

</details>

<details>
<summary><strong>Q: Apa bedanya router.push() vs router.replace()?</strong></summary>

**A:** 
- `router.push()` = Menambah history, user bisa tekan Back
- `router.replace()` = Replace history, user TIDAK bisa Back (cocok untuk logout)

</details>

<details>
<summary><strong>Q: Kenapa import dari 'next/navigation' bukan 'next/router'?</strong></summary>

**A:** 
- `next/navigation` = Untuk App Router (Next.js 13+) ✅
- `next/router` = Untuk Pages Router (cara lama) ❌

</details>

<details>
<summary><strong>Q: Port 3001 sudah dipakai, gimana?</strong></summary>

**A:** Ubah ke port lain di `package.json`:
```json
"dev": "next dev -p 4000"
```

</details>

## 🐛 Troubleshooting

### Error: "useRouter is not defined"

**Solusi:**
```typescript
// Pastikan import dari 'next/navigation'
import { useRouter } from 'next/navigation'; // ✅ Benar

// Bukan dari 'next/router'
import { useRouter } from 'next/router'; // ❌ Salah
```

### Error: "You're importing a component that needs useState..."

**Solusi:**
```typescript
// Tambahkan 'use client' di baris pertama
'use client';

import { useRouter } from 'next/navigation';
// ...
```

### Port Already in Use

**Solusi:**
```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3001
kill -9 <PID>
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Navigation Docs](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

## 👨‍💻 Author

**Haritz**
- Learning Next.js 15
- Location: Jakarta, Indonesia
- GitHub: [@your-username](https://github.com/your-username)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js Team untuk framework yang luar biasa
- Vercel untuk hosting dan deployment
- Community yang supportif

---

⭐ **Star this repo** jika project ini membantu kamu belajar!

# 🚀 Next.js 15 - Programmatic Navigation Mastery

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.0-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.0-38bdf8?style=for-the-badge&logo=tailwind-css)

**Comprehensive learning project untuk menguasai Programmatic Navigation di Next.js 15**

[Demo](http://localhost:3001) · [Report Bug](https://github.com/your-username/belajar-navigation/issues) · [Request Feature](https://github.com/your-username/belajar-navigation/issues)

</div>

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
5. [Project Structure](#project-structure)
6. [Core Concepts](#core-concepts)
7. [API Reference](#api-reference)
8. [Examples](#examples)
9. [Best Practices](#best-practices)
10. [Troubleshooting](#troubleshooting)
11. [FAQ](#faq)
12. [Contributing](#contributing)
13. [License](#license)

---

## 🎯 Overview

### What is Programmatic Navigation?

**Programmatic Navigation** adalah teknik navigasi halaman yang dilakukan secara programatis (melalui kode) bukan melalui user action (klik link). Ini sangat penting untuk:

- 🔐 **Authentication Flow** - Redirect setelah login/logout
- 📝 **Form Submission** - Redirect setelah berhasil submit
- ✅ **Validation** - Redirect berdasarkan kondisi tertentu
- 🔄 **Data Updates** - Refresh halaman setelah update data

### Why This Project?

Project ini dibuat untuk memberikan pemahaman mendalam tentang navigasi di Next.js 15 dengan:
- ✅ Hands-on examples
- ✅ Real-world use cases
- ✅ Best practices
- ✅ Common pitfalls solutions

---

## ✨ Key Features

### Navigation Methods

| Method | Description | Use Case |
|--------|-------------|----------|
| `router.push()` | Navigate dengan menambah history | Normal navigation, user boleh back |
| `router.replace()` | Navigate tanpa menambah history | Logout, payment success |
| `router.back()` | Kembali ke halaman sebelumnya | Custom back button |
| `router.forward()` | Maju ke halaman berikutnya | Browser-like navigation |
| `router.refresh()` | Re-fetch data tanpa reload | Update data display |
| `router.prefetch()` | Pre-load halaman | Faster navigation |

### UI/UX Features

- 🎨 **Modern Design** - Gradient backgrounds & smooth transitions
- 📱 **Fully Responsive** - Mobile, tablet, desktop optimized
- ⚡ **Fast Navigation** - No full page reload
- 🔍 **Console Logging** - Easy debugging
- 💡 **Interactive Examples** - Learn by doing

---

## 🛠️ Tech Stack

### Core Technologies
```json
{
  "framework": "Next.js 15",
  "library": "React 18",
  "language": "TypeScript 5",
  "styling": "Tailwind CSS 3",
  "runtime": "Node.js 18+"
}
```

### Dependencies
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "autoprefixer": "^10.0.0",
    "eslint": "^8.0.0",
    "postcss": "^8.0.0",
    "tailwindcss": "^3.0.0",
    "typescript": "^5.0.0"
  }
}
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:

- ✅ **Node.js** 18.17 or higher
- ✅ **npm** 9.0 or higher (or yarn/pnpm)
- ✅ **Git** for version control
- ✅ Code editor (VS Code recommended)

### Installation

#### Method 1: Clone from GitHub
```bash
# Clone repository
git clone https://github.com/your-username/belajar-navigation.git

# Navigate to project
cd belajar-navigation

# Install dependencies
npm install

# Run development server
npm run dev
```

#### Method 2: Create from Scratch
```bash
# Create new Next.js project
npx create-next-app@latest belajar-navigation

# Configuration options:
# ✔ Would you like to use TypeScript? Yes
# ✔ Would you like to use ESLint? Yes
# ✔ Would you like to use Tailwind CSS? Yes
# ✔ Would you like to use `src/` directory? Yes
# ✔ Would you like to use App Router? Yes

# Navigate to project
cd belajar-navigation

# Run development server
npm run dev
```

### Configuration

#### Custom Port Setup

**Option 1: Via package.json**
```json
{
  "scripts": {
    "dev": "next dev -p 3001",
    "start": "next start -p 3001"
  }
}
```

**Option 2: Via .env.local**
```bash
# .env.local
PORT=3001
```

**Option 3: Command Line**
```bash
# Temporary (this session only)
PORT=3001 npm run dev
```

### Verify Installation
```bash
# Check Node.js version
node --version  # Should be v18.17+

# Check npm version
npm --version   # Should be 9.0+

# Run development server
npm run dev

# Open browser
# http://localhost:3001
```

Expected output:
```
  ▲ Next.js 15.0.0
  - Local:        http://localhost:3001
  - Network:      http://192.168.1.x:3001

 ✓ Starting...
 ✓ Ready in 2.5s
```

---

## 📂 Project Structure
```
belajar-navigation/
│
├── 📁 src/
│   ├── 📁 app/                      # App Router Directory
│   │   ├── 📁 about/
│   │   │   └── 📄 page.tsx          # About Page (/about)
│   │   ├── 📁 dashboard/
│   │   │   └── 📄 page.tsx          # Dashboard (/dashboard)
│   │   ├── 📁 profile/
│   │   │   └── 📄 page.tsx          # Profile (/profile)
│   │   ├── 📄 layout.tsx            # Root Layout
│   │   ├── 📄 page.tsx              # Home Page (/)
│   │   └── 📄 globals.css           # Global Styles
│   │
│   └── 📁 components/               # Reusable Components
│       └── 📄 NavigationButtons.tsx # Navigation Component
│
├── 📁 public/                       # Static Assets
│   ├── 🖼️ favicon.ico
│   └── 🖼️ (images, fonts, etc.)
│
├── 📄 .env.local                    # Environment Variables
├── 📄 .gitignore                    # Git Ignore Rules
├── 📄 next.config.js                # Next.js Configuration
├── 📄 package.json                  # Dependencies & Scripts
├── 📄 postcss.config.js             # PostCSS Configuration
├── 📄 README.md                     # This File
├── 📄 tailwind.config.ts            # Tailwind Configuration
└── 📄 tsconfig.json                 # TypeScript Configuration
```

### File Descriptions

| File/Folder | Purpose |
|-------------|---------|
| `src/app/` | Pages using App Router convention |
| `src/components/` | Reusable React components |
| `public/` | Static files (images, fonts) |
| `.env.local` | Environment variables (PORT, API keys) |
| `next.config.js` | Next.js configuration |
| `tailwind.config.ts` | Tailwind CSS customization |

---

## 🎓 Core Concepts

### 1. Client vs Server Components

#### Server Components (Default)
```typescript
// src/app/page.tsx
// No 'use client' = Server Component

export default function Page() {
  // Can access database directly
  // Can use secret API keys
  // Zero JavaScript sent to client
  return <div>Server Component</div>;
}
```

#### Client Components
```typescript
// src/components/NavigationButtons.tsx
'use client'; // ← Required for useRouter!

import { useRouter } from 'next/navigation';

export default function NavigationButtons() {
  const router = useRouter(); // Only works in Client Components
  // ...
}
```

### 2. useRouter Hook
```typescript
'use client';

import { useRouter } from 'next/navigation'; // ← Correct import!

export default function MyComponent() {
  const router = useRouter();
  
  // Available methods:
  router.push('/path');      // Navigate with history
  router.replace('/path');   // Navigate without history
  router.back();             // Go back
  router.forward();          // Go forward
  router.refresh();          // Refresh data
  router.prefetch('/path');  // Pre-load page
}
```

### 3. Navigation Patterns

#### Pattern 1: After Form Submission
```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  
  try {
    await submitForm(data);
    router.push('/success'); // ✅ Redirect on success
  } catch (error) {
    setError(error.message); // ❌ Show error, stay on page
  }
};
```

#### Pattern 2: Authentication
```typescript
const handleLogin = async (credentials: Credentials) => {
  const { success } = await login(credentials);
  
  if (success) {
    router.push('/dashboard'); // ✅ Logged in → Dashboard
  } else {
    router.replace('/login'); // ❌ Failed → Back to login
  }
};
```

#### Pattern 3: Logout
```typescript
const handleLogout = async () => {
  await logout();
  router.replace('/login'); // Use replace, not push!
  // User can't press Back to go to protected page
};
```

---

## 📚 API Reference

### router.push()

Navigate to a new page with history.
```typescript
router.push(href: string, options?: NavigateOptions)
```

**Parameters:**
- `href` - Path to navigate to
- `options` (optional) - Navigation options

**Example:**
```typescript
// Simple navigation
router.push('/dashboard');

// With query parameters
router.push('/products?category=electronics');

// Dynamic route
router.push(`/blog/${postId}`);
```

**Use Cases:**
- ✅ Normal page navigation
- ✅ After successful form submission
- ✅ Conditional navigation
- ✅ Pagination

---

### router.replace()

Navigate to a new page without adding history.
```typescript
router.replace(href: string, options?: NavigateOptions)
```

**Parameters:**
- `href` - Path to navigate to
- `options` (optional) - Navigation options

**Example:**
```typescript
// Logout (user can't go back)
router.replace('/login');

// After payment (can't retry)
router.replace('/success');
```

**Use Cases:**
- ✅ Logout
- ✅ After payment
- ✅ Redirect after error
- ✅ Replace current page

---

### router.back()

Navigate to previous page in history.
```typescript
router.back()
```

**Example:**
```typescript
<button onClick={() => router.back()}>
  ← Back
</button>
```

**Use Cases:**
- ✅ Custom back button
- ✅ Cancel action
- ✅ Return to previous view

---

### router.refresh()

Re-fetch data for current route without full reload.
```typescript
router.refresh()
```

**Example:**
```typescript
const handleUpdate = async () => {
  await updateData();
  router.refresh(); // Refresh to show new data
};
```

**Use Cases:**
- ✅ After data update
- ✅ After delete operation
- ✅ Refresh comments/posts
- ✅ Real-time updates

---

## 💡 Examples

### Example 1: Login Form with Navigation
```typescript
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      
      if (response.ok) {
        // Login success → Navigate to dashboard
        router.push('/dashboard');
      } else {
        alert('Login failed!');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
}
```

### Example 2: Protected Route
```typescript
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProtectedPage() {
  const router = useRouter();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      // No token → Redirect to login
      router.replace('/login');
    }
  }, [router]);
  
  return <div>Protected Content</div>;
}
```

### Example 3: Multi-Step Form
```typescript
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function MultiStepForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final step → Submit and navigate
      submitForm(formData);
      router.push('/success');
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  return (
    <div>
      <h2>Step {step} of 3</h2>
      {/* Form fields based on step */}
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>
        {step === 3 ? 'Submit' : 'Next'}
      </button>
    </div>
  );
}
```

---

## ⚡ Best Practices

### 1. Always use 'use client' for useRouter
```typescript
// ✅ Correct
'use client';
import { useRouter } from 'next/navigation';

// ❌ Wrong - Will cause error
import { useRouter } from 'next/navigation';
```

### 2. Use replace for logout
```typescript
// ✅ Correct - User can't go back
router.replace('/login');

// ❌ Wrong - User can press Back
router.push('/login');
```

### 3. Handle loading states
```typescript
// ✅ Correct
const [isLoading, setIsLoading] = useState(false);

const handleClick = async () => {
  setIsLoading(true);
  await doSomething();
  router.push('/next');
  setIsLoading(false);
};

// ❌ Wrong - No feedback to user
const handleClick = async () => {
  await doSomething();
  router.push('/next');
};
```

### 4. Import from 'next/navigation'
```typescript
// ✅ Correct - For App Router
import { useRouter } from 'next/navigation';

// ❌ Wrong - For Pages Router (old)
import { useRouter } from 'next/router';
```

### 5. Use prefetch for important pages
```typescript
// ✅ Correct - Pre-load for faster navigation
useEffect(() => {
  router.prefetch('/dashboard');
}, []);

<Link href="/dashboard" prefetch={true}>
  Dashboard
</Link>
```

---

## 🐛 Troubleshooting

### Problem 1: "useRouter is not defined"

**Error:**
```
ReferenceError: useRouter is not defined
```

**Solution:**
```typescript
// Make sure you import it
import { useRouter } from 'next/navigation';
```

---

### Problem 2: "You're importing a component that needs useState"

**Error:**
```
Error: You're importing a component that needs useState. 
It only works in a Client Component...
```

**Solution:**
```typescript
// Add 'use client' at the top
'use client';

import { useRouter } from 'next/navigation';
```

---

### Problem 3: "Port already in use"

**Error:**
```
Error: listen EADDRINUSE: address already in use :::3001
```

**Solution:**
```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3001
kill -9 <PID>

# Or change port in package.json
"dev": "next dev -p 4000"
```

---

### Problem 4: Navigation not working

**Checklist:**
- [ ] Added `'use client'` directive?
- [ ] Imported from `next/navigation`?
- [ ] Target page exists?
- [ ] No console errors?

---

## ❓ FAQ

<details>
<summary><strong>Q: Apa perbedaan router.push() vs router.replace()?</strong></summary>

**A:** 
- `router.push()` menambah history → user bisa Back
- `router.replace()` replace history → user TIDAK bisa Back

Gunakan `replace()` untuk logout, payment success, dll.

</details>

<details>
<summary><strong>Q: Kenapa harus pakai 'use client'?</strong></summary>

**A:** Di Next.js 15, semua component default adalah Server Component. `useRouter` adalah React Hook yang hanya bisa jalan di Client Component. Tanpa `'use client'`, akan error.

</details>

<details>
<summary><strong>Q: Bisa pakai JavaScript biasa tanpa TypeScript?</strong></summary>

**A:** Bisa! Ubah file extension dari `.tsx` ke `.jsx` dan hapus type annotations. Tapi TypeScript lebih recommended untuk project serius.

</details>

<details>
<summary><strong>Q: Bagaimana cara navigasi dengan query parameters?</strong></summary>

**A:** 
```typescript
router.push('/products?category=electronics&sort=price');
```

</details>

<details>
<summary><strong>Q: Bisa navigasi ke external URL?</strong></summary>

**A:** Tidak, `useRouter` hanya untuk internal navigation. Untuk external URL, pakai `window.location.href`.
```typescript
// Internal
router.push('/dashboard'); // ✅

// External
window.location.href = 'https://google.com'; // ✅
router.push('https://google.com'); // ❌ Won't work
```

</details>

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Steps to Contribute

1. **Fork the repository**
```bash
git clone https://github.com/your-username/belajar-navigation.git
```

2. **Create a branch**
```bash
git checkout -b feature/AmazingFeature
```

3. **Make your changes**
```typescript
// Add your awesome code
```

4. **Commit**
```bash
git commit -m 'Add some AmazingFeature'
```

5. **Push**
```bash
git push origin feature/AmazingFeature
```

6. **Open Pull Request**

### Contribution Guidelines

- ✅ Follow existing code style
- ✅ Add comments for complex logic
- ✅ Test your changes
- ✅ Update documentation if needed

---

## 📚 Resources

### Official Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Next.js Navigation](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Tutorials
- [Next.js Learn](https://nextjs.org/learn)
- [React Tutorial](https://react.dev/learn)
- [TypeScript for Beginners](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)

### Community
- [Next.js Discord](https://nextjs.org/discord)
- [Next.js GitHub](https://github.com/vercel/next.js)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

## 👨‍💻 Author

**Haritz**

- 📍 Location: Jakarta, Indonesia
- 💼 Role: Developer & QA Engineer
- 🚀 Currently: Learning Next.js 15 & Full-Stack Development
- 📧 Email: your.email@example.com
- 🔗 GitHub: [@your-username](https://github.com/your-username)
- 🔗 LinkedIn: [Your Name](https://linkedin.com/in/your-profile)

---

## 📄 License

This project is licensed under the **MIT License**.
```
MIT License

Copyright (c) 2024 Haritz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

- **Next.js Team** - Amazing framework
- **Vercel** - Hosting & deployment platform
- **React Team** - Revolutionary library
- **Tailwind CSS** - Beautiful styling system
- **Open Source Community** - Inspiration & support

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/your-username/belajar-navigation?style=social)
![GitHub forks](https://img.shields.io/github/forks/your-username/belajar-navigation?style=social)
![GitHub issues](https://img.shields.io/github/issues/your-username/belajar-navigation)
![GitHub license](https://img.shields.io/github/license/your-username/belajar-navigation)

---

## 🎯 Roadmap

- [x] Basic navigation (push, replace)
- [x] Multiple pages setup
- [x] Responsive design
- [ ] Authentication example
- [ ] Protected routes
- [ ] Form validation
- [ ] API integration
- [ ] Database integration (Prisma)
- [ ] Testing setup (Jest, Cypress)
- [ ] CI/CD pipeline

---

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:

- 📧 **Email**: your.email@example.com
- 💬 **Discord**: YourUsername#1234
- 🐛 **Issues**: [GitHub Issues](https://github.com/your-username/belajar-navigation/issues)
- 💡 **Discussions**: [GitHub Discussions](https://github.com/your-username/belajar-navigation/discussions)

---

<div align="center">

### ⭐ Star this repo if it helped you!

**Made with ❤️ by Haritz**

[⬆ Back to Top](#-nextjs-15---programmatic-navigation-mastery)

</div>

