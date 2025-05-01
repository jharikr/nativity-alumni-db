# 🎓 Nativity Prep School Alumni Database

A secure, internal web application for Nativity Prep School to track graduate information, College Promise scholarship disbursements, and outreach activity. This tool replaces the current Excel-based process with a structured, searchable, and scalable system.

## 📌 Project Overview

Nativity Prep’s Graduate Support Team maintains long-term engagement with alumni through mentorship, scholarships, and outreach. This application helps the team:

-   Track student academic and employment histories
-   Manage College Promise Program participation and payments
-   Log communication and outreach efforts
-   Export data for reports, audits, or donor updates

## 🧭 Features

-   Store graduate profiles in a secure, centralized database
-   Assign graduates to their respective Class (e.g., “Class of 2023”)
-   Log College Promise scholarship payments and totals
-   Maintain outreach logs per graduate
-   Provide internal-only access with secure authentication
-   Allow data exports in CSV format
-   Deploy a functional and responsive MVP in ~8–10 weeks (solo dev)

## 🛠️ Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Langage**: [TypeScript](https://www.typescriptlang.org/)
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Database:** [SQLite (MVP)](https://www.sqlite.org/) → [PostgreSQL (for production)](https://www.postgresql.org/)
-   **Auth:** [Clerk](https://clerk.dev/) (or [Better Auth](https://betterstack.io/auth))
-   **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

### 1. Clone this repository

```shell
git clone https://github.com/jharikr/nativity-alumni-db.git
cd nativity-alumni-db
```

### 2. Install dependencies

```shell
pnpm install
```

### 3. Start the development server

```shell
 pnpm dev
```

## License

This project is for internal use only. It is **not licensed** for public deployment, redistribution, or commercial use.
