import React, { useEffect } from 'react';

export const CenteredFooter = (props: {
  logo: React.ReactNode;
  name: string;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    // 加载 gtag.js
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-R9NZFD644C';
    script.async = true;
    document.head.appendChild(script);

    // 初始化 gtag 配置
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-R9NZFD644C');
    `;
    document.head.appendChild(inlineScript);

    // 清理脚本以防内存泄漏
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(inlineScript);
    };
  }, []);

  return (
    <div className="flex flex-col items-center text-center">
      {props.logo}
      <ul className="mt-4 flex gap-x-8 text-lg max-sm:flex-col [&_a:hover]:opacity-100 [&_a]:opacity-60">
        {props.children}
      </ul>
      <div className="mt-6 flex w-full items-center justify-between gap-y-2 border-t pt-3 text-sm text-muted-foreground max-md:flex-col">
        <div>
          {`Copyright © ${new Date().getFullYear()} sims4mods.info All rights reserved.`}
        </div>
      </div>
    </div>
  );
};
