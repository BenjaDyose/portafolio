function redireccion() {
    window.location.href = "../xerath.html"
}

document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const mail = document.getElementById('mail').value;

    alert(`Gracias ${nombre}, me contactaré a la brevedad contigo a ${mail}`);
    document.getElementById('formulario').reset();
});