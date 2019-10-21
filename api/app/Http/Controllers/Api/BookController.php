<?php

namespace App\Http\Controllers\Api;

use App\Http\Filters\BookFilter;
use App\Http\Requests\BookRequest;
use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index(Request $request)
    {
        $filter = app(BookFilter::class);
        $query = Book::query();
        $filterQuery = $query->filtered($filter);
        $book = $filter->hasFilterParameter() ? $filterQuery->get(): $filterQuery->paginate();
        return BookResource::collection($book);
    }

    public function store(BookRequest $request)
    {
        $book = Book::create($request->all());
        $book->refresh();
        return new BookResource($book);
    }

    public function show(Book $book)
    {
        return new BookResource($book);
    }

    public function update(BookRequest $request, Book $book)
    {
        $book->fill($request->all());
        $book->save();
        $book->refresh();
        return new BookResource($book);
    }

    public function destroy(Book $book)
    {
        $book->delete();
        return response()->json([], 204);
    }
}
