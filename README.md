# Ashish Mishra - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.



https://github.com/user-attachments/assets/74650542-ff86-4b39-b182-e6c4b7ae6d20





## Features

- Responsive design that works on all devices
- Dark theme with glassmorphism effects
- Smooth animations and transitions using Framer Motion
- Interactive components including:
  - Animated navigation with social media links
  - Typing text animation with role-specific icons
  - Skill visualization with animated progress bars
  - Project showcase carousel
  - Interactive timeline for work experience
  - Contact form with validation and email integration
  - WhatsApp chat button with unique animations
  - Particle systems and floating orbs for visual effects
  - Custom magnetic cursor
- SEO optimized
- Performance optimized

## Technologies Used

- **Next.js 14** - React framework for production
- **TypeScript** - Typed JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful SVG icons
- **Nodemailer** - Email sending library

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Gmail account for sending emails (with App Password)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd ashish-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Set up email configuration:
   - Create a `.env` file in the root directory
   - Add your Gmail credentials:
     ```
     GMAIL_USER=your_email@gmail.com
     GMAIL_APP_PASSWORD=your_app_password
     ```
   - To generate an App Password for Gmail:
     1. Enable 2-Factor Authentication on your Google account
     2. Go to your Google Account settings
     3. Navigate to Security > 2-Step Verification > App passwords
     4. Generate a new app password for "Mail"
     5. Use this password in your `.env` file

### Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── not-found.tsx    # Custom 404 page
│   ├── api/             # API routes
│   │   ├── contact/     # Contact form API route
│   │   └── health/      # Health check API route
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Navigation.tsx   # Navigation bar with social links
│   ├── Hero.tsx         # Hero section with animated name
│   ├── About.tsx        # About section with personal information
│   ├── Experience.tsx   # Work experience timeline
│   ├── DetailedSkills.tsx # Skills section with progress bars
│   ├── Projects.tsx     # Projects showcase
│   ├── Education.tsx    # Education section
│   ├── Certifications.tsx # Certifications section
│   ├── Contact.tsx      # Contact form with validation
│   ├── Footer.tsx       # Footer with additional links
│   └── ...              # Other UI components
├── context/             # React context providers
└── public/              # Static assets
```

## Customization

You can customize the portfolio by modifying:

1. **Content**: Update the content in each component file
2. **Styling**: Modify the Tailwind classes or add custom CSS in `globals.css`
3. **Colors**: Change the color palette in `tailwind.config.ts`
4. **Animations**: Adjust animation parameters in component files
5. **Email**: Update the recipient email in `src/app/api/contact/route.ts`

## Deployment

### Deploy to Vercel (Recommended)

This project is optimized for Vercel deployment with a custom configuration file.

1. Push your code to a GitHub repository
2. Sign up or log in to [Vercel](https://vercel.com)
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect this is a Next.js project
5. Set the environment variables in your project settings:
   - `GMAIL_USER`: Your Gmail address
   - `GMAIL_APP_PASSWORD`: Your Gmail App Password
6. Click "Deploy" and your site will be live!

### Deploy to Render

1. Fork this repository to your GitHub account
2. Sign up or log in to [Render](https://render.com)
3. Click "New +" and select "Web Service"
4. Connect your GitHub repository
5. Set the following:
   - Name: ashish-portfolio (or any name you prefer)
   - Environment: Node
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Environment Variables:
     - `GMAIL_USER`: Your Gmail address
     - `GMAIL_APP_PASSWORD`: Your Gmail App Password
6. Click "Create Web Service"
7. Your site will be deployed at `https://your-app-name.onrender.com`

### Deploy to Netlify

1. Build your project locally:
   ```bash
   npm run build
   ```
2. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Login to Netlify:
   ```bash
   netlify login
   ```
4. Deploy:
   ```bash
   netlify deploy --prod
   ```
5. Set the environment variables in your Netlify project settings:
   - `GMAIL_USER`: Your Gmail address
   - `GMAIL_APP_PASSWORD`: Your Gmail App Password

## Troubleshooting

### 404 Errors on Deployment

If you encounter 404 errors after deployment, this is likely due to routing configuration. This project includes:

1. A `vercel.json` file with proper routing configuration for Vercel deployments
2. A custom `not-found.tsx` page for handling 404 errors gracefully

Make sure these files are included in your deployment.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Nodemailer Documentation](https://nodemailer.com/)

## Contact

For any questions or feedback, feel free to reach out:

- Email: i.m.ashishhh@gmail.com
- LinkedIn: [Ashish Mishra](https://linkedin.com/in/ashishmishra)
- GitHub: [ashishmishra](https://github.com/ashishmishra)
