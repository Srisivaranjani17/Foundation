import { StatCard } from '../../components/UI/StatCard';
import { volunteerMetrics } from '../../content/volunteer';
import { AnimatedSection } from '../../components/UI/AnimatedSection';


export function ImpactMetrics() {
  return (
    <section className="py-16 bg-forest-900" aria-label="Volunteer Impact Metrics">
      <div className="container-custom">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {volunteerMetrics.map((stat, idx) => (
              <StatCard
                key={stat.id}
                stat={stat}
                delay={idx * 0.1}
                className="!bg-forest-800 border-forest-750 text-white"
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
