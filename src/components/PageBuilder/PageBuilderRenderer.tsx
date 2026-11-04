import React from 'react';
import Image from 'next/image';
import { Star, CheckCircle2 } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import styles from './PageBuilder.module.css';

interface PageBuilderProps {
  blocks: any[];
}

export default function PageBuilderRenderer({ blocks }: PageBuilderProps) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <div className={styles.pageBuilder}>
      {blocks.map((block: any, index: number) => {
        let content = null;
        switch (block._type) {
          case 'heroBlock':
            content = <HeroBlock data={block} />;
            break;
          case 'featuresBlock':
            content = <FeaturesBlock data={block} />;
            break;
          case 'faqBlock':
            content = <FAQBlock data={block} />;
            break;
          case 'testimonialsBlock':
            content = <TestimonialsBlock data={block} />;
            break;
          case 'pricingBlock':
            content = <PricingBlock data={block} />;
            break;
          default:
            return null;
        }
        
        return (
          <FadeIn key={index} delay={0.1}>
            {content}
          </FadeIn>
        );
      })}
    </div>
  );
}

// --- Individual Blocks ---

function HeroBlock({ data }: { data: any }) {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className="container">
        <h1 className="section-title gradient-text">{data.headline}</h1>
        {data.subheadline && <p className="section-subtitle">{data.subheadline}</p>}
        {data.image && (
          <div className={styles.heroImage}>
            <Image src={data.image.asset?._ref ? `https://cdn.sanity.io/images/vx78djfv/production/${data.image.asset._ref.replace('image-', '').replace('-png', '.png').replace('-jpg', '.jpg')}` : ''} alt={data.headline} fill style={{objectFit: 'cover'}} />
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturesBlock({ data }: { data: any }) {
  return (
    <section className={`section ${styles.features}`}>
      <div className="container">
        {data.title && <h2 className="section-title">{data.title}</h2>}
        <div className="grid-3">
          {data.features?.map((feature: any, idx: number) => (
            <div key={idx} className="card" style={{ padding: '2rem' }}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQBlock({ data }: { data: any }) {
  return (
    <section className={`section ${styles.faq}`}>
      <div className="container">
        {data.title && <h2 className="section-title">{data.title}</h2>}
        <div className={styles.faqList}>
          {data.questions?.map((q: any, idx: number) => (
            <details key={idx} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{q.question}</summary>
              <div className={styles.faqAnswer}>{q.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsBlock({ data }: { data: any }) {
  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        {data.title && <h2 className="section-title">{data.title}</h2>}
        <div className="grid-3">
          {data.testimonials?.map((t: any, idx: number) => (
            <div key={idx} className="card" style={{ padding: '2rem' }}>
              <div className={styles.stars}>
                {Array.from({ length: t.rating || 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p>"{t.content}"</p>
              <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>{t.name}</div>
              <div className="text-muted" style={{ fontSize: '0.8rem' }}>{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingBlock({ data }: { data: any }) {
  return (
    <section className={`section ${styles.pricing}`}>
      <div className="container">
        {data.title && <h2 className="section-title">{data.title}</h2>}
        <div className="grid-3">
          {data.plans?.map((plan: any, idx: number) => (
            <div key={idx} className={`card ${plan.isPopular ? styles.popularPlan : ''}`} style={{ padding: '2rem', textAlign: 'center' }}>
              {plan.isPopular && <div className="badge badge--gold" style={{ marginBottom: '1rem' }}>Le plus populaire</div>}
              <h3>{plan.name}</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '1rem 0' }}>{plan.price}</div>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '2rem' }}>
                {plan.features?.split(',').map((f: string, i: number) => (
                  <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} color="var(--color-primary)" /> {f.trim()}
                  </li>
                ))}
              </ul>
              <button className="btn btn--primary" style={{ width: '100%' }}>Choisir ce plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
