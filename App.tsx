
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import MyTaskPage from './components/MyTaskPage';
import AqariPage from './components/AqariPage';
import AqariPrivacyPolicy from './components/AqariPrivacyPolicy';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Footer from './components/Footer';
import { PROJECTS, UI_STRINGS } from './constants';
import { Language } from './types';

type Route = 'portfolio' | 'mytask' | 'aqari' | 'aqari-privacy' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [currentRoute, setCurrentRoute] = useState<Route>('portfolio');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = UI_STRINGS[lang];
  const mohimati = PROJECTS.find(p => p.id === 'mohimati')!;
  const aqari = PROJECTS.find(p => p.id === 'aqari')!;
  
  if (currentRoute === 'mytask') {
    return (
      <MyTaskPage 
        lang={lang} 
        toggleLang={toggleLang} 
        onBack={() => setCurrentRoute('portfolio')}
        onOpenPrivacy={() => setCurrentRoute('privacy')}
        onOpenTerms={() => setCurrentRoute('terms')}
      />
    );
  }

  if (currentRoute === 'aqari') {
    return (
      <AqariPage 
        lang={lang} 
        toggleLang={toggleLang} 
        onBack={() => setCurrentRoute('portfolio')}
        onOpenPrivacy={() => setCurrentRoute('aqari-privacy')}
      />
    );
  }

  if (currentRoute === 'aqari-privacy') {
    return (
      <AqariPrivacyPolicy 
        lang={lang} 
        toggleLang={toggleLang} 
        onBack={() => setCurrentRoute('aqari')} 
      />
    );
  }

  if (currentRoute === 'privacy') {
    return (
      <PrivacyPolicy 
        lang={lang} 
        toggleLang={toggleLang} 
        onBack={() => setCurrentRoute('mytask')} 
      />
    );
  }
  
  if (currentRoute === 'terms') {
    return (
      <TermsOfService 
        lang={lang} 
        toggleLang={toggleLang} 
        onBack={() => setCurrentRoute('mytask')} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-600 selection:text-white">
      <Header lang={lang} toggleLang={toggleLang} />
      
      <main>
        <Hero lang={lang} />
        
        {/* Mohimati App Showcase */}
        <ProjectShowcase 
          project={mohimati} 
          lang={lang} 
          onNavigate={() => setCurrentRoute('mytask')}
          iconUrl="https://i.postimg.cc/x8XkdLLp/icon-main2.png"
          qrUrl="https://i.postimg.cc/nrXsLqq6/qr.jpg"
          themeColorClass="emerald"
          badgeText="Featured Productivity App"
          mockupImage="https://i.postimg.cc/Y9nGkdLY/1.jpg"
        />

        {/* Aqari App Showcase - Updated with requested assets */}
        <ProjectShowcase 
          project={aqari} 
          lang={lang} 
          onNavigate={() => setCurrentRoute('aqari')}
          iconUrl="https://i.postimg.cc/x1PNdfWM/icon.png"
          qrUrl="https://i.postimg.cc/MGc3SFFN/qr.jpg"
          themeColorClass="blue"
          badgeText="Featured Real Estate Solution"
          mockupImage="https://i.postimg.cc/JnkFb23y/1.jpg"
        />

        <section id="projects" className="py-24 hidden">
          {/* Projects are now explicitly listed as showcases above. 
              The loop is hidden but kept for potential future projects. */}
        </section>

      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default App;
