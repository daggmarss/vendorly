import AdminLayout from "@/Layouts/AdminLayout";
import { Order, Seller } from "@/types";
import { Head } from "@inertiajs/react";

interface AdminDashboardProps {
    stats: {
        total_users: number;
        total_sellers: number;
        pending_sellers: number;
        approved_sellers: number;
        total_products: number;
        active_products: number;
        total_orders: number;
        pending_orders: number;
        total_revenue: number;
    };

    recent_orders: Order[];
    recent_sellers: Seller[];
}

export default function AdminDashboard({ stats, recent_orders, recent_sellers }: AdminDashboardProps) {
    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                                            <span className="text-white text-sm font-medium">{stats.total_users}</span>
                                        </div>
                                    </div>
                                    <div className="ml-15 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">Total Users</dt>
                                            <dd className="text-lg font-medium text-gray-900">{stats.total_users}</dd>
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
                                            <span className="text-white text-sm font-medium">{stats.total_sellers}</span>
                                        </div>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">Total Sellers</dt>
                                            <dd className="text-lg font-medium text-gray-900">{stats.total_sellers}</dd>
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
                                            <span className="text-white text-sm font-medium">{stats.pending_sellers}</span>
                                        </div>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">Pending Sellers</dt>
                                            <dd className="text-lg font-medium text-gray-900">{stats.pending_sellers}</dd>
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
                                            <span className="text-white text-sm font-medium">${stats.total_revenue}</span>
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
                    </div>

                    {/* Recent Activity */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                                        {recent_orders.map((order) => (
                                            <div key={order.id} className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">{order.order_number}</p>
                                                    <p className="text-sm text-gray-500">{order.user?.name}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-medium text-gray-900">${order.total_amount}</p>
                                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                        order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                                                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-gray-100 text-gray-800'
                                                    }`}>
                                                        {order.status}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Pending Sellers */}
                        <div className="bg-white shadow rounded-lg">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900">Pending Seller Applications</h3>
                            </div>
                            <div className="px-6 py-4">
                                {recent_sellers.length === 0 ? (
                                    <p className="text-gray-500">No pending applications</p>
                                ) : (
                                    <div className="space-y-4">
                                        {recent_sellers.map((seller) => (
                                            <div key={seller.id} className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">{seller.store_name}</p>
                                                    <p className="text-sm text-gray-500">{seller.user?.name}</p>
                                                </div>
                                                <div>
                                                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                        {seller.status}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}