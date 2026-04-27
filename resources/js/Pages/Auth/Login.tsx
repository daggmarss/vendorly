import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { motion } from 'framer-motion';
import { Store, ArrowRight, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { LiquidBackground, MarketplaceShapes } from '@/Components/ui/animated-backgrounds';
import { cn } from '@/lib/utils';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    const [showPassword, setShowPassword] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Login to Vendorly" />
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
                <div className="w-full max-w-md relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8"
                    >
                        <h1 className="text-3xl font-bold mb-2 marketplace-text-gradient">Sign In</h1>
                        <p className="text-gray-600">
                            Access your marketplace dashboard and continue your journey
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card className="border-0 shadow-2xl marketplace-shadow glass-card bg-white/90 backdrop-blur-md">
                            <CardHeader className="text-center pb-6">
                                <CardTitle className="text-2xl text-purple-800">Welcome Back!</CardTitle>
                                <CardDescription className="text-gray-600">
                                    Sign in to your account to access your marketplace
                                </CardDescription>
                            </CardHeader>
                            
                            <CardContent className="space-y-6">
                                {status && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="p-4 bg-green-50 border border-green-200 rounded-lg"
                                    >
                                        <p className="text-sm font-medium text-green-600">{status}</p>
                                    </motion.div>
                                )}

                                <form onSubmit={submit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={data.email}
                                                className={cn(
                                                    "w-full pl-10 pr-4 py-3 border rounded-lg bg-white/50 backdrop-blur-sm transition-all duration-200",
                                                    "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
                                                    "placeholder:text-muted-foreground",
                                                    errors.email ? "border-red-500" : "border-border"
                                                )}
                                                placeholder="Enter your email"
                                                autoComplete="username"
                                                autoFocus
                                                onChange={(e) => setData('email', e.target.value)}
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="text-sm text-red-600">{errors.email}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="password" className="text-sm font-medium text-foreground">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                            <input
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                value={data.password}
                                                className={cn(
                                                    "w-full pl-10 pr-12 py-3 border rounded-lg bg-white/50 backdrop-blur-sm transition-all duration-200",
                                                    "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
                                                    "placeholder:text-muted-foreground",
                                                    errors.password ? "border-red-500" : "border-border"
                                                )}
                                                placeholder="Enter your password"
                                                autoComplete="current-password"
                                                onChange={(e) => setData('password', e.target.value)}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                        {errors.password && (
                                            <p className="text-sm text-red-600">{errors.password}</p>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <label className="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={data.remember}
                                                onChange={(e) => setData('remember', e.target.checked)}
                                                className="w-4 h-4 rounded border-border text-primary focus:ring-primary/50"
                                            />
                                            <span className="text-sm text-muted-foreground">Remember me</span>
                                        </label>

                                        {canResetPassword && (
                                            <Link
                                                href={route('password.request')}
                                                className="text-sm text-primary hover:text-primary/80 transition-colors"
                                            >
                                                Forgot password?
                                            </Link>
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
                                                <span>Signing in...</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center space-x-2">
                                                <span>Sign In</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        )}
                                    </Button>
                                </form>

                                <div className="text-center pt-6 border-t border-border/50">
                                    <p className="text-sm text-muted-foreground">
                                        Don't have an account?{' '}
                                        <Link
                                            href={route('register')}
                                            className="text-primary hover:text-primary/80 font-medium transition-colors"
                                        >
                                            Create Account
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
                        <p className="text-xs text-muted-foreground">
                            By signing in, you agree to our{' '}
                            <a href="#" className="text-primary hover:text-primary/80 transition-colors">Terms of Service</a>
                            {' '}and{' '}
                            <a href="#" className="text-primary hover:text-primary/80 transition-colors">Privacy Policy</a>
                        </p>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
