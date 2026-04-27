import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Store, TrendingUp, Users, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { GradientBackground, FloatingElements, StatsCounter } from '@/Components/ui/marketplace-animations';
import { ShapeGridBackground } from '@/Components/ui/animated-backgrounds';
import { MarketplaceFeatures, UserRoles } from '@/Components/ui/marketplace-components';

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {

    return (
        <>
            <Head title="Vendorly - Multi-Vendor Marketplace Platform" />
            <div className="min-h-screen bg-background text-foreground relative">
                <GradientBackground />
                <ShapeGridBackground />
                <FloatingElements />
                
                {/* Header */}
                <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-border/20">
                    <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
                        <motion.div 
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center">
                                <Store className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-primary">Vendorly</h1>
                                <p className="text-xs text-muted-foreground">Multi-Vendor Marketplace</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="flex items-center space-x-4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {auth.user ? (
                                <Link href={route('dashboard')}>
                                    <Button className="bg-gradient-to-r from-primary to-primary/80">
                                        Dashboard
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                            ) : (
                                <div className="flex space-x-3">
                                    <Link href={route('login')}>
                                        <Button variant="outline">Login</Button>
                                    </Link>
                                    <Link href={route('register')}>
                                        <Button className="bg-gradient-to-r from-primary to-primary/80">
                                            Get Started
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </motion.div>
                    </nav>
                </header>

                {/* Hero Section */}
                <section className="relative z-10 container mx-auto px-6 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge className="mb-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-700 border-purple-200 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300">
                            🚀 Next-Generation E-commerce Platform
                        </Badge>
                        
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 marketplace-text-gradient">
                            The Future of
                            <br />
                            Multi-Vendor Commerce
                        </h1>
                        
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Empower sellers, delight buyers, and scale your marketplace with Vendorly. 
                            A complete platform inspired by industry leaders like Shopee and Lazada.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link href={route('role.selection')}>
                                <Button size="lg" className="marketplace-gradient hover:scale-105 transition-all duration-300 shadow-xl marketplace-shadow">
                                    Start Your Store Today
                                    <Store className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Button size="lg" variant="outline" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 hover:scale-105 transition-all duration-300">
                                Explore Marketplace
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>

                        {/* Stats */}
                        <motion.div 
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <StatsCounter value="1000+" label="Active Sellers" delay={0} />
                            <StatsCounter value="50K+" label="Happy Buyers" delay={0.1} />
                            <StatsCounter value="100K+" label="Products Listed" delay={0.2} />
                            <StatsCounter value="99.9%" label="Uptime" delay={0.3} />
                        </motion.div>
                    </motion.div>
                </section>

                {/* Features Section */}
                <section className="relative z-10 container mx-auto px-6 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 marketplace-text-gradient">Powerful Features for Every User</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Everything you need to build, manage, and scale a successful online marketplace
                        </p>
                    </motion.div>

                    <MarketplaceFeatures />
                </section>

                {/* User Roles Section */}
                <section className="relative z-10 container mx-auto px-6 py-20 bg-muted/30 rounded-3xl my-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">Built for Every Type of User</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Whether you're selling, buying, or managing, Vendorly has the tools you need
                        </p>
                    </motion.div>

                    <UserRoles />
                </section>

                {/* Why Choose Vendorly Section */}
                <section className="relative z-10 container mx-auto px-6 py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold mb-6 marketplace-text-gradient">Why Choose Vendorly?</h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Built with modern technology and inspired by successful marketplaces, 
                                Vendorly offers enterprise-grade features with startup-friendly simplicity.
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    { text: "🔐 Enterprise-grade security and compliance", color: "text-purple-600" },
                                    { text: "📊 Advanced analytics and reporting tools", color: "text-blue-600" }, 
                                    { text: "🚀 Lightning-fast performance and scalability", color: "text-green-600" },
                                    { text: "💰 Flexible commission and pricing models", color: "text-yellow-600" },
                                    { text: "🔄 Real-time inventory and order management", color: "text-pink-600" },
                                    { text: "🌐 Mobile-responsive and PWA ready", color: "text-indigo-600" }
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <CheckCircle className={`w-5 h-5 ${feature.color} flex-shrink-0`} />
                                        <span className={`font-medium ${feature.color}`}>{feature.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <Card className="p-8 border-0 shadow-2xl marketplace-shadow glass-card bg-gradient-to-br from-white/90 via-purple-50/50 to-pink-50/50 backdrop-blur-sm">
                                <CardHeader className="text-center pb-6">
                                    <div className="w-16 h-16 mx-auto mb-4 marketplace-gradient rounded-2xl flex items-center justify-center shadow-lg">
                                        <TrendingUp className="w-8 h-8 text-white" />
                                    </div>
                                    <CardTitle className="text-2xl text-purple-800">Ready to Scale?</CardTitle>
                                    <CardDescription className="text-base text-gray-600">
                                        Join thousands of successful merchants already using Vendorly
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <div className="flex items-center justify-center space-x-1 mb-6">
                                        {[1,2,3,4,5].map((star) => (
                                            <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        <span className="ml-2 text-gray-600 font-medium">4.9/5 rating</span>
                                    </div>
                                    <Link href={route('role.selection')}>
                                        <Button size="lg" className="w-full marketplace-gradient hover:scale-105 transition-all duration-300 shadow-xl">
                                            Start Your Free Trial
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-3">
                                        No credit card required • Setup in 5 minutes
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="relative z-10 container mx-auto px-6 py-12 mt-20 border-t border-border/50">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <motion.div 
                            className="flex items-center space-x-2 mb-4 md:mb-0"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center">
                                <Store className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-semibold text-primary">Vendorly</span>
                        </motion.div>
                        
                        <motion.div
                            className="text-sm text-muted-foreground"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Built with Laravel v{laravelVersion} & React • Powered by PHP v{phpVersion}
                        </motion.div>
                    </div>
                </footer>
            </div>
        </>
    );
}
