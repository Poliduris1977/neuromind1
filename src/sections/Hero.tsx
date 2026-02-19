import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Sparkles, Cpu } from 'lucide-react';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(8, 9, 12, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`;
        ctx.fill();

        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 150)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(180deg, #08090c 0%, #0d1117 100%)' }}
      />

      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-gray-300">ИИ-решения для бизнеса в Санкт-Петербурге</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Создаём </span>
          <span className="text-gradient">интеллектуальных</span>
          <br />
          <span className="text-white">агентов для вашего бизнеса</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Чат-боты, ИИ-ассистенты и автономные агенты, которые оптимизируют процессы, 
          повышают эффективность и масштабируют ваш бизнес
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-6 text-lg font-medium glow-purple transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Обсудить проект
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-500/30 text-white hover:bg-purple-500/10 px-8 py-6 text-lg font-medium transition-all duration-300"
            onClick={() => scrollToSection('services')}
          >
            Наши услуги
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300">
            <Bot className="w-10 h-10 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">150+</div>
            <div className="text-sm text-gray-400">Чат-ботов создано</div>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300">
            <Cpu className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">50+</div>
            <div className="text-sm text-gray-400">ИИ-агентов внедрено</div>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-10 h-10 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">98%</div>
            <div className="text-sm text-gray-400">Довольных клиентов</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
