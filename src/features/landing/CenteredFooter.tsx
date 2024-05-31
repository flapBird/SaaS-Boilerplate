import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

const CenteredFooter = (props: { logo: React.ReactNode; name: string }) => {
  const t = useTranslations('Footer');

  return (
    <div className="flex flex-col items-center text-center">
      {props.logo}

      <div className="mt-6 flex w-full items-center justify-between gap-y-2 border-t pt-3 text-sm text-muted-foreground max-md:flex-col">
        <div>
          © Copyright {new Date().getFullYear()} {props.name}.{' '}
          {t.rich('designed_by', {
            author: () => (
              <Link
                className="text-blue-500 hover:text-blue-600"
                href="https://creativedesignsguru.com"
              >
                Creative Designs Guru
              </Link>
            ),
          })}
          .
          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        </div>
      </div>
    </div>
  );
};

export { CenteredFooter };
