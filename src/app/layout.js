// app/layout.tsx
import './globals.css'

export const metadata = { 
  title: "Abdiaziz Jama | Full-Stack Developer Portfolio",
  description:
    "Portfolio of Abdiaziz Jama – Full-Stack Developer and Designer. Showcasing projects built with Next.js, React, Tailwind CSS, and modern web technologies.",
  keywords: [
    "Abdiaziz Jama",
    "Full-Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "Tailwind CSS",
    "Web Development",
    "Frontend Engineer",
    "Software Engineer",
  ],
  authors: [{ name: "Abdiaziz Jama" }],
  openGraph: {
    title: "Abdiaziz Jama | Full-Stack Developer Portfolio",
    description:
      "Explore Abdiaziz Jama’s portfolio – modern web apps, UI/UX projects, and full-stack development using Next.js, React, and Tailwind CSS.",
    url: "https://yourdomain.com",
    siteName: "Abdiaziz Jama Portfolio",
    images: [
      {
        url: "./images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdiaziz Jama Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdiaziz Jama | Full-Stack Developer Portfolio",
    description:
      "Showcasing projects and skills in Next.js, React, Tailwind CSS, and modern web development.",
    images: ["/images/og-image.png"],
    creator: "https://x.com/0paziz",
  },
  // LinkedIn relies on Open Graph, so no separate LinkedIn property is needed,
  // but you can explicitly add them as meta tags in your head if required:
  linkedin: {
    title: "Abdiaziz Jama | Full-Stack Developer Portfolio",
    description:
      "Showcasing projects and skills in Next.js, React, Tailwind CSS, and modern web development.",
    image: "/images/og-image.png",
    url: "https://www.linkedin.com/in/abdiaziz-omar-876b06256/",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
        <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
