<?php

namespace App\Http\Requests;

use App\Models\Category;
use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
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
            'name' => 'required|min:1|max:255|unique:' . (new Category())->getTable() . ',name' . $id,
            'description' => 'required|min:1|max:255',
        ];
    }

    private function getIdForUniqueValidation()
    {
        $route = $this->route('category');
        return ($route && $route->id) ? $id = ",{$route->id}" : $id = '';
    }
}
