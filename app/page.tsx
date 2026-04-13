import Navbar from '@/components/Navbar';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import SkillsSection from '@/sections/SkillsSection';
import ExperienceSection from '@/sections/ExperienceSection';
import ProcessSection from '@/sections/ProcessSection';
import ProjectsSection from '@/sections/ProjectsSection';
import EducationSection from '@/sections/EducationSection';
import AchievementsSection from '@/sections/AchievementsSection';
import CTABanner from '@/sections/CTABanner';
import ServicesSection from '@/sections/ServicesSection';
import ContactSection from '@/sections/ContactSection';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <ServicesSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
