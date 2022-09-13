const compra = () => {
    let producto;false
    let cuantos = 0;
    let price = 0;
    let total = 0;
    let continuar = false;

    do {
        juego = prompt ("¿Cual desea comprar 1.F1 2022, 2.Lego Batman, 3.Payday 2?", "Ej: 1");
        cuantos = parseInt(prompt ("¿Cuantos desea comprar?"));
        while (isNaN(cuantos)) {
            cuantos = parseInt(prompt ("¿Cuantos desea comprar?"));
        }

    switch (juego) {
        case "1":
            price = 1000;
            break;
        case "2":
            price = 700;
            break;
        case "3":
            price = 500;
            break;
        default:
            alert("Algun dato es incorrecto");
            price= 0;
            cuantos= 0;
    }

    total += price * cuantos;
    continuar = confirm("¿Desea agregar otro juego?");
    } while (continuar)
    return total;
}

const envio = (total) => {
    let enviar = confirm("¿Quiere el envio a domicilio?");

    if (enviar && total >= 1300) {
        alert("Tiene el envio gratis. El total son $" + total);
    } else if (enviar && total < 2000 && total != 0) {
        total = total + 700;
        alert("El envío es de $700. El total de la compra son $" + total);
    } else {
        alert("El total de su compra serian $" + total);
    }
    return total;
}

envio(compra());
