import type { Metadata } from "next"

export const porarTableMetadata: Metadata = {
  title: "Porar Table | Digital Study Table & Collaboration",
  description:
    "Porar Table is a digital study table for students and teachers to take notes, organize resources, plan study sessions, and collaborate live. An infinite, smart desk accessible from anywhere, designed for seamless learning without distractions.",
  keywords: [
    "Porar Table",
    "digital study table",
    "online study",
    "student collaboration",
    "teacher tools",
    "note-taking app",
    "study planner",
    "infinite canvas",
    "real-time collaboration",
    "online learning platform",
    "study notes",
    "brainstorming tool",
    "shareable notes",
    "virtual desk",
    "exam prep",
    "GPA booster",
    "online classroom",
    "study group",
    "distraction-free study",
    "browser-based study",
    "academic collaboration",
  ],
  metadataBase: new URL("https://www.porartable.com"),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Porar Table Team", url: "https://www.porartable.com" }],
  creator: "Porar Table",
  publisher: "Porar Table",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.porartable.com",
    title: "Porar Table | Digital Study Table & Collaboration",
    description:
      "Porar Table is a digital study table for students and teachers to take notes, organize resources, plan study sessions, and collaborate live. An infinite, smart desk accessible from anywhere, designed for seamless learning without distractions.",
    siteName: "Porar Table",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Porar Table | Digital Study Table & Collaboration",
      },
    ],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
}
