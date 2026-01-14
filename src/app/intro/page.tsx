"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PixarLampIntro } from '@/modules/signature';

export default function IntroPage() {
  const router = useRouter();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    // Redirect to portfolio after 8 seconds (animation duration)
    const timer = setTimeout(() => {
      setShouldRedirect(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldRedirect) {
      router.push('/');
    }
  }, [shouldRedirect, router]);

  return <PixarLampIntro />;
}
