<?php

use App\Models\Book;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $table = (new Book())->getTable();
        DB::table($table)->delete();
        DB::table($table)->insert([
            ['id' => 1, 'category_id'=> 1, 'isbn' => 8576572990, 'title' => 'Guerra do Velho',  'author' => 'Petê Rissatti', 'description' => 'A humanidade finalmente chegou à era das viagens interestelares. A má notícia é que há poucos planetas habitáveis disponíveis – e muitos alienígenas lutando por eles. Para proteger a Terra e também conquistar novos territórios, a raça humana conta com tecnologias inovadoras e com a habilidade e a disposição das FCD - Forças Coloniais de Defesa. Mas, para se alistar, é necessário ter mais de 75 anos. John Perry vai aceitar esse desafio, e ele tem apenas uma vaga ideia do que pode esperar.'],
            ['id' => 2, 'category_id'=> 1, 'isbn' => 8532520669, 'title' => 'O conto da aia', 'author' => 'Margaret Atwood', 'description' => 'O romance distópico O conto da aia, de Margaret Atwood, se passa num futuro muito próximo e tem como cenário uma república onde não existem mais jornais, revistas, livros nem filmes. As universidades foram extintas. Também já não há advogados, porque ninguém tem direito a defesa.'],
            ['id' => 3, 'category_id'=> 2, 'isbn' => 8555460840, 'title' => 'Witcher. A Maldição dos Corvos', 'author' => 'Paul Tobin', 'description' => 'No mundo obscuro e bravo da série de videogame de sucesso, Geralt e Ciri se envolvem em uma brutal história de vingança, em que um velho inimigo ressurge e cria um monstro para matá-lo. Nesse universo implacável, o que parece ser uma simples missão de resgate torna-se mais perigosa e complicada, e nada é como parece ser. The Witcher: A Maldição dos Corvos.'],
            ['id' => 4, 'category_id'=> 3, 'isbn' => 8576082675, 'title' => 'Código limpo', 'author' => 'Robert C. Martin', 'description' => 'Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito. O especialista em software, Robert C. Martin, apresenta um paradigma com \'Código limpo - Habilidades Práticas do Agile Software.\' Aprenda a ler códigos e descubra o que está correto e errado neles. Reavalie seus valores profissionais e seu comprometimento com o seu ofício.'],
        ]);
    }
}
