<?php

namespace App\Http\Requests;

use App\Models\Book;
use Illuminate\Foundation\Http\FormRequest;

class BookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->getIdForUniqueValidation();
        return [
            'isbn' => 'required|min:1|max:255|unique:' . (new Book())->getTable() . ',isbn' . $id,
            'title' => 'required|min:1|max:255',
            'author' => 'required|min:1|max:255',
            'description' => 'required|min:5|max:1000',
            'category_id' => 'required|numeric'
        ];
    }

    private function getIdForUniqueValidation()
    {
        $route = $this->route('book');
        return ($route && $route->id) ? $id = ",{$route->id}" : $id = '';
    }
}
