import { motion } from "framer-motion";

export const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50" />
      
      {/* Liquid Ether Effect */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(59, 130, 246, 0.3) 70%, transparent 100%)",
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(16, 185, 129, 0.3) 70%, transparent 100%)",
        }}
        animate={{
          x: [0, -40, 60, 0],
          y: [0, 50, -20, 0],
          scale: [1, 0.9, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(245, 158, 11, 0.2) 70%, transparent 100%)",
        }}
        animate={{
          x: [0, 40, -50, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      />
    </div>
  );
};

export const ShapeGridBackground = () => {
  const shapes = Array.from({ length: 25 }, (_, i) => i);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-50">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50" />
      
      {shapes.map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${(i * 7 + 10) % 90}%`,
            top: `${(i * 11 + 15) % 80}%`,
            background: i % 4 === 0 
              ? 'linear-gradient(45deg, #8b5cf6, #a855f7)' 
              : i % 4 === 1
              ? 'linear-gradient(45deg, #3b82f6, #6366f1)'
              : i % 4 === 2
              ? 'linear-gradient(45deg, #ec4899, #f472b6)'
              : 'linear-gradient(45deg, #10b981, #34d399)',
          }}
          animate={{
            scale: [0, 1.2, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
        />
      ))}

      {/* Enhanced Geometric shapes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute border-2"
          style={{
            width: `${20 + i * 8}px`,
            height: `${20 + i * 8}px`,
            left: `${(i * 12 + 15) % 85}%`,
            top: `${(i * 18 + 10) % 75}%`,
            borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '25%' : '8px',
            borderColor: i % 4 === 0 
              ? 'rgba(139, 92, 246, 0.3)' 
              : i % 4 === 1
              ? 'rgba(59, 130, 246, 0.3)'
              : i % 4 === 2
              ? 'rgba(236, 72, 153, 0.3)'
              : 'rgba(16, 185, 129, 0.3)',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export const MarketplaceShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Shopping cart icons */}
      <motion.div
        className="absolute top-20 left-10 w-6 h-6"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-60 shadow-lg" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 w-8 h-8"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full opacity-50 shadow-lg" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-10 w-4 h-4"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded opacity-40 shadow-md" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-5 h-5"
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-45 shadow-lg" />
      </motion.div>

      <motion.div
        className="absolute top-2/3 left-1/2 w-3 h-3"
        animate={{
          x: [0, 30, 0],
          rotate: [0, 360, 720],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded opacity-35 shadow-md" />
      </motion.div>
    </div>
  );
};