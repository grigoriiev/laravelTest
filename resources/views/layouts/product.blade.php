<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!-- Scripts -->
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
</head>
<body>
<div id="app">

    <main>
        @yield('content')
    </main>
</div>
</body>
<!-- Modal -->
<div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable  ">
        <div class="modal-content modal-window">

            <div class="modal-body ">
                <div class=" modalHeader">
                    <h3 class="modal-title fs-5" id="exampleModalLabel">Добавить продукт</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         class="bi bi-x-lg" viewBox="0 0 16 16" style="width: 30px; height: 30px" type="button"
                         data-bs-dismiss="modal" aria-label="Close">
                        <path
                            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>

                <form class="row  needs-validation" novalidate id="storeForm">
                    @csrf
                    <div class="articulate">
                        <label for="articulate" class="form-label label">Артикул</label>
                        <div class="input-group">

                            <input type="text" class="form-control input-modal" id="articulate" name="ARTICLE">
                        </div>
                    </div>

                    <div class="name">
                        <label for="name" class="form-label label">Название</label>
                        <div class="input-group">

                            <input type="text" class="form-control input-modal" id="name" name="NAME">
                        </div>
                    </div>
                    <div class="">
                        <label for="status" class="form-label label">Статус</label>
                        <select class="form-select  input-modal" aria-label="Default select example" id="status"
                                name="STATUS">
                            <option selected value="available" class="select">Доступен</option>
                            <option value="unavailable" class="select">Не доступен</option>

                        </select>
                    </div>
                    <div class="success">

                    </div>
                    <div class="att">
                        Атрибуты
                    </div>
                    <div class="att-all">
                    </div>
                    <div class="add-attribute">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 class="bi bi-plus plus" viewBox="0 0 16 16">
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                            </svg>
                            <abbr class="attribute">Добавить атрибут</abbr></p>
                    </div>
                    <div class="">
                        <button type="button" class="button-modal" id="submitStoreForm">Добавить</button>
                    </div>
                </form>
            </div>

        </div>

    </div>
</div>


