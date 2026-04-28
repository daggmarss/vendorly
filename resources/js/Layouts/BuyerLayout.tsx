import { User } from "@/types";
import { Link, usePage } from "@inertiajs/react";

interface BuyerLayoutProps {
    children: React.ReactNode;
}

export default function BuyerLayout({ children }: BuyerLayoutProps) {
    const { auth } = usePage<{ auth: { user: User } }>().props;

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="text-xl font-bold text-green-600">
                                Vendorly Shop
                            </Link>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-700">
                                Welcome, {auth.user.name}
                            </span>
                            <Link
                                href="/logout"
                                method="post"
                                className="text-sm text-gray-500 hover:text-gray-700"
                            >
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex">
                {/* Sidebar */}
                <div className="w-64 bg-white shadow-sm min-h-screen">
                    <nav className="mt-8 px-4">
                        <div className="space-y-2">
                            <Link
                                href={route('buyer.dashboard')}
                                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href={route('buyer.products.index')}
                                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
                            >
                                Browse Products
                            </Link>
                            <Link
                                href={route('buyer.cart.index')}
                                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
                            >
                                My Cart
                            </Link>
                            <Link
                                href={route('buyer.orders.index')}
                                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
                            >
                                My Orders
                            </Link>
                            <Link
                                href={route('buyer.reviews.index')}
                                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
                            >
                                My Reviews
                            </Link>
                        </div>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8">
                    {children}
                </div>
            </div>
        </div>
    );
}