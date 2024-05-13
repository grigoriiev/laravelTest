import './bootstrap';

import Alpine from 'alpinejs';


window.Alpine = Alpine;

Alpine.start();
document.addEventListener("DOMContentLoaded", function (){



    let trash = document.querySelectorAll('.trash');
    trash.forEach((element, index) => {
        element.addEventListener('click', deleteAttribute)
    })
    let addAttribute = document.querySelector('.add-attribute');
    let elements = document.querySelectorAll('.add-attribute');
    let addAttributeEdit = Array.from(elements).pop();


    function deleteAttribute(e) {
        let element = e.currentTarget.parentElement;
        element.remove()

    }

    let i = 0;

    function add(e) {


        let text = `<div class="center ">
                            <div class=" store-input">
                                <label class="form-label label">Название</label>
                                <input type="text" class="form-control input-small" aria-label="Название"  name="DATA[0][key]" >
                            </div>
                            <div class=" store-input">
                                <label class="form-label label">Значение</label>
                                <input type="text" class="form-control input-small " aria-label="Значение"     name="DATA[0][value]"       >
                            </div>
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="trash">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M5 1.00763C4.77873 1.00763 4.5718 1.02718 4.41331 1.05934C4.33405 1.07543 4.278 1.09245 4.24301 1.1063C4.23589 1.10912 4.23029 1.11155 4.22608 1.11351C4.03349 1.27853 3.75023 1.26 3.57857 1.06535C3.39916 0.861896 3.4096 0.543089 3.60189 0.353268C3.70024 0.256184 3.81839 0.198541 3.90927 0.162562C4.00837 0.123333 4.1191 0.0930514 4.23389 0.0697539C4.46349 0.0231523 4.73209 3.00298e-08 5 0C5.26791 0 5.5365 0.0231522 5.76611 0.0697538C5.8809 0.0930513 5.99163 0.123333 6.09072 0.162562C6.18161 0.198541 6.29975 0.256183 6.3981 0.353268C6.5904 0.543088 6.60084 0.861896 6.42143 1.06534C6.24977 1.26 5.96651 1.27853 5.77392 1.11351C5.76971 1.11155 5.76411 1.10912 5.75698 1.1063C5.722 1.09245 5.66595 1.07543 5.58669 1.05934C5.4282 1.02718 5.22127 1.00763 5 1.00763ZM0.734224 3.37742C0.566693 3.35939 0.344306 3.35878 0 3.35878V2.35114C0.00773271 2.35114 0.0154397 2.35114 0.0231209 2.35114C0.0384594 2.35114 0.053695 2.35114 0.068827 2.35114H9.93117C9.9463 2.35114 9.96154 2.35114 9.97688 2.35114L10 2.35114V3.35878C9.65569 3.35878 9.43331 3.35939 9.26578 3.37742C9.1062 3.39459 9.04998 3.42331 9.02116 3.44369C8.96916 3.48044 8.92452 3.52768 8.88978 3.58269C8.87052 3.61318 8.84338 3.67267 8.82714 3.8415C8.8101 4.01875 8.80952 4.25404 8.80952 4.61832L8.80953 8.51407C8.80955 8.9607 8.80957 9.34552 8.77041 9.65369C8.72844 9.98395 8.6338 10.3005 8.3911 10.5573C8.14841 10.8141 7.84919 10.9142 7.53704 10.9586C7.24577 11 6.88205 11 6.45991 11H3.54009C3.11795 11 2.75423 11 2.46296 10.9586C2.15081 10.9142 1.85159 10.8141 1.6089 10.5573C1.3662 10.3005 1.27156 9.98395 1.22959 9.65369C1.19043 9.34553 1.19045 8.96071 1.19048 8.51408L1.19048 4.61832C1.19048 4.25404 1.1899 4.01875 1.17286 3.8415C1.15663 3.67267 1.12948 3.61318 1.11022 3.58269C1.07548 3.52768 1.03084 3.48044 0.978843 3.44369C0.950021 3.42331 0.893797 3.39459 0.734224 3.37742ZM7.94853 3.35878H2.05147C2.08774 3.48305 2.10797 3.61075 2.12035 3.73952C2.14288 3.97388 2.14287 4.26096 2.14286 4.59386L2.14286 8.48091C2.14286 8.97016 2.14387 9.28641 2.17348 9.51943C2.20125 9.73795 2.24608 9.80645 2.28233 9.8448C2.31858 9.88315 2.38332 9.93058 2.58986 9.95996C2.8101 9.99129 3.10901 9.99236 3.57143 9.99236H6.42857C6.89099 9.99236 7.1899 9.99129 7.41014 9.95996C7.61668 9.93058 7.68142 9.88315 7.71767 9.8448C7.75392 9.80645 7.79875 9.73795 7.82652 9.51943C7.85613 9.28641 7.85714 8.97016 7.85714 8.48091V4.59385C7.85713 4.26096 7.85712 3.97388 7.87965 3.73952C7.89203 3.61075 7.91226 3.48305 7.94853 3.35878ZM3.88889 5.29007C4.15188 5.29007 4.36508 5.51564 4.36508 5.79389V7.55725C4.36508 7.8355 4.15188 8.06107 3.88889 8.06107C3.6259 8.06107 3.4127 7.8355 3.4127 7.55725V5.79389C3.4127 5.51564 3.6259 5.29007 3.88889 5.29007ZM6.11111 5.29007C6.3741 5.29007 6.5873 5.51564 6.5873 5.79389V7.55725C6.5873 7.8355 6.3741 8.06107 6.11111 8.06107C5.84812 8.06107 5.63492 7.8355 5.63492 7.55725V5.79389C5.63492 5.51564 5.84812 5.29007 6.11111 5.29007Z"
                             fill="#C4C4C4" fill-opacity="0.4"/>
                             </svg>                       </div>`;

        document.querySelector('.att-all').insertAdjacentHTML("beforeEnd", text);
        let trash = document.querySelectorAll('.trash');
        trash.forEach((element, index) => {
            element.addEventListener('click', deleteAttribute)
        })

        /*
            let selectNameElement = document.querySelectorAll('input[name="DATA[0][key]"]');
            let selectValueElement = document.querySelectorAll('input[name="DATA[0][value]"]');*/

    }

    addAttribute.addEventListener('click', add)


    function addEdit(e) {


        let text = `<div class="center ">
                            <div class=" store-input">
                                <label class="form-label label">Название</label>
                                <input type="text" class="form-control input-small" aria-label="Название"  name="DATA[0][key]" >
                            </div>
                            <div class=" store-input">
                                <label class="form-label label">Значение</label>
                                <input type="text" class="form-control input-small " aria-label="Значение"     name="DATA[0][value]"       >
                            </div>
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="trash">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M5 1.00763C4.77873 1.00763 4.5718 1.02718 4.41331 1.05934C4.33405 1.07543 4.278 1.09245 4.24301 1.1063C4.23589 1.10912 4.23029 1.11155 4.22608 1.11351C4.03349 1.27853 3.75023 1.26 3.57857 1.06535C3.39916 0.861896 3.4096 0.543089 3.60189 0.353268C3.70024 0.256184 3.81839 0.198541 3.90927 0.162562C4.00837 0.123333 4.1191 0.0930514 4.23389 0.0697539C4.46349 0.0231523 4.73209 3.00298e-08 5 0C5.26791 0 5.5365 0.0231522 5.76611 0.0697538C5.8809 0.0930513 5.99163 0.123333 6.09072 0.162562C6.18161 0.198541 6.29975 0.256183 6.3981 0.353268C6.5904 0.543088 6.60084 0.861896 6.42143 1.06534C6.24977 1.26 5.96651 1.27853 5.77392 1.11351C5.76971 1.11155 5.76411 1.10912 5.75698 1.1063C5.722 1.09245 5.66595 1.07543 5.58669 1.05934C5.4282 1.02718 5.22127 1.00763 5 1.00763ZM0.734224 3.37742C0.566693 3.35939 0.344306 3.35878 0 3.35878V2.35114C0.00773271 2.35114 0.0154397 2.35114 0.0231209 2.35114C0.0384594 2.35114 0.053695 2.35114 0.068827 2.35114H9.93117C9.9463 2.35114 9.96154 2.35114 9.97688 2.35114L10 2.35114V3.35878C9.65569 3.35878 9.43331 3.35939 9.26578 3.37742C9.1062 3.39459 9.04998 3.42331 9.02116 3.44369C8.96916 3.48044 8.92452 3.52768 8.88978 3.58269C8.87052 3.61318 8.84338 3.67267 8.82714 3.8415C8.8101 4.01875 8.80952 4.25404 8.80952 4.61832L8.80953 8.51407C8.80955 8.9607 8.80957 9.34552 8.77041 9.65369C8.72844 9.98395 8.6338 10.3005 8.3911 10.5573C8.14841 10.8141 7.84919 10.9142 7.53704 10.9586C7.24577 11 6.88205 11 6.45991 11H3.54009C3.11795 11 2.75423 11 2.46296 10.9586C2.15081 10.9142 1.85159 10.8141 1.6089 10.5573C1.3662 10.3005 1.27156 9.98395 1.22959 9.65369C1.19043 9.34553 1.19045 8.96071 1.19048 8.51408L1.19048 4.61832C1.19048 4.25404 1.1899 4.01875 1.17286 3.8415C1.15663 3.67267 1.12948 3.61318 1.11022 3.58269C1.07548 3.52768 1.03084 3.48044 0.978843 3.44369C0.950021 3.42331 0.893797 3.39459 0.734224 3.37742ZM7.94853 3.35878H2.05147C2.08774 3.48305 2.10797 3.61075 2.12035 3.73952C2.14288 3.97388 2.14287 4.26096 2.14286 4.59386L2.14286 8.48091C2.14286 8.97016 2.14387 9.28641 2.17348 9.51943C2.20125 9.73795 2.24608 9.80645 2.28233 9.8448C2.31858 9.88315 2.38332 9.93058 2.58986 9.95996C2.8101 9.99129 3.10901 9.99236 3.57143 9.99236H6.42857C6.89099 9.99236 7.1899 9.99129 7.41014 9.95996C7.61668 9.93058 7.68142 9.88315 7.71767 9.8448C7.75392 9.80645 7.79875 9.73795 7.82652 9.51943C7.85613 9.28641 7.85714 8.97016 7.85714 8.48091V4.59385C7.85713 4.26096 7.85712 3.97388 7.87965 3.73952C7.89203 3.61075 7.91226 3.48305 7.94853 3.35878ZM3.88889 5.29007C4.15188 5.29007 4.36508 5.51564 4.36508 5.79389V7.55725C4.36508 7.8355 4.15188 8.06107 3.88889 8.06107C3.6259 8.06107 3.4127 7.8355 3.4127 7.55725V5.79389C3.4127 5.51564 3.6259 5.29007 3.88889 5.29007ZM6.11111 5.29007C6.3741 5.29007 6.5873 5.51564 6.5873 5.79389V7.55725C6.5873 7.8355 6.3741 8.06107 6.11111 8.06107C5.84812 8.06107 5.63492 7.8355 5.63492 7.55725V5.79389C5.63492 5.51564 5.84812 5.29007 6.11111 5.29007Z"
                             fill="#C4C4C4" fill-opacity="0.4"/>
                             </svg>                       </div>`;

        Array.from(document.querySelectorAll('.att-all')).pop().insertAdjacentHTML("beforeEnd", text);
        let trash = document.querySelectorAll('.trash');
        trash.forEach((element, index) => {
            element.addEventListener('click', deleteAttribute)
        })
    }


    addAttributeEdit.addEventListener('click', addEdit)


    let edit = document.querySelector('.edit-block');

    function showEdit(e) {
        if (document.querySelector('.edit-product').classList.contains('hide')) {
            document.querySelector('.edit-product').classList.remove('hide');
        }
        if (!document.querySelector('.show-product').classList.contains('hide')) {
            document.querySelector('.show-product').classList.add('hide');
        }
    }

    edit.addEventListener('click', showEdit)

    function hideEdit(e) {
        if (document.querySelector('.show-product').classList.contains('hide')) {
            document.querySelector('.show-product').classList.remove('hide');
        }
        if (!document.querySelector('.edit-product').classList.contains('hide')) {
            document.querySelector('.edit-product').classList.add('hide');

        }
    }

    let tr = document.querySelectorAll('.table-block-body-th');
    tr.forEach((element, index) => {

        element.addEventListener("click", hideEdit);
    })


    let name = document.querySelector('#name').value;
    let article = document.querySelector('#articulate').value;

    let status = document.querySelector('#status').value;


    let submitStoreForm = document.querySelector('#submitStoreForm');

    function addProduct() {

        let storeForm = document.querySelector('#storeForm')
        let selectNameElement = document.querySelectorAll('input[name="DATA[0][key]"]');
        let selectValueElement = document.querySelectorAll(' input[name="DATA[0][value]"]');
        let arrKey = [];
        let arrValue = [];
        let arrKeyValue = [];
        selectNameElement.forEach((element, index) => {
            arrKey[index] = element.value;

        })
        selectValueElement.forEach((element, index) => {
            arrValue[index] = element.value;

        })

        let matMax = Math.max(selectNameElement.length, selectValueElement.length)
        for (let i = 0; i < matMax; i++) {
            let obj = {'key': arrKey[i], 'value': arrValue[i]}
            arrKeyValue.push(obj)
        }


        console.log(storeForm)
        let form = document.forms[0];
        console.log(form)
        let arrData = {
            'DATA': [

                arrKeyValue
            ]
        }
        let DATA = arrKeyValue

        let name = document.querySelector('#name').value;
        let article = document.querySelector('#articulate').value;

        let status = document.querySelector('#status').value;
        /*console.log(selectValueElement)
        console.log(selectNameElement)
        console.log(arrKey)
        console.log(arrValue)
        console.log(arrKeyValue)
        console.log(arrData)
        console.log(article)
        console.log(name)
        console.log(DATA)*/

        axios.post('products', {
            ARTICLE: article,
            NAME: name,
            STATUS: status,
            DATA,

        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response);

                document.querySelector(".success").insertAdjacentHTML('beforeEnd', "<div class='alert alert-success suceess-custom' role='alert'>" +
                    response.data.message + "</div>")

                let data = '';

                for (let i = 0; i < response.data.product.DATA.length; i++) {
                    data += `<b>` + response.data.product.DATA[i].key + `</b>:` + response.data.product.DATA[i].value + `<br />`
                }
                let status = ""
                if (response.data.product.STATUS == "available") {
                    status = "Доступен"
                } else if (response.data.product.STATUS == "unavailable") {
                    status = "Не доступен"
                }

                document.querySelector(".table-block-body").insertAdjacentHTML("afterbegin", `<tr class="table-block-body-th"
   data-bs-toggle="modal"
   data-bs-target="#exampleModal1"
    data-id="` + response.data.product.ID + `" >` +
                    `<th scope="row">` + response.data.product.ARTICLE +
                    ` </th>` +
                    `<td>` + response.data.product.NAME +
                    `</td>` +
                    `<td>` + status +
                    `</td>` +
                    `<td>` + data + `
                 </td>` +
                    ` </tr`)


                document.querySelector('.table-block-body-th').addEventListener('click', editProduct)

                setTimeout(function () {
                    document.querySelector(".alert.suceess-custom").remove();
                }, 4000)
            })
            .catch(function (error) {

                console.log(error);

                if (error.response && (error.response.status === 403 || error.response.status === 500)) {
                    document.querySelector('.articulate').insertAdjacentHTML("beforeEnd", "<div class='alert alert-danger articale error-custom' role='alert'>" +
                        error.response.data.message + "</div>")

                    console.log(error.message);
                    setTimeout(function () {
                        document.querySelector('.alert.error-custom').remove();
                    }, 4000)

                }


                if (error.response && error.response.status === 422) {
                    if (error.response.data.errors.ARTICLE) {
                        document.querySelector('.articulate').insertAdjacentHTML("beforeEnd", "<div class='alert alert-danger articale error-custom' role='alert'>" +
                            error.response.data.errors.ARTICLE[0] + "</div>")


                        setTimeout(function () {
                            document.querySelector('.alert.articale').remove();
                        }, 4000)
                    }
                    if (error.response.data.errors.NAME) {
                        document.querySelector('.name').insertAdjacentHTML("beforeEnd", "<div class='alert alert-danger name error-custom' role='alert'>" +
                            error.response.data.errors.NAME[0] + "</div>")
                        setTimeout(function () {
                            document.querySelector('.alert.name').remove();
                        }, 4000)
                    }
                }

            });


    }

    submitStoreForm.addEventListener('click', addProduct)

    let submitUpdateForm = document.querySelector('#submitUpdateForm');

    function updateProduct() {

        let updateForm = document.querySelector('#updateForm')
        let selectNameElement = document.querySelectorAll('input[name="DATA[0][key]"]');
        let selectValueElement = document.querySelectorAll(' input[name="DATA[0][value]"]');
        let arrKey = [];
        let arrValue = [];
        let arrKeyValue = [];
        selectNameElement.forEach((element, index) => {
            arrKey[index] = element.value;

        })
        selectValueElement.forEach((element, index) => {
            arrValue[index] = element.value;

        })

        let matMax = Math.max(selectNameElement.length, selectValueElement.length)
        for (let i = 0; i < matMax; i++) {
            let obj = {'key': arrKey[i], 'value': arrValue[i]}
            arrKeyValue.push(obj)
        }


        console.log(updateForm)
        let form = document.forms[1];
        console.log(form)
        let arrData = {
            'DATA': [

                arrKeyValue
            ]
        }
        let DATA = arrKeyValue

        let name = document.querySelector('#nameEdit').value;
        let article = document.querySelector('#articulateEdit').value;

        let status = document.querySelector('#statusEdit').value;
        /* console.log(selectValueElement)
         console.log(selectNameElement)
         console.log(arrKey)
         console.log(arrValue)
         console.log(arrKeyValue)
         console.log(arrData)
         console.log(article)
         console.log(name)
         console.log(DATA)*/
        let dataIdProduct = document.querySelector('#modalEdit').dataset.id;
        axios.put('products/' + dataIdProduct, {
            ARTICLE: article,
            NAME: name,
            STATUS: status,
            DATA,

        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response);

                document.querySelector(".success-Edit").insertAdjacentHTML('beforeEnd', "<div class='alert alert-success suceess-custom' role='alert'>" +
                    response.data.message + "</div>")

                let data = '';

                for (let i = 0; i < response.data.product.DATA.length; i++) {
                    data += `<b>` + response.data.product.DATA[i].key + `</b>:` + response.data.product.DATA[i].value + `<br />`
                }

                document.querySelectorAll('.table-block-body-th').forEach((element, index) => {
                    if (dataIdProduct === element.dataset.id) {
                        element.firstElementChild.textContent = response.data.product.ARTICLE;
                        element.firstElementChild.nextElementSibling.textContent = response.data.product.NAME;
                        if (response.data.product.STATUS === "available") {
                            element.firstElementChild.nextElementSibling.nextElementSibling.textContent = "Доступен"
                        } else if (response.data.product.STATUS === "unavailable") {
                            element.firstElementChild.nextElementSibling.nextElementSibling.textContent = "Не доступен";
                        }
                        //   element.firstElementChild.nextElementSibling.nextElementSibling.textContent = response.data.product.STATUS;
                        element.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = data
                    }

                });

                setTimeout(function () {
                    document.querySelector(".alert.suceess-custom").remove();
                }, 4000)
            })
            .catch(function (error) {

                console.log(error);

                if (error.response && (error.response.status === 403 || error.response.status === 500)) {
                    document.querySelector('.articulateEdit').insertAdjacentHTML("beforeEnd", "<div class='alert alert-danger articale error-custom' role='alert'>" +
                        error.response.data.message + "</div>")


                    setTimeout(function () {
                        document.querySelector('.alert.error-custom').remove();
                    }, 4000)

                }


                if (error.response && error.response.status === 422) {
                    if (error.response.data.errors.ARTICLE) {
                        document.querySelector('.articulateEdit').insertAdjacentHTML("beforeEnd", "<div class='alert alert-danger articale error-custom' role='alert'>" +
                            error.response.data.errors.ARTICLE[0] + "</div>")


                        setTimeout(function () {
                            document.querySelector('.alert.error-custom').remove();
                        }, 4000)
                    }
                    if (error.response.data.errors.NAME) {
                        document.querySelector('.nameEdit').insertAdjacentHTML("beforeEnd", "<div class='alert alert-danger name error-custom' role='alert'>" +
                            error.response.data.errors.NAME[0] + "</div>")
                        setTimeout(function () {
                            document.querySelector('.alert.error-custom').remove();
                        }, 4000)
                    }
                }

            });


    }

    submitUpdateForm.addEventListener('click', updateProduct)


    let trashSmall = document.querySelector('.trash-small');

    function deleteProduct() {

        let dataIdProduct = document.querySelector('#modalEdit').dataset.id;


        axios.delete('products/' + dataIdProduct, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response);
                document.querySelectorAll('.table-block-body-th').forEach((element, index) => {
                    if (dataIdProduct === element.dataset.id) {
                        element.remove()
                    }

                });

            })
            .catch(function (error) {

                console.log(error);


            });
    }


    trashSmall.addEventListener('click', deleteProduct)

    function editProduct(e) {


        let elementCurrent = e.currentTarget;

        let elementCurrentData = elementCurrent.dataset.id


        axios.get('products/' + elementCurrentData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response);

                document.querySelector('.table-product div:nth-child(1)  div:not(.left-tr)').textContent = response.data.product.ARTICLE
                document.querySelector('.table-product div:nth-child(2)  div:not(.left-tr)').textContent = response.data.product.NAME
                if (response.data.product.STATUS === "available") {
                    document.querySelector('.table-product div:nth-child(3)  div:not(.left-tr)').textContent = "Доступен"
                } else if (response.data.product.STATUS === "unavailable") {
                    document.querySelector('.table-product div:nth-child(3)  div:not(.left-tr)').textContent = "Не доступен";
                }
                //  document.querySelector('.table-product div:nth-child(3)  div:not(.left-tr)').textContent = response.data.product.STATUS

                let data = '';

                for (let i = 0; i < response.data.product.DATA.length; i++) {
                    data += `<b>` + response.data.product.DATA[i].key + `</b>:` + response.data.product.DATA[i].value + `<br />`
                }

                document.querySelector('.table-product div:nth-child(4)  div:not(.left-tr)').innerHTML = data
                document.querySelector('#modalEdit').dataset.id = response.data.product.ID
                document.querySelector('.modal-title.fs-5:not(#exampleModalLabel)').textContent = response.data.product.NAME
                document.querySelector('#exampleModalLabel2').textContent = "Редактировать " + response.data.product.NAME;

                document.querySelector('#nameEdit').value = response.data.product.NAME;
                document.querySelector('#articulateEdit').value = response.data.product.ARTICLE;

                if (response.data.product.STATUS == "available") {
                    document.querySelector('#statusEdit').options[0].selected = 'selected'
                } else if (response.data.product.STATUS == "unavailable") {
                    document.querySelector('#statusEdit').options[1].selected = 'selected'
                }


                console.log(response.data.product.DATA)
                document.querySelectorAll('.att-all.edit div.center').forEach((element, index) => {
                    element.remove()
                })
                response.data.product.DATA.forEach((element, index) => {

                    let text = `<div class="center ">
                            <div class=" store-input">
                                <label class="form-label label">Название</label>
                                <input type="text" class="form-control input-small" aria-label="Название"  name="DATA[0][key]" value="` + element.key + `" >
                            </div>
                            <div class=" store-input">
                                <label class="form-label label">Значение</label>
                                <input type="text" class="form-control input-small " aria-label="Значение"     name="DATA[0][value]"    value="` + element.value + `"   >
                            </div>
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="trash">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M5 1.00763C4.77873 1.00763 4.5718 1.02718 4.41331 1.05934C4.33405 1.07543 4.278 1.09245 4.24301 1.1063C4.23589 1.10912 4.23029 1.11155 4.22608 1.11351C4.03349 1.27853 3.75023 1.26 3.57857 1.06535C3.39916 0.861896 3.4096 0.543089 3.60189 0.353268C3.70024 0.256184 3.81839 0.198541 3.90927 0.162562C4.00837 0.123333 4.1191 0.0930514 4.23389 0.0697539C4.46349 0.0231523 4.73209 3.00298e-08 5 0C5.26791 0 5.5365 0.0231522 5.76611 0.0697538C5.8809 0.0930513 5.99163 0.123333 6.09072 0.162562C6.18161 0.198541 6.29975 0.256183 6.3981 0.353268C6.5904 0.543088 6.60084 0.861896 6.42143 1.06534C6.24977 1.26 5.96651 1.27853 5.77392 1.11351C5.76971 1.11155 5.76411 1.10912 5.75698 1.1063C5.722 1.09245 5.66595 1.07543 5.58669 1.05934C5.4282 1.02718 5.22127 1.00763 5 1.00763ZM0.734224 3.37742C0.566693 3.35939 0.344306 3.35878 0 3.35878V2.35114C0.00773271 2.35114 0.0154397 2.35114 0.0231209 2.35114C0.0384594 2.35114 0.053695 2.35114 0.068827 2.35114H9.93117C9.9463 2.35114 9.96154 2.35114 9.97688 2.35114L10 2.35114V3.35878C9.65569 3.35878 9.43331 3.35939 9.26578 3.37742C9.1062 3.39459 9.04998 3.42331 9.02116 3.44369C8.96916 3.48044 8.92452 3.52768 8.88978 3.58269C8.87052 3.61318 8.84338 3.67267 8.82714 3.8415C8.8101 4.01875 8.80952 4.25404 8.80952 4.61832L8.80953 8.51407C8.80955 8.9607 8.80957 9.34552 8.77041 9.65369C8.72844 9.98395 8.6338 10.3005 8.3911 10.5573C8.14841 10.8141 7.84919 10.9142 7.53704 10.9586C7.24577 11 6.88205 11 6.45991 11H3.54009C3.11795 11 2.75423 11 2.46296 10.9586C2.15081 10.9142 1.85159 10.8141 1.6089 10.5573C1.3662 10.3005 1.27156 9.98395 1.22959 9.65369C1.19043 9.34553 1.19045 8.96071 1.19048 8.51408L1.19048 4.61832C1.19048 4.25404 1.1899 4.01875 1.17286 3.8415C1.15663 3.67267 1.12948 3.61318 1.11022 3.58269C1.07548 3.52768 1.03084 3.48044 0.978843 3.44369C0.950021 3.42331 0.893797 3.39459 0.734224 3.37742ZM7.94853 3.35878H2.05147C2.08774 3.48305 2.10797 3.61075 2.12035 3.73952C2.14288 3.97388 2.14287 4.26096 2.14286 4.59386L2.14286 8.48091C2.14286 8.97016 2.14387 9.28641 2.17348 9.51943C2.20125 9.73795 2.24608 9.80645 2.28233 9.8448C2.31858 9.88315 2.38332 9.93058 2.58986 9.95996C2.8101 9.99129 3.10901 9.99236 3.57143 9.99236H6.42857C6.89099 9.99236 7.1899 9.99129 7.41014 9.95996C7.61668 9.93058 7.68142 9.88315 7.71767 9.8448C7.75392 9.80645 7.79875 9.73795 7.82652 9.51943C7.85613 9.28641 7.85714 8.97016 7.85714 8.48091V4.59385C7.85713 4.26096 7.85712 3.97388 7.87965 3.73952C7.89203 3.61075 7.91226 3.48305 7.94853 3.35878ZM3.88889 5.29007C4.15188 5.29007 4.36508 5.51564 4.36508 5.79389V7.55725C4.36508 7.8355 4.15188 8.06107 3.88889 8.06107C3.6259 8.06107 3.4127 7.8355 3.4127 7.55725V5.79389C3.4127 5.51564 3.6259 5.29007 3.88889 5.29007ZM6.11111 5.29007C6.3741 5.29007 6.5873 5.51564 6.5873 5.79389V7.55725C6.5873 7.8355 6.3741 8.06107 6.11111 8.06107C5.84812 8.06107 5.63492 7.8355 5.63492 7.55725V5.79389C5.63492 5.51564 5.84812 5.29007 6.11111 5.29007Z"
                             fill="#C4C4C4" fill-opacity="0.4"/>
                             </svg>                       </div>`;

                    document.querySelector('.att-all.edit').insertAdjacentHTML("beforeEnd", text);


                })


                let trash = document.querySelectorAll('.trash');
                trash.forEach((element, index) => {
                    element.addEventListener('click', deleteAttribute)
                })


            })
            .catch(function (error) {

                console.log(error);


            });

    }


    document.querySelectorAll('.table-block-body-th').forEach((element, index) => {

        element.addEventListener('click', editProduct)


    });

});
