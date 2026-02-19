import { Brain, Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Чат-боты', href: '#services' },
    { label: 'ИИ Ассистенты', href: '#services' },
    { label: 'ИИ Агенты', href: '#services' },
    { label: 'Консалтинг', href: '#services' },
  ],
  company: [
    { label: 'О нас', href: '#about' },
    { label: 'Кейсы', href: '#cases' },
    { label: 'Карьера', href: '#' },
    { label: 'Блог', href: '#' },
  ],
  legal: [
    { label: 'Политика конфиденциальности', href: '#' },
    { label: 'Договор оферты', href: '#' },
  ],
};

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-20 pb-8 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">NeuroMind</span>
            </a>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              ИИ-агентство из Санкт-Петербурга. Создаём интеллектуальные решения для бизнеса.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-500/20 hover:text-purple-400 transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-500/20 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Услуги</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Компания</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-purple-400" />
                <a href="tel:+78120000000" className="hover:text-white transition-colors">
                  +7 (812) 000-00-00
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-purple-400" />
                <a href="mailto:hello@neuromind.ru" className="hover:text-white transition-colors">
                  hello@neuromind.ru
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-purple-400 mt-0.5" />
                <span>Санкт-Петербург, Невский пр., 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 NeuroMind. Все права защищены.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-500 hover:text-gray-400 transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
