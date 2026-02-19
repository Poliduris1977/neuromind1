import { useEffect, useRef, useState } from 'react';
import { Check, TrendingUp, Clock, Users, Code2 } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Рост эффективности',
    value: '3x',
    description: 'В среднем наши клиенты увеличивают эффективность операций в 3 раза',
  },
  {
    icon: Clock,
    title: 'Экономия времени',
    value: '80%',
    description: 'Автоматизация рутинных задач освобождает время сотрудников',
  },
  {
    icon: Users,
    title: 'Удержание клиентов',
    value: '+45%',
    description: 'Улучшение качества обслуживания повышает лояльность',
  },
  {
    icon: Code2,
    title: 'Интеграции',
    value: '50+',
    description: 'Готовые интеграции с популярными сервисами и CRM',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Анализ',
    description: 'Изучаем ваши бизнес-процессы и определяем точки автоматизации',
  },
  {
    number: '02',
    title: 'Проектирование',
    description: 'Создаём архитектуру решения и согласовываем детали',
  },
  {
    number: '03',
    title: 'Разработка',
    description: 'Строим и обучаем ИИ-модели под ваши задачи',
  },
  {
    number: '04',
    title: 'Внедрение',
    description: 'Запускаем решение и обучаем вашу команду',
  },
];

export function WhyChooseUs() {
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
    <section id="why-us" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            Почему мы
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Результаты, которые <span className="text-gradient">говорят сами за себя</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="glass-card rounded-3xl p-6 text-center h-full hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">{benefit.value}</div>
                <div className="text-white font-semibold mb-2">{benefit.title}</div>
                <div className="text-gray-400 text-sm">{benefit.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Как мы <span className="text-gradient">работаем</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="glass rounded-2xl p-6 relative z-10">
                  <div className="text-5xl font-bold text-purple-500/20 mb-4">{step.number}</div>
                  <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-16 glass rounded-3xl p-8 sm:p-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Готовы автоматизировать ваш бизнес?
              </h3>
              <p className="text-gray-400">
                Бесплатная консультация и аудит ваших процессов
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-sm">Аудит за 1 день</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-sm">Чёткая смета</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-sm">Гарантия результата</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
