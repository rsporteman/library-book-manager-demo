<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;
use Mnabialek\LaravelEloquentFilter\Filters\SimpleQueryFilter;

class BookFilter extends SimpleQueryFilter
{
    protected $simpleFilters = ['search'];
    protected $simpleSorts = ['title'];

    protected function applySearch($value)
    {
        $this->query
            ->where('title', 'LIKE', "%$value%")
            ->orWhere('author', 'LIKE', "%$value%");
    }

    public function hasFilterParameter(){
        $contains = $this->parser->getFilters()->contains(function ($filter){
           return $filter->getField() === 'search' && empty($filter->getValue());
        });
        return $contains;
    }
}
