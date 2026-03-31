import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Готовы обсудить <br /><span className="text-indigo-500">ваш проект?</span></h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-md">
              Напишите мне, и я предложу оптимальное решение под ваши бизнес-задачи. Обычно я отвечаю в течение нескольких часов.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email</div>
                  <a href="mailto:hello@devexpert.pro" className="text-lg text-white font-medium hover:text-indigo-400 transition-colors">hello@devexpert.pro</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Telegram</div>
                  <a href="https://t.me/your_telegram" className="text-lg text-white font-medium hover:text-indigo-400 transition-colors">@your_developer_tag</a>
                </div>
              </div>
            </div>

            <div className="p-8 bg-indigo-600 rounded-3xl text-white">
              <div className="text-2xl font-bold mb-2">Бесплатная консультация</div>
              <p className="text-indigo-100 mb-0 opacity-80">Проанализирую вашу задачу и составлю предварительный план реализации бесплатно.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Как вас зовут?</label>
                  <input 
                    type="text" 
                    placeholder="Иван"
                    className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Контакт (Telegram/Email)</label>
                  <input 
                    type="text" 
                    placeholder="@username"
                    className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Тип проекта</label>
                <select className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none">
                  <option>Landing Page</option>
                  <option>Веб-приложение</option>
                  <option>Автоматизация бизнеса</option>
                  <option>Другое</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">О проекте</label>
                <textarea 
                  rows={4}
                  placeholder="Расскажите вкратце о вашей задаче..."
                  className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all transform hover:translate-y-[-2px] active:translate-y-0"
              >
                Отправить заявку
                <Send size={18} />
              </button>
              <p className="text-center text-[10px] text-slate-600 uppercase tracking-widest font-bold">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
