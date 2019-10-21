<?php

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $table = (new Category())->getTable();
        DB::table($table)->delete();
        DB::table($table)->insert([
            ['id' => 1, 'name' => 'Ficção', 'description' => 'Livros de Ficção e Fantasia'],
            ['id' => 2, 'name' => 'HQ', 'description' => 'Quadrinhos'],
            ['id' => 3, 'name' => 'Programação', 'description' => 'Livros técnicos sobre programação'],
        ]);
    }
}
