import { FooterSection } from '@/modules/footer-section/footer-section';
import { HeroSection } from '@/modules/hero-section/hero-section';
import { MessageSection } from '@/modules/message-section/message-section';
import { NavBar } from '@/modules/navigation-menu/navbar';
import { SkillsSection } from '@/modules/skills-section/skills-section';
import { WorkSection } from '@/modules/work-section/work-section';

export default function Home() {
    return (
        <div>
            <section className="gradient-group">
                <NavBar />
                <HeroSection />
                <SkillsSection />
                <WorkSection />
                <MessageSection />
                <FooterSection />
            </section>
        </div>
    );
}
