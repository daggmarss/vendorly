<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;

    public function test_admin_can_access_admin_dashboard(): void
    {
        $admin = User::factory()->admin()->create();

        $response = $this
            ->actingAs($admin)
            ->get('/admin/dashboard');

        $response->assertOk();
    }

    public function test_seller_can_access_seller_dashboard(): void
    {
        $seller = User::factory()->seller()->create();

        $response = $this
            ->actingAs($seller)
            ->get('/seller/dashboard');

        $response->assertOk();
    }

    public function test_buyer_cannot_access_admin_dashboard(): void
    {
        $buyer = User::factory()->buyer()->create();

        $response = $this
            ->actingAs($buyer)
            ->get('/admin/dashboard');

        $response->assertStatus(403);
    }
}
