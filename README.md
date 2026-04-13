# Niranjana J — AI/ML Engineer Portfolio

A modern, production-grade personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Live Preview

> Run locally at `http://localhost:3000`

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org/) | React framework (App Router) |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Scroll animations |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |

---

## 📂 Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   └── page.tsx            # Page composition
├── components/
│   ├── Navbar.tsx          # Sticky navigation
│   ├── Button.tsx          # Reusable button
│   ├── ProjectCard.tsx     # Project card UI
│   ├── ProjectModal.tsx    # Project detail modal
│   └── SectionHeader.tsx   # Section heading component
├── sections/
│   ├── HeroSection.tsx     # Landing hero
│   ├── AboutSection.tsx    # About + quick facts
│   ├── SkillsSection.tsx   # Skills grid
│   ├── ExperienceSection.tsx # Professional experience timeline
│   ├── ProjectsSection.tsx # Projects grid
│   ├── EducationSection.tsx # Education cards
│   ├── AchievementsSection.tsx # Achievements grid
│   ├── ContactSection.tsx  # Contact info
│   └── Footer.tsx          # Footer
├── data/
│   ├── personal.ts         # Personal info, links, bio
│   └── projects.ts         # Projects data
├── public/
│   ├── profile.jpeg        # Profile photo
│   └── resume.pdf          # Downloadable resume
└── utils/
    └── animations.ts       # Framer Motion variants
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/niranjana-wq/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🧩 Sections

| Section | Description |
|---|---|
| **Hero** | Name, tagline, photo, download resume |
| **About** | Bio, quick facts (location, degree, availability, languages) |
| **Skills** | 7 category cards with pill tags |
| **Experience** | Timeline cards — Ether InfoTech, Lennox India |
| **Projects** | 6 AI project cards with modal detail view |
| **Education** | KPR Institute + Crescent Castle School |
| **Achievements** | Awards + hackathon highlights |
| **Contact** | Phone, Email, LinkedIn, GitHub, LeetCode, HackerRank |

---

## 🎨 Customisation

Edit **`data/personal.ts`** to update name, bio, links, and quick facts.  
Edit **`data/projects.ts`** to add or modify project cards.  
Replace **`public/profile.jpeg`** with your photo.  
Replace **`public/resume.pdf`** with your latest resume.

---

## 📄 License

MIT — free to use and adapt with attribution.

---

> Built by **Niranjana J** · [LinkedIn](http://www.linkedin.com/in/niranjanaj/) · [GitHub](https://github.com/niranjana-wq/)
