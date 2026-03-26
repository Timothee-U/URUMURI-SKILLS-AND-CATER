# Urumuri - Skills & Reconciliation Platform

A comprehensive platform empowering Rwanda's youth through digital skills training, bias-free job matching, trauma-informed mentorship, and reconciliation programs.

## Features

- **Digital Skills Training**: Access to various learning tracks
- **Job Matching**: Bias-free job opportunities for youth
- **Mentorship Programs**: Connect with experienced mentors
- **Reconciliation Support**: Community building and healing
- **Multi-Role System**: Support for learners, employers, mentors, counselors, and admins

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd urumuri-skills-and-cater
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8081](http://localhost:8081) in your browser to access the application.

### Build for Production

```bash
npm run build
npm run preview
```

## Authentication System

This application uses a local authentication system with localStorage for data persistence. No external database is required - all user accounts and sessions are stored locally in your browser.

### User Registration
- Choose from 4 roles: Learner, Employer, Mentor, or Counselor
- Create account with email and password
- Automatic role-based redirection after login

### User Login
- Email/password authentication
- Persistent sessions across browser refreshes
- Role-based dashboard access

### Demo Accounts
For testing purposes, you can register new accounts or use any email/password combination - the system will create accounts on-the-fly.

## Navigation Guide

The application includes multiple user roles and pages. Here's how to explore all features:

### Public Pages (No Login Required)

1. **Landing Page** (`/`)
   - Hero section with platform overview
   - Mission, programs, impact, and get involved sections
   - Navigation to login/register

2. **Login** (`/login`)
   - Email/password authentication
   - Links to registration and password reset

3. **Register** (`/register`)
   - Multi-step registration with role selection
   - Roles: Learner, Employer, Mentor, Counselor

4. **Forgot Password** (`/forgot-password`)
   - Password reset functionality

### Authenticated Pages

After logging in, users are redirected based on their role. All pages use mock data for demonstration.

#### Learner Dashboard (`/dashboard`) - Default for learners
- Overview of learning progress, job matches, and mentor sessions
- Quick actions: Continue Learning, Browse Jobs, Find Mentor, Reconciliation
- Skills progress tracking
- Upcoming mentor sessions
- Available job listings

#### Employer Dashboard (`/employer`)
- Post new job listings
- View posted jobs with application counts
- Manage job status (active/closed)

#### Mentor Dashboard (`/mentor-dashboard`)
- View mentoring sessions
- Update session statuses
- Profile management

#### Admin Portal (`/admin`)
- User management across all roles
- View and manage jobs, sessions
- System overview

### Feature Pages

5. **Learn** (`/learn`)
   - Browse available courses and skills tracks
   - Learning progress dashboard

6. **Jobs** (`/jobs`)
   - Job listings with filters
   - Job details and applications

7. **Mentorship** (`/mentors` or `/mentorship`)
   - Browse available mentors
   - Book mentoring sessions

8. **Reconciliation** (`/reconciliation`)
   - Community reconciliation programs
   - Support resources

### Navigation Tips

- Use the top navigation bar to switch between sections
- Role-based redirects happen automatically on login
- All forms use mock data - no real backend required
- Theme toggle available in the header
- Responsive design works on mobile and desktop

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Routing**: React Router
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Testing**: Vitest

## Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable UI components
│   └── landing/     # Landing page sections
├── contexts/        # React contexts (Auth, Theme)
├── hooks/           # Custom React hooks
├── lib/             # Utilities
├── pages/           # Page components
└── assets/          # Static assets
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

### Mock Data

The application uses mock data for all features, allowing full functionality without a backend. All API calls are simulated with realistic data structures.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is part of the Urumuri initiative for Rwanda's youth empowerment.
