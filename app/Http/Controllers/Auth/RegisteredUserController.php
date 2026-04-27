<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(Request $request): Response
    {
        $role = $request->query('role', 'buyer'); // Default to buyer if no role specified
        
        // Validate role
        if (!in_array($role, ['admin', 'seller', 'buyer'])) {
            $role = 'buyer';
        }
        

        return Inertia::render('Auth/Register', [
            'role' => $role
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => 'required|string|in:admin,seller,buyer',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'is_active' => true,
            'email_verified_at' => now(), // Auto-verify for demo purposes
        ]);

        // Create seller record if registering as seller
        if ($request->role === 'seller') {
            $user->seller()->create([
                'store_name' => $request->name . "'s Store",
                'store_description' => 'Welcome to my store!',
                'status' => 'pending', // Pending admin approval
                'commission_rate' => 5.00, // Default 5% commission
            ]);
        }

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
