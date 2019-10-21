<?php
declare(strict_types=1);

namespace Tests\Unit\Entities;

use App\Entities\Address;
use App\Interfaces\CityInterface;
use Tests\TestCase;

class AddressTest extends TestCase
{
    public function testBasic(): void
    {
        $id = rand(0, 9999);
        $createdAt = new \DateTime('2018-08-08 00:00:00');
        $updatedAt = new \DateTime('2018-08-10 00:00:00');
        $city = $this->createMock(CityInterface::class);
        $number = '00950';
        $zipCode = '00.000-00';
        $neighborhood = "book center";
        $lineOne = "Main Avenue";
        $lineTwo = "next to Wallmart";
        $observation = "only works during business hours";

        $address = new Address(
            $id,
            $createdAt,
            $updatedAt,
            $city,
            $number,
            $zipCode,
            $neighborhood,
            $lineOne,
            $lineTwo,
            $observation
        );

        $this->assertSame($address->getId(), $id);
        $this->assertSame($address->getCreatedAt(), $createdAt);
        $this->assertSame($address->getUpdatedAt(), $updatedAt);
        $this->assertSame($address->getCity(), $city);
        $this->assertSame($address->getNumber(), $number);
        $this->assertSame($address->getZipCode(), $zipCode);
        $this->assertSame($address->getNeighborhood(), $neighborhood);
        $this->assertSame($address->getLineOne(), $lineOne);
        $this->assertSame($address->getLineTwo(), $lineTwo);
    }
}
