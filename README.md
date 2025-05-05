# goep.dev - Personal Portfolio Website

This is the source code for my personal portfolio website, showcasing my projects, skills, and thoughts on various topics.

![Website Screenshot](/dark-theme-website.png)

## Tech Stack

This project is built with modern web technologies:

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## Running Locally

Follow these steps to run the project on your local machine:

1. **Clone the repository**

\`\`\`bash
git clone https://github.com/griffin-goepper/goep.dev.git
cd goep.dev
\`\`\`

2. **Install dependencies**

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. **Start the development server**

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

\`\`\`
goep.dev/
├── app/                  # Next.js App Router
│   ├── contact/          # Contact page
│   ├── projects/         # Projects page
│   ├── quick-thoughts/   # Blog posts
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── ui/               # shadcn/ui components
│   ├── hero.tsx          # Hero section
│   ├── skills.tsx        # Skills section
│   └── ...               # Other components
├── public/               # Static assets
└── ...                   # Config files
\`\`\`

## Features

- **Responsive Design**: Fully responsive on all device sizes
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Type Animation**: Interactive typing animation in the hero section
- **Project Showcase**: Filterable gallery of projects
- **Blog Section**: "Quick Thoughts" blog with categorized posts
- **Contact Form**: Interactive contact form

## Customization

### Theme

The theme colors can be customized in the `globals.css` file. The project uses CSS variables for theming, making it easy to change the color scheme.

### Content

Most of the content is stored directly in the components. To update:

- **Projects**: Edit the `projects` array in `app/projects/page.tsx`
- **Blog Posts**: Edit the `posts` array in `app/quick-thoughts/page.tsx`
- **Skills**: Update the cards in `components/skills.tsx`

## Deployment

This site is deployed on Vercel. To deploy your own version:

1. Fork this repository
2. Import the project to Vercel
3. Deploy

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions, feel free to reach out:

- Email: hello@goep.dev
- GitHub: [griffin-goepper](https://github.com/griffin-goepper)
- LinkedIn: [Griffin Goepper](https://www.linkedin.com/in/griffin-g-066668171/)
