# Skeleton

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+
- MongoDB (local or cloud)

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
pnpm install

# Setup environment variables (see docs/04-development-setup.md)
```

### Development

```bash
# Option 1: Separate development servers (Recommended)
pnpm dev:web    # Terminal 1 - Frontend (http://localhost:3000)
pnpm dev:backend    # Terminal 2 - Backend (http://localhost:3001)

# Option 2: Concurrent development (Convenient)
pnpm dev:all    # Start both services

# Option 3: Proxy development server (Production-like)
pnpm dev:proxy  # Single entry point (http://localhost:3002)
```

## 📁 Project Structure

```
skeleton/
├── apps/
│   ├── web/                 # Next.js frontend application
│   └── backend/             # Node.js API server
├── packages/
│   └── shared-types/        # Shared TypeScript interfaces
└── turbo.json              # Turborepo configuration
```

## 🛠️ Technology Stack

### Frontend

- **Framework**: Next.js 14 with React 18
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **State Management**: React Hooks + Context API

### Backend

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Authentication**: JWT
- **Database**: MongoDB with Mongoose

### Infrastructure

- **Monorepo**: Turborepo
- **Containerization**: Docker
- **Package Management**: pnpm

## 🐳 Docker

### Development with Docker

```bash
# Create network for container communication
docker network create app_network

# Build and start all services
docker-compose up --build

# Access the application
# Frontend: http://localhost:3000
# Backend: http://localhost:3001
```

### Production Build

```bash
# Build production images
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build

# Start production services
docker-compose up -d
```

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

## 🔧 Available Commands

```bash
# Development
pnpm dev              # Run all apps in development mode
pnpm dev:all          # Start both web and API servers
pnpm dev:web          # Start only Next.js frontend
pnpm dev:backend      # Start only Express backend
pnpm dev:proxy        # Start all services with proxy

# Building
pnpm build            # Build all packages and apps
pnpm clean            # Clean all build outputs

# Code Quality
pnpm format           # Format all code with Prettier
pnpm format:check     # Check code formatting
pnpm type-check       # Run TypeScript type checking
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
