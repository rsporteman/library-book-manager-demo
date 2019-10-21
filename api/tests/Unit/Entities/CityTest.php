<?php
declare(strict_types=1);

namespace Tests\Unit\Entities;

use App\Entities\City;
use App\Interfaces\StateInterface;
use Tests\TestCase;

class CityTest extends TestCase
{
    public function testBasic()
    {
        $id = rand(0, 999);
        $createdAt = new \DateTime();
        $updatedAt = new \DateTime();
        $state = $this->createMock(StateInterface::class);
        $name = 'Porto Alegre';

        $city = new City(
            $id,
            $createdAt,
            $updatedAt,
            $state,
            $name
        );

        $this->assertSame($id, $city->getId());
        $this->assertSame($createdAt, $city->getCreatedAt());
        $this->assertSame($updatedAt, $city->getUpdatedAt());
        $this->assertSame($state, $city->getState());
        $this->assertSame($name, $city->getName());
    }
}