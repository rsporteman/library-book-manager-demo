<?php
declare(strict_types=1);

namespace Tests\Unit\Entities;

use App\Entities\Auction;
use Tests\TestCase;

class AuctionTest extends TestCase
{
    public function testBasic()
    {
        $id = rand(0, 999);
        $createdAt = new \DateTime();
        $updatedAt = new \DateTime();

        $auction = new Auction(
            $id,
            $createdAt,
            $updatedAt
        );

        $this->assertSame($id, $auction->getId());
        $this->assertSame($createdAt, $auction->getCreatedAt());
        $this->assertSame($updatedAt, $auction->getUpdatedAt());
    }

}