import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const siteConfig = {
    name: "Nativity Connect",
    description:
        "A secure internal web application for Nativity Prep School to track alumni profiles, scholarships, and outreach activity. Built to centralize graduate data, support the College Promise Program, and streamline long-term engagement.",
    siteURL: process.env.VERCEL_URL
        ? new URL(`https://${process.env.VERCEL_URL}`) // metadataBase: new URL(env.NEXT_PUBLIC_APP_URL)
        : undefined,
};

export const metadata: Metadata = {
    title: { default: siteConfig.name, template: `%s | ${siteConfig.name} ` },
    description: siteConfig.description,
    metadataBase: process.env.VERCEL_URL
        ? new URL(`https://${process.env.VERCEL_URL}`) // metadataBase: new URL(env.NEXT_PUBLIC_APP_URL)
        : undefined,
    applicationName: siteConfig.name,
    authors: [
        { name: "Jharik Richardson", url: "https://jharikrichardson.com" },
        {
            name: " Nativity Preparatory School",
            url: "https://www.nativityboston.org/",
        },
    ],
    category: "education",
    creator: "Nativity Preparatory School of Boston",
    keywords: [
        "Nativity Prep",
        "Jesuit Education",
        "Boston Middle School",
        "Tuition-Free School",
        "Graduate Support",
        "Men for Others",
        "Catholic School",
        "Urban Education",
        "Private School Boston",
        "Nativity Preparatory School",
        "Nativity Prep Alumni",
    ],
    openGraph: {
        title: siteConfig.name,
        description: siteConfig.description,
        url: "https://yourdomain.com",
        siteName: siteConfig.name,
        images: [
            {
                url: `${siteConfig.siteURL}/og.jpg`,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    generator: "Next.js",
    alternates: { canonical: "/" },
    robots: { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = {
    colorScheme: "dark light",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
