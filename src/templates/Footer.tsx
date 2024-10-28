import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { CenteredFooter } from '@/features/landing/CenteredFooter';
import { Section } from '@/features/landing/Section';
import { AppConfig } from '@/utils/AppConfig';

import { Logo } from './Logo';

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <Section className="pb-16 pt-0">
      <CenteredFooter
        logo={<Logo />}
        name={AppConfig.name}
      >
        <li>
          <Link href="/">{t('product')}</Link>
        </li>

        <li>
          <Link href="/">{t('docs')}</Link>
        </li>

        <li>
          <Link href="/">{t('blog')}</Link>
        </li>

        <li>
          <Link href="/">{t('community')}</Link>
        </li>

        <li>
          <Link href="/">{t('company')}</Link>
        </li>
      </CenteredFooter>
    </Section>
  );
};
