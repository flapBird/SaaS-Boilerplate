import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
// import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';

import { Logo } from './Logo';

export const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <Section className="px-3 py-6">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={(
          <>
            {/* PRO: Dark mode toggle button */}
            <li>
              <LocaleSwitcher />
            </li>
          </>
        )}
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
      </CenteredMenu>
    </Section>
  );
};
