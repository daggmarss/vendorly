import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Store, ShieldCheck, ShoppingBag, Crown, Users, BarChart3, Package, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { LiquidBackground, MarketplaceShapes } from '@/Components/ui/animated-backgrounds';

interface RoleData {
    id: string;
    title: string;
    description: string;
    icon: any;
    features: string[];
    color: {
        bg: string;
        border: string;
        text: string;
        icon: string;
    };
    accessibility: string[];
}

const roles: RoleData[] = [
    {
        id: 'admin',
        title: 'Admin',
        description: 'Full platform control and management',
        icon: Crown,
        features: [
            'Manage users and sellers',
            'Approve or reject seller applications',
            'Monitor platform activity',
            'Manage categories and products',
            'Configure commission rates',
            'Platform analytics and reporting'
        ],
        color: {
            bg: 'from-purple-500 to-indigo-600',
            border: 'border-purple-300',
            text: 'text-purple-700',
            icon: 'text-purple-600'
        },
        accessibility: [
            'Full access to admin dashboard',
            'User management capabilities',
            'Platform configuration control',
            'Advanced analytics and reports'
        ]
    },
    {
        id: 'seller',
        title: 'Seller',
        description: 'Create and manage your own store',
        icon: Store,
        features: [
            'Create and manage store',
            'Add, update, and delete products',
            'Track orders and inventory',
            'View sales analytics',
            'Customer communication',
            'Product performance insights'
        ],
        color: {
            bg: 'from-emerald-500 to-teal-600',
            border: 'border-emerald-300',
            text: 'text-emerald-700',
            icon: 'text-emerald-600'
        },
        accessibility: [
            'Store management dashboard',
            'Product catalog management',
            'Order processing system',
            'Sales analytics and reports'
        ]
    },
    {
        id: 'buyer',
        title: 'Buyer',
        description: 'Shop from multiple vendors',
        icon: ShoppingBag,
        features: [
            'Browse products from all stores',
            'Add items to cart',
            'Secure checkout and payments',
            'Track purchases and orders',
            'Leave reviews and ratings',
            'Personalized recommendations'
        ],
        color: {
            bg: 'from-pink-500 to-rose-600',
            border: 'border-pink-300',
            text: 'text-pink-700',
            icon: 'text-pink-600'
        },
        accessibility: [
            'Product browsing and search',
            'Shopping cart and wishlist',
            'Order tracking system',
            'Review and rating system'
        ]
    }
];

export default function RoleSelection() {
    return (
        <>
            <Head title="Choose Your Role - Vendorly" />
            <div className="min-h-screen bg-background text-foreground relative flex items-center justify-center p-4">
                <LiquidBackground />
                <MarketplaceShapes />
                
                {/* Header */}
                <div className="absolute top-6 left-6 z-10">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 marketplace-gradient rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                            <Store className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-purple-700">Vendorly</h1>
                            <p className="text-xs text-purple-600">Multi-Vendor Marketplace</p>
                        </div>
                    </Link>
                </div>

                {/* Main Content */}
                <div className="w-full max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 marketplace-text-gradient">
                            Choose Your Role
                        </h1>
                        
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Select how you'd like to participate in our marketplace ecosystem. 
                            Each role comes with unique features and capabilities.
                        </p>
                    </motion.div>

                    {/* Role Cards */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {roles.map((role, index) => {
                            const IconComponent = role.icon;
                            return (
                                <motion.div
                                    key={role.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="group"
                                >
                                    <Card className={`relative overflow-hidden border-2 ${role.color.border} hover:border-opacity-100 border-opacity-50 transition-all duration-500 bg-white/90 backdrop-blur-sm shadow-xl marketplace-shadow group-hover:shadow-2xl`}>
                                        {/* Gradient Background */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${role.color.bg} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                        
                                        <CardHeader className="text-center pb-4 relative z-10">
                                            <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${role.color.bg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>
                                            <CardTitle className={`text-2xl ${role.color.text} group-hover:scale-105 transition-transform duration-300`}>
                                                {role.title}
                                            </CardTitle>
                                            <CardDescription className="text-gray-600">
                                                {role.description}
                                            </CardDescription>
                                        </CardHeader>
                                        
                                        <CardContent className="space-y-6 relative z-10">
                                            {/* Features */}
                                            <div>
                                                <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                                                    <BarChart3 className="w-4 h-4 mr-2 text-purple-600" />
                                                    Key Features
                                                </h4>
                                                <ul className="space-y-2">
                                                    {role.features.slice(0, 4).map((feature, idx) => (
                                                        <li key={idx} className="flex items-center text-sm text-gray-600">
                                                            <Star className="w-3 h-3 mr-2 text-yellow-500 flex-shrink-0" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                    {role.features.length > 4 && (
                                                        <li className="text-sm text-purple-600 font-medium">
                                                            +{role.features.length - 4} more features...
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>

                                            {/* Accessibility - shown on hover */}
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                // whileHover={{ opacity: 1, height: 'auto' }}
                                                transition={{ duration: 0.3 }}
                                                className="border-t pt-4 group-hover:block hidden"
                                            >
                                                <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                                                    <ShieldCheck className="w-4 h-4 mr-2 text-green-600" />
                                                    Access Level
                                                </h4>
                                                <ul className="space-y-1">
                                                    {role.accessibility.map((access, idx) => (
                                                        <li key={idx} className="flex items-center text-sm text-gray-600">
                                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0" />
                                                            {access}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>

                                            {/* CTA Button */}
                                            <Link href={route('register', { role: role.id })} className="block">
                                                <Button 
                                                    className={`w-full bg-gradient-to-r ${role.color.bg} hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                                                >
                                                    Continue as {role.title}
                                                    <TrendingUp className="ml-2 w-4 h-4" />
                                                </Button>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-center"
                    >
                        <p className="text-sm text-gray-500 mb-4">
                            Already have an account?{' '}
                            <Link href={route('login')} className="text-purple-600 hover:text-purple-800 transition-colors font-medium">
                                Sign in here
                            </Link>
                        </p>
                        <p className="text-xs text-gray-400">
                            By continuing, you agree to our{' '}
                            <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">Terms of Service</a>
                            {' '}and{' '}
                            <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">Privacy Policy</a>
                        </p>
                    </motion.div>
                </div>
            </div>
        </>
    );
}