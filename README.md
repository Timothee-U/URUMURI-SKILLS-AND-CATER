# Urumuri - Skills & Reconciliation Platform

A comprehensive platform empowering Rwanda's youth through digital skills training, bias-free job matching, trauma-informed mentorship, and reconciliation programs. With CCI-Urumuri as our first branch in action..

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
git clone <https://github.com/Timothee-U/URUMURI-SKILLS-AND-CATER>
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

4. Open THE LINK provided (eg: http://localhost...) to access the application.

### PUBLIC URL
You can also access the deployed url on [https://urumuri-skills-and-cater-h301e8d7j-tuwayesu-9772s-projects.vercel.app/](https://urumuri-skills-and-cater-h4kb4l02f-tuwayesu-9772s-projects.vercel.app/) or https://urumuri-skills-and-cater.vercel.app/ in case of any inconvenience.
### Build for Production

```bash
npm run build
npm run preview
```

### User Registration
- Choose from 4 roles: Learner, Employer, Mentor, or Counselor
- Create account with email and password
- Automatic role-based redirection after login

### User Login
- Email/password authentication
- Persistent sessions across browser refreshes
- Role-based dashboard access

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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is part of the Urumuri initiative for Rwanda's youth empowerment.
