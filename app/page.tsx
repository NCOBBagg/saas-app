import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";

const Page = () => {
    return (
        <main>
            <h1 className="text-2xl underline">Popular Companion</h1>

            <section className="home-section">
                <CompanionCard
                    id="123"
                    name="Neura the Brainy Explorer"
                    topic="Neaural Network of the Brain"
                    subject="Science"
                    duration={45}
                    color="#ffda6e"
                />
                <CompanionCard
                    id="456"
                    name="Counsty the Number Wizard"
                    topic="Derivatives & Integrals"
                    subject="Math"
                    duration={30}
                    color="#e5d0ff"
                />
                <CompanionCard
                    id="789"
                    name="Verba the Vocabulary Builder"
                    topic="English Literature"
                    subject="Language"
                    duration={30}
                    color="#BDE7FF"
                />
            </section>

            <section className="home-section">
                <CompanionsList/>
                <CTA/>
            </section>
        </main>
    )
}

export default Page