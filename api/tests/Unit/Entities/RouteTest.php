<?php
declare(strict_types=1);

namespace Tests\Unit\Entities;

use App\Entities\Address;
use App\Entities\Route;
use App\Interfaces\AddressInterface;
use Tests\TestCase;

class RouteTest extends TestCase
{
    public function testBasic()
    {
        $id = rand(0, 9999);
        $origin = $this->createMock(AddressInterface::class);
        $destination = $this->createMock(AddressInterface::class);
        $createdAt = new \DateTime();
        $updatedAt = new \DateTime();

        $route = new Route(
            $id = rand(0, 9999),
            $createdAt,
            $updatedAt,
            $origin,
            $destination
        );

        $this->assertSame($route->getId(), $id);
        $this->assertSame($route->getOrigin(), $origin);
        $this->assertSame($route->getDestination(), $destination);
        $this->assertSame($route->getCreatedAt(), $createdAt);
        $this->assertSame($route->getUpdatedAt(), $updatedAt);
    }

}