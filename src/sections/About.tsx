import { useEffect, useRef, useState } from 'react';
import { MapPin, Award, Users2, Target } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Фокус на результат',
    description: 'Мы измеряем успех реальными метриками вашего бизнеса',
  },
  {
    icon: Award,
    title: 'Экспертиза',
    description: 'Команда с опытом в ML, NLP и бизнес-автоматизации',
  },
  {
    icon: Users2,
    title: 'Партнёрство',
    description: 'Работаем как часть вашей команды, а не просто подрядчики',
  },
];

const techStack = [
  'OpenAI GPT-4',
  'Claude',
  'LangChain',
  'Python',
  'TensorFlow',
  'PyTorch',
  'Node.js',
  'PostgreSQL',
  'Docker',
  'AWS',
];

export function About() {
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
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
              О компании
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              NeuroMind — <span className="text-gradient">ИИ-агентство</span> из Санкт-Петербурга
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Мы создаём интеллектуальные решения, которые меняют способ ведения бизнеса. 
              Наша команда объединяет экспертизу в искусственном интеллекте, 
              машинном обучении и понимание реальных бизнес-процессов.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Работаем с компаниями по всей России, помогая им автоматизировать рутину, 
              улучшать обслуживание клиентов и принимать решения на основе данных.
            </p>

            <div className="flex items-center gap-3 p-4 rounded-xl glass mb-8">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">Санкт-Петербург, Россия</span>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-gradient mb-1">5+</div>
                <div className="text-sm text-gray-400">Лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-1">200+</div>
                <div className="text-sm text-gray-400">Проектов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-1">30+</div>
                <div className="text-sm text-gray-400">Специалистов</div>
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Наши ценности</h3>
              <div className="space-y-6">
                {values.map((value) => (
                  <div key={value.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{value.title}</h4>
                      <p className="text-gray-400 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Технологический стек</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 text-sm hover:bg-purple-500/20 hover:text-purple-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