<!-- Modal 1 -->
<div class="modal fade " id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable  ">
        <div data-id="" class="modal-content modal-window" id="modalEdit">

            <div class="modal-body show-product">
                <div class=" modalHeader">

                    <h3 class="modal-title fs-5"></h3>

                    <div class="modalBlock">
                        <div class="edit-block"


                        >
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="edit">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M8.97011 5.02981L9.50002 4.49991C10.0523 3.94762 10.0523 3.05219 9.50002 2.49991C8.94773 1.94762 8.0523 1.94762 7.50002 2.49991L6.95753 3.0424C7.4188 3.88305 8.11726 4.57587 8.97011 5.02981ZM5.50209 4.49783L2.8564 7.14353C2.43134 7.56859 2.21881 7.78112 2.07907 8.04221C1.93934 8.30331 1.88039 8.59804 1.7625 9.18749L1.6471 9.76447C1.58058 10.0971 1.54732 10.2634 1.64193 10.358C1.73654 10.4526 1.90284 10.4193 2.23545 10.3528L2.23545 10.3528L2.81243 10.2374L2.81244 10.2374C3.40189 10.1195 3.69661 10.0606 3.95771 9.92085C4.2188 9.78112 4.43132 9.5686 4.85636 9.14356L4.85638 9.14354L4.8564 9.14353L7.51082 6.4891C6.71004 5.96895 6.02669 5.29005 5.50209 4.49783Z"
                                      fill="#C4C4C4" fill-opacity="0.7"/>
                            </svg>
                        </div>
                        <div class="edit-trash"
                             data-bs-dismiss="modal" aria-label="Close">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="trash-small">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M5 1.00763C4.77873 1.00763 4.5718 1.02718 4.41331 1.05934C4.33405 1.07543 4.278 1.09245 4.24301 1.1063C4.23589 1.10912 4.23029 1.11155 4.22608 1.11351C4.03349 1.27853 3.75023 1.26 3.57857 1.06535C3.39916 0.861896 3.4096 0.543089 3.60189 0.353268C3.70024 0.256184 3.81839 0.198541 3.90927 0.162562C4.00837 0.123333 4.1191 0.0930514 4.23389 0.0697539C4.46349 0.0231523 4.73209 3.00298e-08 5 0C5.26791 0 5.5365 0.0231522 5.76611 0.0697538C5.8809 0.0930513 5.99163 0.123333 6.09072 0.162562C6.18161 0.198541 6.29975 0.256183 6.3981 0.353268C6.5904 0.543088 6.60084 0.861896 6.42143 1.06534C6.24977 1.26 5.96651 1.27853 5.77392 1.11351C5.76971 1.11155 5.76411 1.10912 5.75698 1.1063C5.722 1.09245 5.66595 1.07543 5.58669 1.05934C5.4282 1.02718 5.22127 1.00763 5 1.00763ZM0.734224 3.37742C0.566693 3.35939 0.344306 3.35878 0 3.35878V2.35114C0.00773271 2.35114 0.0154397 2.35114 0.0231209 2.35114C0.0384594 2.35114 0.053695 2.35114 0.068827 2.35114H9.93117C9.9463 2.35114 9.96154 2.35114 9.97688 2.35114L10 2.35114V3.35878C9.65569 3.35878 9.43331 3.35939 9.26578 3.37742C9.1062 3.39459 9.04998 3.42331 9.02116 3.44369C8.96916 3.48044 8.92452 3.52768 8.88978 3.58269C8.87052 3.61318 8.84338 3.67267 8.82714 3.8415C8.8101 4.01875 8.80952 4.25404 8.80952 4.61832L8.80953 8.51407C8.80955 8.9607 8.80957 9.34552 8.77041 9.65369C8.72844 9.98395 8.6338 10.3005 8.3911 10.5573C8.14841 10.8141 7.84919 10.9142 7.53704 10.9586C7.24577 11 6.88205 11 6.45991 11H3.54009C3.11795 11 2.75423 11 2.46296 10.9586C2.15081 10.9142 1.85159 10.8141 1.6089 10.5573C1.3662 10.3005 1.27156 9.98395 1.22959 9.65369C1.19043 9.34553 1.19045 8.96071 1.19048 8.51408L1.19048 4.61832C1.19048 4.25404 1.1899 4.01875 1.17286 3.8415C1.15663 3.67267 1.12948 3.61318 1.11022 3.58269C1.07548 3.52768 1.03084 3.48044 0.978843 3.44369C0.950021 3.42331 0.893797 3.39459 0.734224 3.37742ZM7.94853 3.35878H2.05147C2.08774 3.48305 2.10797 3.61075 2.12035 3.73952C2.14288 3.97388 2.14287 4.26096 2.14286 4.59386L2.14286 8.48091C2.14286 8.97016 2.14387 9.28641 2.17348 9.51943C2.20125 9.73795 2.24608 9.80645 2.28233 9.8448C2.31858 9.88315 2.38332 9.93058 2.58986 9.95996C2.8101 9.99129 3.10901 9.99236 3.57143 9.99236H6.42857C6.89099 9.99236 7.1899 9.99129 7.41014 9.95996C7.61668 9.93058 7.68142 9.88315 7.71767 9.8448C7.75392 9.80645 7.79875 9.73795 7.82652 9.51943C7.85613 9.28641 7.85714 8.97016 7.85714 8.48091V4.59385C7.85713 4.26096 7.85712 3.97388 7.87965 3.73952C7.89203 3.61075 7.91226 3.48305 7.94853 3.35878ZM3.88889 5.29007C4.15188 5.29007 4.36508 5.51564 4.36508 5.79389V7.55725C4.36508 7.8355 4.15188 8.06107 3.88889 8.06107C3.6259 8.06107 3.4127 7.8355 3.4127 7.55725V5.79389C3.4127 5.51564 3.6259 5.29007 3.88889 5.29007ZM6.11111 5.29007C6.3741 5.29007 6.5873 5.51564 6.5873 5.79389V7.55725C6.5873 7.8355 6.3741 8.06107 6.11111 8.06107C5.84812 8.06107 5.63492 7.8355 5.63492 7.55725V5.79389C5.63492 5.51564 5.84812 5.29007 6.11111 5.29007Z"
                                      fill="#C4C4C4" fill-opacity="0.7"/>
                            </svg>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             class="bi bi-x-lg close-button" viewBox="0 0 16 16" style="width: 30px; height: 30px"
                             type="button"
                             data-bs-dismiss="modal" aria-label="Close">
                            <path
                                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                    </div>
                </div>
                <div class="table-product">
                    <div>
                        <div class="left-tr">
                            Артикул
                        </div>

                        <div>

                        </div>
                    </div>
                    <div>
                        <div class="left-tr">
                            Название
                        </div>
                        <div>

                        </div>
                    </div>
                    <div>
                        <div class="left-tr">
                            Статус
                        </div>
                        <div>

                        </div>
                    </div>
                    <div>
                        <div class="left-tr">
                            Статус
                        </div>
                        <div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="modal-body hide edit-product">
                <div class=" modalHeader">
                    <h3 class="modal-title fs-5 a" id="exampleModalLabel2"></h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         class="bi bi-x-lg" viewBox="0 0 16 16" style="width: 30px; height: 30px" type="button"
                         data-bs-dismiss="modal" aria-label="Close">
                        <path
                            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>
                <form class="row  needs-validation" novalidate id="updateForm">
                    <div class="articulateEdit">
                        <label for="articulate" class="form-label label">Артикул</label>
                        <div class="input-group">

                            <input type="text" class="form-control input-modal" id="articulateEdit"
                                   value="">
                        </div>
                    </div>

                    <div class="nameEdit">
                        <label for="name" class="form-label label">Название</label>
                        <div class="input-group">

                            <input type="text" class="form-control input-modal" id="nameEdit"
                                   value="">
                        </div>
                    </div>
                    <div class="">
                        <label for="status" class="form-label label">Статус</label>
                        <select class="form-select  input-modal" aria-label="Default select example" id="statusEdit">

                            <option selected value="available" class="select">Доступен</option>
                            <option value="unavailable" class="select">Не доступен</option>

                        </select>
                    </div>
                    <div class="success-Edit">

                    </div>
                    <div class="att">
                        Атрибуты
                    </div>
                    <div class="att-all edit">


                    </div>
                    <div class="add-attribute">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 class="bi bi-plus plus" viewBox="0 0 16 16">
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                            </svg>
                            <abbr class="attribute">Добавить атрибут</abbr></p>
                    </div>
                    <div class="">
                        <button type="button" id="submitUpdateForm" class="button-modal">Сохранить</button>
                    </div>
                </form>
            </div>


        </div>

    </div>
</div>


</html>

