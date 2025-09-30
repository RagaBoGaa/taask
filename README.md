# Task Management Application

A modern task management application built with React, TypeScript, and Tailwind CSS. This application features a responsive design, keyboard shortcuts for quick navigation, and a dark/light theme toggle.

## Features

- Responsive design for both desktop and mobile devices
- Dark/Light theme support
- User management system
- Keyboard shortcuts for quick navigation
- Internationalization support

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Router
- Shadcn/ui components

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## Keyboard Shortcuts

The application supports various keyboard shortcuts for quick navigation and actions:

- `Alt + H` - Navigate to Home
- `Alt + U` - Navigate to Users
- `Alt + T` - Toggle Theme
- `Alt + A` - Add New User (on Users page)
- `Alt + D` - Delete Selected Users (on Users page)
- `?` - Show Keyboard Shortcuts Help

## Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React context providers
├── hooks/         # Custom React hooks
├── lib/           # Utility functions and configurations
├── pages/         # Page components
└── types/         # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.