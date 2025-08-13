'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, BadgeCheck, Smartphone, Wallet, Home, Layers, Award,ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LuxuryCompetitiveAdvantage = () => {
  const advantages = [
    {
      icon: ShieldCheck,
      title: "Financial Security",
      ourSolution: "Escrow-protected payments",
      competitors: "No payment protection",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50"
    },
    {
      icon: BadgeCheck,
      title: "Quality Standards",
      ourSolution: "300+ quality checkpoints",
      competitors: "Basic quality checks",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Smartphone,
      title: "Transparency",
      ourSolution: "Real-time project tracking app",
      competitors: "No digital tracking",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Wallet,
      title: "Cost Control",
      ourSolution: "Fixed-price contracts",
      competitors: "Frequent cost overruns",
      color: "text-amber-500",
      bgColor: "bg-amber-50"
    },
    {
      icon: Home,
      title: "Customer Support",
      ourSolution: "Dedicated project managers",
      competitors: "Limited supervision",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Layers,
      title: "Design Options",
      ourSolution: "1000+ customizable plans",
      competitors: "Limited template designs",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Award,
      title: "Experience",
      ourSolution: "25+ years in construction",
      competitors: "New/unverified teams",
      color: "text-[#F05A29]",
      bgColor: "bg-[#F05A29]/10"
    }
  ];

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#F05A29] px-4 py-2 text-sm font-medium mb-6 tracking-wider">
            COMPETITIVE EDGE
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Why <span className="font-serif italic">Varghese</span> Stands Apart
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver superior construction services through innovation and proven expertise
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="space-y-8">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6"
              >
                {/* Feature Title */}
                <div className="md:col-span-3 flex items-start">
                  <div className={`p-3 rounded-lg ${item.bgColor} ${item.color}`}>
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium ml-3 mt-1">{item.title}</h3>
                </div>

                {/* Our Solution */}
                <div className="md:col-span-5 bg-white p-6 border-l-4 border-[#F05A29] shadow-sm">
                  <p className="text-gray-700">{item.ourSolution}</p>
                </div>

                {/* Competitors */}
                <div className="md:col-span-4 bg-gray-50 p-6 border-l-4 border-gray-300 shadow-sm">
                  <p className="text-gray-500">{item.competitors}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Button
            size="lg"
            className="bg-white border border-[#F05A29] text-[#F05A29] hover:bg-[#e04a20] hover:text-white px-10 py-6 text-lg font-light tracking-wider group rounded-none "
          >
            Begin Your Luxury Project
            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LuxuryCompetitiveAdvantage;