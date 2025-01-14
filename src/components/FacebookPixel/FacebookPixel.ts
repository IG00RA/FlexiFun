'use client';
import React, { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export const FacebookPixel: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fbpId = searchParams?.get('fbp') || '';

    import('react-facebook-pixel')
      .then(x => x.default)
      .then(ReactPixel => {
        ReactPixel.init(fbpId);
        ReactPixel.pageView();
        if (pathname === '/confirm') {
          ReactPixel.track('Lead', {});
        }
      });
  }, [pathname, searchParams]);

  return null;
};
