import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { FormEventHandler, useState } from 'react';
import { Store, Eye, EyeOff, Crown, ShoppingBag, User, Mail, Lock, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { LiquidBackground, MarketplaceShapes } from '@/Components/ui/animated-backgrounds';

interface RegisterProps {
    role?: string;
}

const getRoleInfo = (role: string) => {
    switch (role) {
        case 'admin':
            return {
                title: 'Admin',
                description: 'Platform Management & Control',
                icon: Crown,
                color: 'from-purple-500 to-indigo-600',
                features: ['Full platform control', 'User management', 'Analytics & reporting']
            };
        case 'seller':
            return {
                title: 'Seller',
                description: 'Create & Manage Your Store',
                icon: Store,
                color: 'from-emerald-500 to-teal-600',
                features: ['Product management', 'Order tracking', 'Sales analytics']
            };
        case 'buyer':
            return {
                title: 'Buyer',
                description: 'Shop from Multiple Vendors',
                icon: ShoppingBag,
                color: 'from-pink-500 to-rose-600',
                features: ['Browse products', 'Secure checkout', 'Order tracking']
            };
        default:
            return {
                title: 'User',
                description: 'Join Vendorly',
                icon: User,
                color: 'from-purple-500 to-pink-600',
                features: ['Access marketplace', 'Secure platform', 'Great experience']
            };
    }
};

export default function Register({ role = 'buyer' }: RegisterProps) {
    // Ensure role is valid
    const validRole = ['admin', 'seller', 'buyer'].includes(role) ? role : 'buyer';
    
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: validRole
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

    const roleInfo = getRoleInfo(validRole);
    const IconComponent = roleInfo.icon;

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title={`Register as ${roleInfo.title} - Vendorly`} />
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

                {/* Back to Role Selection */}
                <div className="absolute top-6 right-6 z-10">
                    <Link href={route('role.selection')} className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm">Change Role</span>
                    </Link>
                </div>

                {/* Main Content */}
                <div className="w-full max-w-lg relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8"
                    >
                        <Badge className="mb-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-700 border-purple-200">
                            🚀 Join as {roleInfo.title}
                        </Badge>
                        <h1 className="text-3xl font-bold mb-2 marketplace-text-gradient">Create Account</h1>
                        <p className="text-gray-600">
                            {roleInfo.description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card className="border-0 shadow-2xl marketplace-shadow glass-card bg-white/90 backdrop-blur-md">
                            <CardHeader className="text-center pb-6">
                                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${roleInfo.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                                    <IconComponent className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-2xl text-purple-800">
                                    Register as {roleInfo.title}
                                </CardTitle>
                                <CardDescription className="text-gray-600">
                                    Fill in your details to get started
                                </CardDescription>
                                
                                {/* Role Features */}
                                <div className="flex flex-wrap gap-2 justify-center mt-4">
                                    {roleInfo.features.map((feature, index) => (
                                        <Badge key={index} variant="outline" className="text-xs">
                                            {feature}
                                        </Badge>
                                    ))}
                                </div>
                            </CardHeader>
                            
                            <CardContent className="space-y-6">
                                <form onSubmit={submit} className="space-y-4">
                                    {/* Name Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                                            Full Name
                                        </Label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="name"
                                                name="name"
                                                type="text"
                                                value={data.name}
                                                className="pl-10 h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                                                placeholder="Enter your full name"
                                                onChange={(e) => setData('name', e.target.value)}
                                                required
                                                autoFocus
                                            />
                                        </div>
                                        {errors.name && (
                                            <p className="text-sm text-red-600">{errors.name}</p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                            Email Address
                                        </Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={data.email}
                                                className="pl-10 h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                                                placeholder="Enter your email"
                                                onChange={(e) => setData('email', e.target.value)}
                                                required
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="text-sm text-red-600">{errors.email}</p>
                                        )}
                                    </div>

                                    {/* Password Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                                            Password
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="password"
                                                name="password"
                                                type={showPassword ? 'text' : 'password'}
                                                value={data.password}
                                                className="pl-10 pr-10 h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                                                placeholder="Create a secure password"
                                                onChange={(e) => setData('password', e.target.value)}
                                                required
                                            />
                                            <button
                                                type="button"
                                                className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </button>
                                        </div>
                                        {errors.password && (
                                            <p className="text-sm text-red-600">{errors.password}</p>
                                        )}
                                    </div>

                                    {/* Password Confirmation Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="password_confirmation" className="text-sm font-medium text-gray-700">
                                            Confirm Password
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                type={showPasswordConfirmation ? 'text' : 'password'}
                                                value={data.password_confirmation}
                                                className="pl-10 pr-10 h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                                                placeholder="Confirm your password"
                                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                                required
                                            />
                                            <button
                                                type="button"
                                                className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                                                onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                                            >
                                                {showPasswordConfirmation ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </button>
                                        </div>
                                        {errors.password_confirmation && (
                                            <p className="text-sm text-red-600">{errors.password_confirmation}</p>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full marketplace-gradient hover:scale-105 transition-all duration-300 shadow-xl py-6 text-base font-medium"
                                    >
                                        {processing ? (
                                            <div className="flex items-center space-x-2">
                                                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                <span>Creating Account...</span>
                                            </div>
                                        ) : (
                                            <>
                                                Create {roleInfo.title} Account
                                                <IconComponent className="ml-2 w-5 h-5" />
                                            </>
                                        )}
                                    </Button>
                                </form>

                                <div className="text-center pt-4 border-t">
                                    <p className="text-sm text-gray-600">
                                        Already have an account?{' '}
                                        <Link
                                            href={route('login')}
                                            className="text-purple-600 hover:text-purple-800 transition-colors font-medium"
                                        >
                                            Sign in here
                                        </Link>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center mt-8"
                    >
                        <p className="text-xs text-gray-500">
                            By creating an account, you agree to our{' '}
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
