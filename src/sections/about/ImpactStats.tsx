import { StatCard } from '../../components/UI/StatCard';
import { aboutStats } from '../../content/about';
import { AnimatedSection } from '../../components/UI/AnimatedSection';


export function ImpactStats() {
  return (
    <section className="py-16 bg-white" aria-label="About Impact Statistics">
      <div className="container-custom">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {aboutStats.map((stat, idx) => (
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
