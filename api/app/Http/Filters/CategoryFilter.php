<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;
use Mnabialek\LaravelEloquentFilter\Filters\SimpleQueryFilter;

class CategoryFilter extends SimpleQueryFilter
{
    protected $simpleFilters = ['search'];
    protected $simpleSorts = ['name'];

    protected function applySearch($value)
    {
        $this->query
            ->where('name', 'LIKE', "%$value%");
    }

    public function hasFilterParameter(){
        $contains = $this->parser->getFilters()->contains(function ($filter){
           return $filter->getField() === 'search' && empty($filter->getValue());
        });
        return $contains;
    }
}
