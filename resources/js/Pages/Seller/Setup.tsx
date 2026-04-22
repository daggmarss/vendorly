// resources/js/Pages/Seller/Setup.tsx

import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function SellerSetup() {
    const { data, setData, post, processing, errors } = useForm({
        store_name: '',
        store_description: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('seller.setup.store'));
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Seller Store Setup</h2>}
        >
            <Head title="Store Setup" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="max-w-xl">
                                <section>
                                    <header>
                                        <h2 className="text-lg font-medium text-gray-900">
                                            Set Up Your Store
                                        </h2>
                                        <p className="mt-1 text-sm text-gray-600">
                                            Complete your seller profile to start selling on Vendorly.
                                        </p>
                                    </header>

                                    <form onSubmit={submit} className="mt-6 space-y-6">
                                        <div>
                                            <InputLabel htmlFor="store_name" value="Store Name" />
                                            <TextInput
                                                id="store_name"
                                                className="mt-1 block w-full"
                                                value={data.store_name}
                                                onChange={(e) => setData('store_name', e.target.value)}
                                                required
                                                isFocused
                                                autoComplete="organization"
                                            />
                                            <InputError className="mt-2" message={errors.store_name} />
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="store_description" value="Store Description" />
                                            <textarea
                                                id="store_description"
                                                className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                                rows={4}
                                                value={data.store_description}
                                                onChange={(e) => setData('store_description', e.target.value)}
                                                required
                                                placeholder="Describe your store and what you sell..."
                                            />
                                            <InputError className="mt-2" message={errors.store_description} />
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <PrimaryButton disabled={processing}>
                                                {processing ? 'Setting Up...' : 'Complete Setup'}
                                            </PrimaryButton>
                                        </div>
                                    </form>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}