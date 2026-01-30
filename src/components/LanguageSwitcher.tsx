"use client";

import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/context/translations';

interface LanguageSwitcherProps {
  variant?: 'navbar' | 'sidemenu';
}

export default function LanguageSwitcher({ variant = 'navbar' }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const baseStyles = variant === 'sidemenu' 
    ? 'flex items-center gap-2 font-cormorant text-lg'
    : 'flex items-center gap-1.5 font-cormorant text-sm tracking-wide';

  const activeStyle = variant === 'sidemenu'
    ? 'text-white font-medium'
    : 'text-[var(--color-gold)] font-medium';

  const inactiveStyle = variant === 'sidemenu'
    ? 'text-white/50 hover:text-white/80 cursor-pointer transition-colors'
    : 'text-[var(--color-ink)]/40 hover:text-[var(--color-ink)]/70 cursor-pointer transition-colors';

  const separatorStyle = variant === 'sidemenu'
    ? 'text-white/30'
    : 'text-[var(--color-ink)]/30';

  return (
    <div className={baseStyles}>
      <button
        onClick={() => setLanguage('en')}
        className={language === 'en' ? activeStyle : inactiveStyle}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className={separatorStyle}>|</span>
      <button
        onClick={() => setLanguage('fr')}
        className={language === 'fr' ? activeStyle : inactiveStyle}
        aria-label="Switch to French"
      >
        FR
      </button>
    </div>
  );
}
