import { motion } from "framer-motion";

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Shopping Bag */}
      <motion.div
        className="absolute top-20 right-10 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-30 shadow-lg"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Floating Store Icon */}
      <motion.div
        className="absolute bottom-32 left-16 w-6 h-6 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full opacity-40 shadow-lg"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Shopping Cart */}
      <motion.div
        className="absolute top-1/2 left-8 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-sm opacity-35 shadow-md"
        animate={{
          y: [0, -25, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Product Box */}
      <motion.div
        className="absolute bottom-20 right-20 w-5 h-5 bg-gradient-to-r from-pink-400 to-violet-500 rounded opacity-30 shadow-lg"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      
      {/* New marketplace elements */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-25"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded opacity-30"
        animate={{
          x: [0, 15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
};

export const GradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50" />
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)
          `,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            linear-gradient(45deg, transparent 30%, rgba(147, 51, 234, 0.1) 50%, transparent 70%),
            linear-gradient(-45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)
          `,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export const StatsCounter = ({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
    >
      <motion.div
        className="text-3xl font-bold text-primary mb-2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.3, type: "spring", stiffness: 200 }}
      >
        {value}
      </motion.div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </motion.div>
  );
};