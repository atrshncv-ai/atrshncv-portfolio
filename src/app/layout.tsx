import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { publicAssetPath } from "@/lib/public-path";

const siteUrl = "https://atrshncv-ai.github.io/atrshncv-portfolio/";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Александр Трищенков — внедрение AI для заявок и поддержки",
  description:
    "Проектирую и внедряю AI-сценарии для квалификации входящих заявок, клиентских ответов и follow-up — от разбора процесса до запуска в production.",
  keywords: [
    "AI-автоматизация для бизнеса",
    "внедрение AI",
    "обработка входящих заявок",
    "квалификация лидов",
    "автоматизация поддержки клиентов",
    "AI-интеграции",
    "автоматизация follow-up",
    "AI agents",
    "LLM-интеграции",
    "Александр Трищенков",
    "Trishencov",
  ],
  authors: [{ name: "Александр Трищенков", url: siteUrl }],
  creator: "Александр Трищенков",
  publisher: "Александр Трищенков",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: publicAssetPath("/logo.svg"),
  },
  openGraph: {
    title: "Александр Трищенков — внедрение AI для заявок и поддержки",
    description:
      "Разбор процесса, проектирование решения, интеграция и запуск AI-сценариев для обработки заявок и клиентской поддержки.",
    url: siteUrl,
    siteName: "Александр Трищенков — AI Automation",
    type: "profile",
    locale: "ru_RU",
    firstName: "Александр",
    lastName: "Трищенков",
    username: "atrshncv-ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Александр Трищенков — внедрение AI для бизнеса",
    description:
      "AI-квалификация входящих заявок и поддержка клиентов — от разбора процесса до production.",
    creator: "@a_trshncv",
  },
  alternates: {
    canonical: siteUrl,
  },
};

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://atrshncv-ai.github.io/atrshncv-portfolio/#person",
  name: "Александр Трищенков",
  alternateName: "Alexander Trishencov",
  jobTitle: "AI Automation Specialist",
  description:
    "Проектирую и внедряю AI-сценарии для обработки заявок и клиентской поддержки: от разбора процесса до интеграции и запуска.",
  url: siteUrl,
  email: "alexander.trishencov@gmail.com",
  telephone: "+7-912-468-76-70",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ижевск",
    addressCountry: "Russia",
  },
  sameAs: [
    "https://t.me/a_trshncv",
    "https://github.com/atrshncv-ai",
    "https://vk.ru/a_trshncv",
  ],
  knowsAbout: [
    "AI-автоматизация",
    "обработка заявок",
    "квалификация лидов",
    "клиентская поддержка",
    "LLM-интеграции",
    "n8n",
    "Make",
    "Zapier",
    "OpenAI API",
    "Claude API",
    "RAG Systems",
    "Prompt Engineering",
    "Telegram Bot Development",
    "React",
    "Next.js",
    "TypeScript",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "AI Automation Specialist",
    occupationalCategory: "15-1212.00",
    skills: [
      "LLM Integration",
      "n8n Workflow Design",
      "RAG Architecture",
      "API Integration",
      "Process Automation",
    ],
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AI Automation Services by Alexander Trishencov",
  description:
    "Внедрение AI для обработки входящих заявок и поддержки клиентов: анализ процесса, проектирование сценария, интеграция и запуск в production.",
  provider: {
    "@type": "Person",
    name: "Александр Трищенков",
    url: siteUrl,
  },
  serviceType: ["AI Automation", "Lead Qualification", "Customer Support Automation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
