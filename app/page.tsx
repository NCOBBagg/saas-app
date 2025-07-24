import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {getAllCompanions, getRecentSession} from "@/lib/actions/companion.actions";
import {getSubjectColor} from "@/lib/utils";

const Page = async () => {
    const companions = await getAllCompanions({limit: 3});
    const recentSessionCompanions = await getRecentSession()

    return (
        <main>
            <h1 className="text-2xl underline">Popular Companion</h1>

            <section className="home-section">
                {companions?.map((companion) => (
                    <CompanionCard
                        key={companion.id}
                        {...companion}
                        color={getSubjectColor(companion.subject)}
                    />
                ))}



            </section>

            <section className="home-section">
                <CompanionsList
                    title="Recently completed sessions"
                    companions={recentSessionCompanions}
                    classNames="w-2/3 max-lg:w-full"
                />
                <CTA/>
            </section>
        </main>
    )
}

export default Page