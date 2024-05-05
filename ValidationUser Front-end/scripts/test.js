function createRegistration() {
    let numeros = "";
    for (let i = 0; i < 6; i++) {
        numeros += Math.floor(Math.random() * 10);
    }
    let digitoAdicional = Math.floor(Math.random() * 10);
    let matriculaFormatada = numeros.substring(0, 3) + '.' + numeros.substring(3, 6) + '-' + digitoAdicional;
    return matriculaFormatada;
}

console.log(typeof(createRegistration()));
