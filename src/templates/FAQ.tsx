import { useTranslations } from 'next-intl';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Section } from '@/features/landing/Section';

export const FAQ = () => {
  const t = useTranslations('FAQ');

  return (
    <Section>
      <div className="mb-8">
        <h2 className="text-2xl text-center font-bold">{t('faqTitle')}</h2>
      </div>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{t('question')}</AccordionTrigger>
          <AccordionContent>{t('answer')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{t('question')}</AccordionTrigger>
          <AccordionContent>{t('answer')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>{t('question')}</AccordionTrigger>
          <AccordionContent>{t('answer')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>{t('question')}</AccordionTrigger>
          <AccordionContent>{t('answer')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>{t('question')}</AccordionTrigger>
          <AccordionContent>{t('answer')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>{t('question')}</AccordionTrigger>
          <AccordionContent>{t('answer')}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  );
};
