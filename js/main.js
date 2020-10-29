// calcular.onclick = function(e) {
//     e.preventDefault()
//     var form = document.addForm
//     let tipo = parseInt(document.getElementById('tipo').value)
//     let cantidad = document.getElementById('cantidad').value
//     let precioTipo = 0
//     let tipoNombre = ""
//     const expresiones = {
//         nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
//         correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//         telefono: /^\d{9}$/ // 7 a 14 numeros.
//     }
//     switch (tipo) {
//         case 2:
//             precioTipo = 6700
//             tipoNombre = 'Salar'
//             break
//         case 3:
//             precioTipo = 8900
//             tipoNombre = 'Coho'
//             break
//         case 4:
//             precioTipo = 6300
//             tipoNombre = 'Trucha'
//             break
//     }
//     let subTotal = precioTipo * cantidad
//     let iva = subTotal * 0.19
//     let total = subTotal + iva
//     if (!expresiones.nombre.test(form.txt_cliente.value)) {
//         document.getElementById('alerta').innerHTML = '<div class=" alert card-panel red lighten-2 white-text">Ingrese un Cliente valido (solo texto)</div>'
//         form.txt_cliente.focus()
//     } else if (!expresiones.correo.test(form.txt_correo.value)) {
//         document.getElementById('alerta').innerHTML = '<div class="card-panel red lighten-2 white-text">Ingrese un Correo valido</div>'
//         form.txt_correo.focus()
//     } else if (!expresiones.telefono.test(form.txt_telefono.value)) {
//         document.getElementById('alerta').innerHTML = '<div class="card-panel red lighten-2 white-text">Ingrese un Telefono de 9 digitos</div>'
//         form.txt_telefono.focus()
//     } else if (precioTipo == 0) {
//         document.getElementById('alerta').innerHTML = '<div class="card-panel red lighten-2 white-text">Ingrese un Tipo de salmóm </div>'
//         form.tipo.focus()
//     } else if (cantidad == 0) {
//         document.getElementById('alerta').innerHTML = '<div class="card-panel red lighten-2 white-text">Ingrese una Cantidad </div>'
//         form.cantidad.focus()
//     } else {
//         document.getElementById('tipo-salmon').innerHTML = '<h6 class="right-align">Tipo: ' + tipoNombre + ' <br>Precio Kilo: $' + precioTipo + '</h6>'
//         document.getElementById('cantidad-salmon').innerHTML = '<h6 class="right-align">Cantidad: ' + cantidad + '</h6>'
//         document.getElementById('subTotal').innerHTML = '<h6 class="right-align">SubTotal: $' + subTotal + '</h6>'
//         document.getElementById('iva').innerHTML = '<h6 class="right-align">IVA: $' + iva + '</h6>'
//         document.getElementById('Total').innerHTML = '<h6 class="right-align">Total a pagar: $' + total + '</h6>'
//         document.getElementById('alerta').innerHTML = ''
//     }
//     inputs.forEach((input) => {
//         input.addEventListener('keyup', validarForm)
//         input.addEventListener('blur', validarForm)
//     })
// }

calcular.onclick = function(e) {
    e.preventDefault()
    var form = document.addForm
    let tipo = parseInt(document.getElementById('tipo').value)
    let cantidad = document.getElementById('cantidad').value
    let precioTipo = 0
    let tipoNombre = ""
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{9}$/ // 9 numeros.
    }
    switch (tipo) {
        case 2:
            precioTipo = 6700
            tipoNombre = 'Salar'
            break
        case 3:
            precioTipo = 8900
            tipoNombre = 'Coho'
            break
        case 4:
            precioTipo = 6300
            tipoNombre = 'Trucha'
            break
    }
    let subTotal = precioTipo * cantidad
    let iva = subTotal * 0.19
    let total = subTotal + iva
    if (!expresiones.nombre.test(form.txt_cliente.value)) {
        $('#alerta').html('<div class=" alert card-panel red lighten-2 white-text">Ingrese un Cliente valido (solo texto)</div>')
        form.txt_cliente.focus()
    } else if (!expresiones.correo.test(form.txt_correo.value)) {
        $('#alerta').html('<div class="card-panel red lighten-2 white-text">Ingrese un Correo valido</div>')
        form.txt_correo.focus()
    } else if (!expresiones.telefono.test(form.txt_telefono.value)) {
        $('#alerta').html('<div class="card-panel red lighten-2 white-text">Ingrese un Telefono de 9 digitos</div>')
        form.txt_telefono.focus()
    } else if (precioTipo == 0) {
        $('#alerta').html('<div class="card-panel red lighten-2 white-text">Ingrese un Tipo de salmóm </div>')
        form.tipo.focus()
    } else if (cantidad == 0) {
        $('#alerta').html('<div class="card-panel red lighten-2 white-text">Ingrese una Cantidad </div>')
        form.cantidad.focus()
    } else {
        $('#tipo-salmon').html('<h6 class="right-align">Tipo: ' + tipoNombre + ' <br>Precio Kilo: $' + precioTipo + '</h6>')
        $('#cantidad-salmon').html('<h6 class="right-align">Cantidad: ' + cantidad + '</h6>')
        $('#subTotal').html('<h6 class="right-align">SubTotal: $' + subTotal + '</h6>')
        $('#iva').html('<h6 class="right-align">IVA: $' + iva + '</h6>')
        $('#Total').html('<h6 class="right-align">Total a pagar: $' + total + '</h6>')
        $('#alerta').html("")
    }
}