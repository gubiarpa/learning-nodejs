let mensaje = "¡Debuggeando como pendejo!";

saludar = () => {
    debugger;
    console.log(mensaje);
}

module.exports = {
    saludar : saludar
}