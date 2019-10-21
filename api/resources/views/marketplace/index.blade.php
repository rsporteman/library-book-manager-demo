@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Marketplace</div>

                <div class="card-body">
                    @foreach($marketplace->getMarketcards() as $marketcard)
                        R$ {{ $marketcard->getValue() }}
                    @endforeach;
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
