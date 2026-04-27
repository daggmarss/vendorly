import { motion } from "framer-motion";
import { ShoppingBag, Store, Users, TrendingUp, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
        <CardHeader className="text-center pb-2">
          <motion.div
            className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-white"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {icon}
          </motion.div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center pt-0">
          <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const RoleCard = ({ role, features, color, delay = 0 }: {
  role: string;
  features: string[];
  color: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`} />
        <CardHeader>
          <CardTitle className="text-xl mb-2">{role}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + (index * 0.1) }}
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const MarketplaceFeatures = () => {
  const features = [
    {
      icon: <Store className="w-6 h-6" />,
      title: "Multi-Vendor Support",
      description: "Enable multiple sellers to create their own stores and manage products independently"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Smart Shopping Cart",
      description: "Advanced cart system with real-time updates and seamless checkout experience"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics for sellers and admins to track performance and growth"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Payments",
      description: "Integrated secure payment processing with multiple payment gateway support"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Management",
      description: "Role-based access control with detailed user management and permissions"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Updates",
      description: "Live notifications for orders, inventory changes, and important marketplace events"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};

export const UserRoles = () => {
  const roles = [
    {
      role: "🛍️ Buyers",
      features: [
        "Browse products from multiple sellers",
        "Smart cart and wishlist management",
        "Order tracking and history",
        "Product reviews and ratings",
        "Secure checkout process"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      role: "🏪 Sellers", 
      features: [
        "Create and manage your store",
        "Product catalog management",
        "Order processing and fulfillment", 
        "Sales analytics and insights",
        "Inventory management tools"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      role: "🛠️ Admins",
      features: [
        "Platform management and oversight",
        "User and seller verification",
        "Commission and fee management",
        "Platform analytics and reporting",
        "Content moderation tools"
      ],
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {roles.map((role, index) => (
        <RoleCard
          key={index}
          role={role.role}
          features={role.features}
          color={role.color}
          delay={index * 0.2}
        />
      ))}
    </div>
  );
};