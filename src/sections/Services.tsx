import { useEffect, useRef, useState } from 'react';
import { MessageSquare, Brain, Workflow, Zap, Shield, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'Чат-боты',
    description: 'Интеллектуальные чат-боты для Telegram, WhatsApp и сайтов. Автоматизация поддержки клиентов 24/7.',
    features: ['Ответы на вопросы', 'Приём заказов', 'Квалификация лидов', 'Интеграция с CRM'],
    color: 'purple',
  },
  {
    icon: Brain,
    title: 'ИИ Ассистенты',
    description: 'Персональные ИИ-ассистенты для сотрудников. Помощь в документах, анализе данных и коммуникации.',
    features: ['Работа с документами', 'Анализ данных', 'Планирование задач', 'Генерация контента'],
    color: 'cyan',
  },
  {
    icon: Workflow,
    title: 'ИИ Агенты',
    description: 'Автономные агенты для выполнения сложных бизнес-процессов без участия человека.',
    features: ['Автоматизация процессов', 'Принятие решений', 'Интеграция с системами', 'Масштабирование'],
    color: 'purple',
  },
];

const additionalFeatures = [
  {
    icon: Zap,
    title: 'Быстрый запуск',
    description: 'Внедрение за 2-4 недели',
  },
  {
    icon: Shield,
    title: 'Безопасность',
    description: 'Защита данных и конфиденциальность',
  },
  {
    icon: BarChart3,
    title: 'Аналитика',
    description: 'Подробная статистика и отчёты',
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            Наши услуги
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Комплексные <span className="text-gradient">ИИ-решения</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            От простых чат-ботов до сложных автономных агентов — мы создаём решения под ваши бизнес-задачи
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative glass-card rounded-3xl p-8 h-full hover:border-purple-500/40 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color === 'purple' ? 'bg-purple-500/20' : 'bg-cyan-500/20'}`}>
                  <service.icon className={`w-7 h-7 ${service.color === 'purple' ? 'text-purple-400' : 'text-cyan-400'}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full ${service.color === 'purple' ? 'bg-purple-400' : 'bg-cyan-400'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {additionalFeatures.map((feature) => (
            <div key={feature.title} className="flex items-center gap-4 p-6 rounded-2xl glass">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
