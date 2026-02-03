import { HeroSection } from '@/modules/hero-section/hero-section';
import { NavBar } from '@/modules/navigation-menu/navbar';

export default function Home() {
    return (
        <div>
            <section className="gradient-group">
                <NavBar />
                <HeroSection />
            </section>
        </div>
    );
}
