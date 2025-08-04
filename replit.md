# MusicShare

## Overview

MusicShare is a full-stack music streaming and sharing platform built with React, TypeScript, and Express.js. The application allows users to upload, stream, and discover music tracks with features like audio playback, track management, and artist profiles. It provides a modern, responsive interface with a dark theme optimized for music consumption.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Audio Context**: Custom React context for managing audio playback state across components

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **File Handling**: Multer middleware for audio file uploads with disk storage
- **Development**: Hot reload via Vite integration in development mode

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: Artists and tracks tables with foreign key relationships
- **File Storage**: Local filesystem storage for uploaded audio files
- **Session Management**: PostgreSQL session store (connect-pg-simple)

### Authentication and Authorization
- **Current State**: In-memory storage implementation with sample data
- **Architecture**: Prepared for session-based authentication with PostgreSQL session store
- **User Model**: Artist-based user system with profile management capabilities

### Audio Processing and Playback
- **Upload Validation**: File type restrictions (MP3, WAV, FLAC, M4A) with 50MB size limit
- **Audio Player**: Custom HTML5 audio implementation with React refs
- **Playback Controls**: Play/pause, seek, volume control, and progress tracking
- **Waveform Visualization**: Animated CSS-based waveform display component

### UI/UX Design Patterns
- **Design System**: Dark theme with purple/blue accent colors
- **Component Architecture**: Modular component structure with consistent props interfaces
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: ARIA labels and keyboard navigation support

## External Dependencies

### Core Framework Dependencies
- **@vitejs/plugin-react**: React integration for Vite build system
- **express**: Web application framework for Node.js server
- **react**: Core React library for UI components
- **typescript**: Type safety and enhanced development experience

### Database and ORM
- **drizzle-orm**: Type-safe SQL ORM for PostgreSQL interactions
- **drizzle-kit**: Database migration and schema management tools
- **@neondatabase/serverless**: Serverless PostgreSQL connection driver

### UI and Design Libraries
- **@radix-ui/***: Comprehensive collection of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority**: Utility for creating component variants
- **lucide-react**: Icon library for consistent iconography

### Data Fetching and State Management
- **@tanstack/react-query**: Server state management and caching
- **@hookform/resolvers**: Form validation integration
- **react-hook-form**: Performant form handling library

### File Upload and Processing
- **multer**: Middleware for handling multipart/form-data file uploads
- **@types/multer**: TypeScript definitions for Multer

### Development and Build Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution engine for Node.js
- **esbuild**: JavaScript/TypeScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling

### Utility Libraries
- **wouter**: Lightweight routing library for React
- **clsx**: Conditional className utility
- **nanoid**: URL-safe unique string ID generator
- **date-fns**: Date manipulation and formatting library