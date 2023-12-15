let cuentas=[
    {nombre:"Gojira", saldo:950, password:"Pantunfla"},
    {nombre:"Kong K.", saldo:80, password:"Matraca"},
    {nombre:"Ultraman", saldo:950, password:"Escudo"}]


let divPrince = document.getElementById("principal");

divPrince.innerHTML=`<img src="./Imagenes/logo_3.png" class="card-img-top" alt="logo" />
<div class="card" style="width: 18rem">
  <div class="card-body">
    <h1>Kaiju Bank<br /></h1>
    <p class="card-text">
      Bienvenido a la banca nipona para monstruos y humanos.<br />
      "Un futuro brillante es nuestro compromiso".
    </p>
  </div>
</div>
<button id="botoningreso" type="button" class="btn btn-dark">
  Ingresar
</button>`


let usuarioCarta =`<div id="usuarioCartas" class="card" style="width: 18rem">
<img src="./Imagenes/logo_3.png" class="card-img-top" alt="..." />
<div class="card-body"> <div id="cuentas"></div>
<form> <label for="usuarioInput">Usuario:</label><input type="text" id="usuarioInput" name="usuarioInput" /><br/><br/>

<label for="passwordInput">Password: </label>
<input type="password" id="passwordInput" name="passwordInput" /><br/> <br/>
<button type="submit" id="iniciarSesionSubmit" class="btn btn-dark">Iniciar sesión</button>
</form> 
</div>
</div>
</div>`


let ingresar = document.getElementById("botoningreso")
ingresar.addEventListener("click",(e)=>{
    e.preventDefault();
    divPrince.innerHTML=usuarioCarta

});
       

  let gojiraCard = `<div class="card" style="width: 18rem">
  <img
    src="./Imagenes/perfil_gojira.png"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">Hola...</h5>
    <form>
      <label for="depositoGojira">Depositar saldo:</label><br />
      <input type="text" id="depositoGojira" name="usuarioInput" />
      <button type="button" class="btn btn-warning"onclick="realizarDeposito('Gojira', parseInt(document.getElementById('depositoGojira').value))">Realizar</button
      ><br />

      <label for="retiroGojira">Retirar Saldo </label><br />
      <input type="text" id="retiroGojira" name="usuarioInput" />
      <button type="button" class="btn btn-warning"onclick="realizarRetiro('Gojira', parseInt(document.getElementById('retiroGojira').value))">Realizar</button
      ><br /><br />

      <button id="saldoGojira" class="btn btn-warning" type="button" onclick="consultarSaldo('Gojira')">
        Consultar Saldo</button
      ><br />
    </form>
    <br />`

let kongCard = ` <div class="card" style="width: 18rem">
<img
  src="./Imagenes/perfil_kong.png"
  class="card-img-top"
  alt="..."
/>
<div class="card-body">
  <h5 class="card-title">Hola...</h5>
  <form>
    <label for="depositoKong">Depositar saldo:</label><br />
    <input type="text" id="depositoKong" name="usuarioInput" />
    <button type="button" class="btn btn-warning" onclick="realizarDeposito('Kong K.', parseInt(document.getElementById('depositoKong').value))">Realizar</button
    ><br />

    <label for="retiroKong">Retirar Saldo </label><br />
    <input type="text" id="retiroKong" name="usuarioInput" />
    <button type="button" class="btn btn-warning"onclick="realizarRetiro('Kong K.', parseInt(document.getElementById('retiroKong').value))">Realizar</button
    ><br /><br />

    <button id="saldoKong" class="btn btn-warning" onclick="consultarSaldo('Kong K.')">
      Consultar Saldo</button
    ><br />
  </form>
  <br />`

let ultramanCard = `<div class="card" style="width: 18rem">
<img
  src="./Imagenes/perfil_ultra.png"
  class="card-img-top"
  alt="..."
/>
<div class="card-body">
  <h5 class="card-title">Hola...</h5>
  <form>
    <label for="depositoUltraman">Depositar saldo:</label><br />
    <input type="text" id="depositoUltraman" name="usuarioInput" />
    <button type="button" class="btn btn-warning"onclick="realizarDeposito('Ultraman', parseInt(document.getElementById('depositoUltraman').value))">Realizar</button
    ><br />

    <label for="retiroUltraman">Retirar Saldo </label><br />
    <input type="text" id="retiroUltraman" name="usuarioInput" />
    <button type="button" class="btn btn-warning"onclick="realizarRetiro('Ultraman', parseInt(document.getElementById('retiroUltraman').value))">Realizar</button
    ><br /><br />

    <button id="saldoUltraman" class="btn btn-warning" onclick="consultarSaldo('Ultraman')">
      Consultar Saldo</button
    ><br />
  </form>
  <br />` 

function consultarSaldo(nombre) {
    const usuario = cuentas.find((cuenta) => cuenta.nombre === nombre);

    if (usuario) {
        alert(`Saldo de ${nombre}: ${usuario.saldo}`);
        return;
    } else {
        alert(`Usuario ${nombre} no encontrado`);
    }
}

//Función Depositar Saldo

function realizarDeposito(nombre, monto) {
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === nombre) {
            let nuevoSaldo = cuentas[i].saldo + monto;

            if (nuevoSaldo > 990) {
                alert("El nuevo saldo supera el límite de 990. Por favor, elija otro monto.");
                return;
            }

            cuentas[i].saldo = nuevoSaldo;
            alert("Depósito realizado de " + monto + " al saldo de " + nombre);
            alert("Nuevo saldo de " + nombre + ": " + cuentas[i].saldo);
            return;
        }
    }

    console.log("Cuenta no encontrada: " + nombre);
}

//Función Retirar Saldo

function realizarRetiro(nombre, monto) {
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === nombre) {
            let nuevoSaldo = cuentas[i].saldo - monto;

            if (nuevoSaldo < 10) {
                alert("El nuevo saldo es inferior al límite de 10. Por favor, elija otro monto.");
                return;
            }

            cuentas[i].saldo = nuevoSaldo;
            alert("Retiro realizado de " + monto + " al saldo de " + nombre);
            alert("Nuevo saldo de " + nombre + ": " + cuentas[i].saldo);
            return;
        }
    }

    console.log("Cuenta no encontrada: " + nombre);
}

//Comprobar Contraseña
function comprobarContraseña() {
    let usuarioInput = document.getElementById("usuarioInput").value;
    let passwordInput = document.getElementById("passwordInput").value;

    for (let i = 0; i < cuentas.length; i++) {
        if (usuarioInput === cuentas[i].nombre && passwordInput === cuentas[i].password) {
            mostrarUsuarioCard(cuentas[i]);
            return;
        }
    }

    alert("Usuario no encontrado o contraseña incorrecta. Intenta nuevamente");
}

function mostrarUsuarioCard(usuario) {
    let usuarioCard;
    switch (usuario.nombre) {
        case "Gojira":
            usuarioCard = gojiraCard;
            break;
        case "Kong K.":
            usuarioCard = kongCard;
            break;
        case "Ultraman":
            usuarioCard = ultramanCard;
            break;
    }

    divPrince.innerHTML = usuarioCard;

    let greetingElement = document.querySelector(".card-title");
    if (greetingElement) {
        greetingElement.textContent = "Hola, " + usuario.nombre;
    }

}

document.addEventListener("click", function (event) {
    if (event.target.id === "iniciarSesionSubmit") {
        event.preventDefault();
        comprobarContraseña();
    }});



