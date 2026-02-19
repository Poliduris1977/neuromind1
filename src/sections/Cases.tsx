import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Building2, ShoppingBag, Stethoscope, GraduationCap } from 'lucide-react';

const cases = [
  {
    icon: Building2,
    industry: 'Недвижимость',
    title: 'ИИ-ассистент для агентства недвижимости',
    description: 'Автоматизация подбора объектов, ответов на вопросы и ведения клиентов от первого контакта до сделки.',
    results: [
      { label: 'Время ответа', value: '−85%' },
      { label: 'Конверсия', value: '+40%' },
      { label: 'Лидов в месяц', value: '300+' },
    ],
    color: 'purple',
  },
  {
    icon: ShoppingBag,
    industry: 'E-commerce',
    title: 'Чат-бот для интернет-магазина',
    description: 'Персонализированные рекомендации, отслеживание заказов, обработка возвратов и поддержка 24/7.',
    results: [
      { label: 'Продажи', value: '+25%' },
      { label: 'Поддержка', value: '−70%' },
      { label: 'CSAT', value: '4.8/5' },
    ],
    color: 'cyan',
  },
  {
    icon: Stethoscope,
    industry: 'Медицина',
    title: 'ИИ-агент для клиники',
    description: 'Автоматическая запись на приём, напоминания, предварительная диагностика и обработка результатов.',
    results: [
      { label: 'Записей', value: '+60%' },
      { label: 'Неприходов', value: '−45%' },
      { label: 'Экономия', value: '2 млн/год' },
    ],
    color: 'purple',
  },
  {
    icon: GraduationCap,
    industry: 'Образование',
    title: 'Образовательный ассистент',
    description: 'Персональный тьютор для студентов, проверка заданий, ответы на вопросы и анализ прогресса.',
    results: [
      { label: 'Успеваемость', value: '+35%' },
      { label: 'Вовлечённость', value: '+50%' },
      { label: 'Студентов', value: '5000+' },
    ],
    color: 'cyan',
  },
];

export function Cases() {
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
    <section id="cases" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/5 to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            Кейсы
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Реальные <span className="text-gradient">результаты</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Посмотрите, как ИИ-решения трансформируют бизнес наших клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.title}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.color === 'purple' ? 'from-purple-600/20' : 'from-cyan-600/20'} to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative glass-card rounded-3xl p-8 h-full hover:border-purple-500/40 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${caseItem.color === 'purple' ? 'bg-purple-500/20' : 'bg-cyan-500/20'}`}>
                      <caseItem.icon className={`w-7 h-7 ${caseItem.color === 'purple' ? 'text-purple-400' : 'text-cyan-400'}`} />
                    </div>
                    <div>
                      <span className={`text-sm font-medium ${caseItem.color === 'purple' ? 'text-purple-400' : 'text-cyan-400'}`}>
                        {caseItem.industry}
                      </span>
                      <h3 className="text-xl font-bold text-white">{caseItem.title}</h3>
                    </div>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-gray-500 group-hover:text-purple-400 transition-colors" />
                </div>

                <p className="text-gray-400 mb-8 leading-relaxed">{caseItem.description}</p>

                <div className="grid grid-cols-3 gap-4">
                  {caseItem.results.map((result) => (
                    <div key={result.label} className="text-center p-4 rounded-xl bg-white/5">
                      <div className={`text-2xl font-bold ${caseItem.color === 'purple' ? 'text-purple-400' : 'text-cyan-400'} mb-1`}>
                        {result.value}
                      </div>
                      <div className="text-xs text-gray-500">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
