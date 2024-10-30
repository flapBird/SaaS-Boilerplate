import { useTranslations } from 'next-intl';

import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';
import { buttonVariants } from '@/components/ui/buttonVariants';

export const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <Section>
      <CTABanner
        title={t('title')}
        description={t('description')}
        buttons={(
          <>
            <a
              className={buttonVariants({ size: 'lg' })}
              href="https://www.curseforge.com/sims4"
              target="_blank"
            >
              {t('button_text')}
            </a>
          </>
        )}
      />


    </Section>
  );
};
