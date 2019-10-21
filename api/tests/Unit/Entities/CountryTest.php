<?php
declare(strict_types=1);

namespace Tests\Unit\Entities;

use App\Entities\Country;
use Tests\TestCase;

class CountryTest extends TestCase
{
    public function testBasic()
    {
        $id = rand(0, 999);
        $createdAt = new \DateTime();
        $updatedAt = new \DateTime();
        $name = 'Brasil';

        $country = new Country(
            $id,
            $createdAt,
            $updatedAt,
            $name
        );

        $this->assertSame($id, $country->getId());
        $this->assertSame($createdAt, $country->getCreatedAt());
        $this->assertSame($updatedAt, $country->getUpdatedAt());
        $this->assertSame($name, $country->getName());
    }
}