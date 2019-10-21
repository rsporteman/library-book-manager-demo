<?php

namespace App\Providers;

use App\Events\Registered;
use App\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{

    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
//        UserWasCreatedEvent::class => [
//            SendWelcomeMailListener::class,
//        ]
    ];

    public function boot()
    {
        parent::boot();
    }
}
