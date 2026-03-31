import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Иван Сергеев',
    position: 'CEO, TechFlow SaaS',
    content: 'Работа превзошла ожидания. Разработчик глубоко вник в бизнес-процессы и предложил решение, которое сэкономило нам 30% времени на обработку заказов. Рекомендую как профи.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80'
  },
  {
    name: 'Мария Волкова',
    position: 'Маркетинг-директор, GreenLife',
    content: 'Лендинг получился очень стильным и быстрым. Конверсия выросла в 1.5 раза по сравнению со старым сайтом. Все сроки были соблюдены, коммуникация на высоте.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
  },
  {
    name: 'Алексей Петров',
    position: 'Основатель, CraftStore',
    content: 'Разработали сложный интернет-магазин с интеграцией 1С. Чистый код, отличная архитектура. Сейчас продолжаем сотрудничество по поддержке проекта.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-4">Отзывы</h2>
          <h3 className="text-4xl font-bold text-white tracking-tight">Что говорят клиенты</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl relative group hover:border-indigo-500/50 transition-all"
            >
              <Quote className="absolute top-6 right-8 text-indigo-500/10 group-hover:text-indigo-500/20 transition-colors" size={60} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed italic">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border-2 border-slate-800" />
                <div>
                  <div className="font-bold text-white text-sm">{item.name}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">{item.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
