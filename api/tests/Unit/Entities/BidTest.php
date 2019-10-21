<?php
declare(strict_types=1);

namespace Tests\Unit\Entities;

use App\Entities\Bid;
use Tests\TestCase;

class BidTest extends TestCase
{
    public function testBasic()
    {
        $id = rand(0, 999);
        $createdAt = new \DateTime();
        $updatedAt = new \DateTime();
        $price = (float) rand(0, 999)/7;

        $bid = new Bid(
            $id,
            $createdAt,
            $updatedAt,
            $price,
        );

        $this->assertSame($id, $bid->getId());
        $this->assertSame($createdAt, $bid->getCreatedAt());
        $this->assertSame($updatedAt, $bid->getUpdatedAt());
        $this->assertSame($price, $bid->getPrice());
    }
}