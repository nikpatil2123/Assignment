# PopX Web Application

A modern web application built with React and TypeScript for user authentication and account management.

## Features

- User authentication (Sign In/Sign Up)
- Account settings management
- Responsive design
- Form validation
- Modern UI with floating labels

## Tech Stack

- React 18
- TypeScript
- React Router v6
- Tailwind CSS
- Lucide Icons

## Project Structure

```
project/
├── src/
│   ├── pages/
│   │   ├── Welcome.tsx
│   │   ├── SignIn.tsx
│   │   ├── SignUp.tsx
│   │   └── AccountSettings.tsx
│   ├── index.css
│   └── App.tsx
├── package.json
└── README.md
```

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
cd project
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Builds the app for production
- `npm run test` - Runs test suite
- `npm run lint` - Runs ESLint

## Pages

### Welcome
- Landing page with options to sign in or create account
- Bottom-aligned content for better mobile experience

### Sign Up
- User registration form
- Fields:
  - Full Name (required)
  - Phone Number (required)
  - Email Address (required)
  - Password (required)
  - Company Name
  - Agency Status

### Sign In
- User login form
- Fields:
  - Email Address (required)
  - Password (required)

### Account Settings
- Profile management
- Display user information
- Profile picture with upload capability
- User description

## Styling

- Uses Tailwind CSS for styling
- Custom form styling with floating labels
- Consistent color scheme:
  - Primary: #6C25FF
  - Text: #1D2939
  - Secondary Text: #475467
  - Borders: #D0D5DD

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
