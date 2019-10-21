<?php

namespace App\Http\Resources;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "isbn" => $this->isbn,
            "title"=>  $this->title,
            "author"=>  $this->author,
            "description"=>  $this->description,
            "category" => CategoryResource::make(Category::where(['id' => $this->category_id])->withTrashed()->first()),
            "created_at"=> $this->created_at,
            "updated_at"=> $this->updated_at
        ];
        return parent::toArray($request);
    }
}
