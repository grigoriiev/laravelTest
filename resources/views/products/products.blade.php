@extends('layouts.product')

@section('content')
    <div class="container-fluid">
        <div class="row ">
            <div class="col-2 aside-row">
                <aside class="aside">
                    <div class="logo">
                        <div class="logo-block">
                            <img src="{{asset('storage/logo.png')}}" alt="logo">
                        </div>
                        <div class="logo-slogan">Enterprise <br>
                            Resource <br>
                            Planning
                        </div>
                    </div>
                    <ul class="main-menu">
                        <li class="main-menu_item">
                            Продукты
                        </li>
                    </ul>

                </aside>
            </div>


            <div class="col-8  menu ">
                <div class="row ">

                </div>
                <div class="row justify-content-start align-content-center table-block menu ">
                    <div class="col-12 no-space">
                        <ul class=" nav nav-underline nav-menu  ">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">ПРОДУКТЫ</a>
                            </li>

                        </ul>
                    </div>
                    <div class="col-8 main-table">
                        <table class="table">
                            <thead>
                            <tr class="head-tr">
                                <th scope="col">АРТИКУЛ</th>
                                <th scope="col">НАЗВАНИЕ</th>
                                <th scope="col">СТАТУС</th>
                                <th scope="col">АТРИБУТЫ</th>
                            </tr>
                            </thead>
                            <tbody class="table-block-body">
                            @foreach($products as $product)
                                <tr class="table-block-body-th" data-bs-toggle="modal" data-bs-target="#exampleModal1"
                                    data-id="{{ $product->ID ?? '' }}">
                                    <th scope="row">
                                        {{ $product->ARTICLE ?? '' }}
                                    </th>
                                    <td>
                                        {{ $product->NAME ?? '' }}
                                    </td>
                                    <td>
                                        @if ($product->STATUS === "available")
                                            Доступен
                                        @elseif ($product->STATUS ==="unavailable")
                                            Не доступен
                                        @else
                                        @endif
                                    </td>

                                    <td>

                                        @foreach ($product->DATA as  $property)
                                            <b>{{ $property['key'] }}</b>: {{$property['value'] }}<br/>
                                        @endforeach
                                    </td>
                                </tr>
                            @endforeach

                            </tbody>
                        </table>

                    </div>
                </div>

            </div>

            <div class="col-2  header-menu flex-wrap">

                <div class="row menu right">

                    <div class="logo-author ">
                        Иванов Иван Иванович &nbsp; &nbsp;
                    </div>

                </div>


                <button type="button" class="btn btn-primary button-add" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                    Добавить
                </button>


            </div>

        </div>


    </div>

@endsection
