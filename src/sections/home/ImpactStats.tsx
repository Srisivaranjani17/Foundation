import { StatCard } from '../../components/UI/StatCard';
import { impactStats } from '../../content/home';
import { AnimatedSection } from '../../components/UI/AnimatedSection';


export function ImpactStats() {
  return (
    <section className="py-16 bg-white" aria-label="Impact Statistics">
      <div className="container-custom">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {impactStats.map((stat, idx) => (
              <StatCard
                key={stat.id}
                stat={stat}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
