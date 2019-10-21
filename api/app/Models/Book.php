<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Mnabialek\LaravelEloquentFilter\Traits\Filterable;

class Book extends Model
{
    use Filterable;
    protected $fillable = ['isbn', 'title', 'author', 'description', 'category_id'];

    public function category()
    {
        return $this->belongsTo(Book::class);
    }
}
