// resources/js/Pages/Seller/Dashboard.tsx

import { Head } from '@inertiajs/react';
import SellerLayout from '@/Layouts/SellerLayout';
import { Seller, OrderItem } from '@/types';

interface SellerDashboardProps {
    seller: Seller;
    stats: {
        total_products: number;
        active_products: number;
        total_orders: number;
        pending_orders: number;
        total_revenue: number;
        monthly_revenue: number;
    };
    recent_orders: OrderItem[];
}

export default function SellerDashboard({ seller, stats, recent_orders }: SellerDashboardProps) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'approved': return 'bg-green-100 text-green-800';
            case 'rejected': return 'bg-red-100 text-red-800';
            case 'suspended': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <SellerLayout>
            <Head title="Seller Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
                        <div className="mt-2 flex items-center space-x-4">
                            <span className="text-lg text-gray-600">{seller.store_name}</span>
                            <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(seller.status)}`}>
                                {seller.status}
                            </span>
                        </div>
                    </div>

                    {/* Store Status Alert */}
                    {seller.status === 'pending' && (
                        <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-md p-4">
                            <div className="flex">
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-yellow-800">
                                        Your store application is pending approval
                                    </h3>
                                    <div className="mt-2 text-sm text-yellow-700">
                                        <p>We're reviewing your application. You'll be notified once it's approved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {seller.status === 'rejected' && seller.rejection_reason && (
                        <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
                            <div className="flex">
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-red-800">
                                        Your store application was rejected
                                    </h3>
                                    <div className="mt-2 text-sm text-red-700">
                                        <p>{seller.rejection_reason}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                                            <span className="text-white text-sm font-medium">P</span>
                                        </div>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">Total Products</dt>
                                            <dd className="text-lg font-medium text-gray-900">{stats.total_products}</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                                            <span className="text-white text-sm font-medium">O</span>
                                        </div>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">Total Orders</dt>
                                            <dd className="text-lg font-medium text-gray-900">{stats.total_orders}</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                                            <span className="text-white text-sm font-medium">$</span>
                                        </div>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">Total Revenue</dt>
                                            <dd className="text-lg font-medium text-gray-900">${stats.total_revenue}</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                                            <span className="text-white text-sm font-medium">M</span>
                                        </div>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">Monthly Revenue</dt>
                                            <dd className="text-lg font-medium text-gray-900">${stats.monthly_revenue}</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Orders */}
                    <div className="bg-white shadow rounded-lg">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
                        </div>
                        <div className="px-6 py-4">
                            {recent_orders.length === 0 ? (
                                <p className="text-gray-500">No recent orders</p>
                            ) : (
                                <div className="space-y-4">
                                    {recent_orders.map((orderItem) => (
                                        <div key={orderItem.id} className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{orderItem.product_name}</p>
                                                <p className="text-sm text-gray-500">Qty: {orderItem.quantity}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-medium text-gray-900">${orderItem.total_price}</p>
                                                <p className="text-sm text-gray-500">{orderItem.created_at}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </SellerLayout>
    );
}