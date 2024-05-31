import { CenteredFooter } from '@/features/landing/CenteredFooter';
import { Section } from '@/features/landing/Section';
import { AppConfig } from '@/utils/AppConfig';

import { Logo } from './Logo';

const Footer = () => {
  return (
    <Section className="pb-16 pt-0">
      <CenteredFooter logo={<Logo />} name={AppConfig.name} />
    </Section>
  );
};

export { Footer };
