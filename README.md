# Store Management System

A modern, responsive web application for creating and managing online stores, built with React, TypeScript, and Tailwind CSS.

![Store Management System](https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200)

## 🚀 Features

- **Store Creation**
  - Custom domain validation
  - Real-time form validation
  - Automatic currency and country selection
  - Category management
  
- **Product Management**
  - Dynamic product grid
  - Detailed product views
  - Responsive image galleries
  
- **Responsive Design**
  - Mobile-first approach
  - Tablet and desktop optimized
  - Fluid layouts with Tailwind CSS

## 🛠️ Technologies

- React 18
- TypeScript
- Tailwind CSS
- Axios for API integration
- React Router for navigation
- Lucide React for icons
- React Hot Toast for notifications

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd store-management-system
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🌐 API Integration

The application integrates with two main APIs:

### Store Management API
- Base URL: `https://interview-task-green.vercel.app/task`
- Endpoints:
  - Domain Check: `GET /domains/check/{domain}.expressitbd.com`
  - Store Creation: `POST /stores/create`

### Product Management API
- Base URL: `https://glore-bd-backend-node-mongo.vercel.app/api`
- Endpoints:
  - Get All Products: `GET /product`
  - Get Single Product: `GET /product/{id}`

## 📱 Responsive Design

The application is fully responsive with three main breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔍 Form Validation

The store creation form includes the following validations:
- Store name must be at least 3 characters long
- Domain availability check
- Valid email format requirement
- Required field validation
- Real-time error feedback

## 🎯 Project Structure

```
src/
├── api/          # API integration and axios instances
├── components/   # Reusable React components
├── pages/        # Page components and routes
├── types/        # TypeScript type definitions
└── main.tsx      # Application entry point
```

## 🚦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔐 Environment Variables

No environment variables are required for this project as all API endpoints are hardcoded for demonstration purposes.

## 📈 Performance Optimization

- Lazy loading of images
- Component code splitting
- Optimized bundle size
- Efficient state management
- Minimized re-renders

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## 👥 Authors

- Saikat Ghosh - * React-Online-store* - Github profile: https://github.com/saikatghosh3

## 🙏 Acknowledgments

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)