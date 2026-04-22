<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Seller\DashboardController as SellerDashboardController;
use App\Http\Controllers\Admin\SellerController as AdminSellerController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/dashboard', function () {
    $user = auth()->user();

    if ($user->isAdmin()) {
        return redirect()->route('admin.dashboard');
    } elseif ($user->isSeller()) {
        return redirect()->route('seller.dashboard');
    } else {
        return redirect()->route('buyer.dashboard');
    }
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Dashboard redirects based on role
    // Route::get('/dashboard', function () {
    //     $user = auth()->user();

    //     return match ($user->role) {
    //         'admin' => redirect()->route('admin.dashboard'),
    //         'seller' => redirect()->route('seller.dashboard'),
    //         'buyer' => redirect()->route('buyer.dashboard'),
    //         'default' => redirect()->route('/')
    //     };
    // });

    // Admnin Routes
    Route::middleware(['role:admin'])->prefix('admin')->name('admin.')->group(function () {
        Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');

        // Seller management
        Route::get('/sellers', [AdminSellerController::class, 'index'])->name('sellers.index');
        Route::get('/sellers/{seller}', [AdminSellerController::class, 'show'])->name('sellers.show');
        Route::patch('/sellers/{seller}/approve', [AdminSellerController::class, 'approve'])->name('sellers.approve');
        Route::patch('/sellers/{seller}/reject', [AdminSellerController::class, 'reject'])->name('sellers.reject');
        Route::patch('/sellers/{seller}/suspend', [AdminSellerController::class, 'suspend'])->name('sellers.suspend');
    });

    // Seller routes
    Route::middleware(['role:seller'])->prefix('seller')->name('seller.')->group(function () {
        Route::get('/dashboard', [SellerDashboardController::class, 'index'])->name('dashboard');
        Route::get('/setup', [SellerDashboardController::class, 'setup'])->name('setup');
        Route::post('/setup', [SellerDashboardController::class, 'store'])->name('setup.store');
    });

    // Buyer routes
    Route::middleware(['role:buyer'])->prefix('buyer')->name('buyer.')->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Buyer/Dashboard');
        })->name('dashboard');
    });
});

require __DIR__.'/auth.php';
