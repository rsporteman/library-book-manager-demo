<?php
declare(strict_types=1);

namespace Tests\Unit\Entities;

use App\Entities\State;
use App\Interfaces\CountryInterface;
use Tests\TestCase;

class StateTest extends TestCase
{
    public function testBasic()
    {
        $id = rand(0, 999);
        $createdAt = new \DateTime();
        $updatedAt = new \DateTime();
        $country = $this->createMock(CountryInterface::class);
        $name = 'Rio Grande do Sul';
        $abbreviation = 'RS';

        $state = new State(
            $id,
            $createdAt,
            $updatedAt,
            $country,
            $name,
            $abbreviation,
        );

        $this->assertSame($id, $state->getId());
        $this->assertSame($createdAt, $state->getCreatedAt());
        $this->assertSame($updatedAt, $state->getUpdatedAt());
        $this->assertSame($country, $state->getCountry());
        $this->assertSame($name, $state->getName());
        $this->assertSame($abbreviation, $state->getAbbreviation());
    }

}