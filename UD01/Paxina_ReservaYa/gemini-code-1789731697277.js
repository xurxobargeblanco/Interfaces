// =========================================================================
// ERRO 1: Formulario de Tarxeta Bancaria (Pantalla 3)
// =========================================================================
// LIÑAS 511-523: Existen formateadores pero FALTA a validación en tempo real
// (non hai eventos 'input' ou 'blur' que eliminen a clase 'con-erro').
document.getElementById('inputNumTarxeta').addEventListener('input', function(){
  this.value = this.value.replace(/\D/g,'').slice(0,16).replace(/(.{4})/g,'$1 ').trim();
});
document.getElementById('inputCaducidade').addEventListener('input', function(){
  let v = this.value.replace(/\D/g,'').slice(0,4);
  if(v.length > 2) v = v.slice(0,2) + '/' + v.slice(2);
  this.value = v;
});
document.getElementById('inputCvv').addEventListener('input', function(){
  this.value = this.value.replace(/\D/g,'').slice(0,3);
});

// LIÑA 537: O ERRO orixínase aquí -> A validación execútase UNICAMENTE ao facer clic no botón.
btnContinuarPagamento.addEventListener('click', () => {
  if(!estado.metodoPago) return;
  if(estado.metodoPago === 'tarxeta' && !validarTarxeta()) return; // <-- Solo valida ao premer
  encherResumo();
  prepararFormulario();
  mostrarPantalla('pantalla-confirmacion');
});


// =========================================================================
// ERRO 2: Formulario de Datos Persoais (Pantalla 4)
// =========================================================================
// FALTA CÓDIGO: Non existen escoitadores 'input' ou 'blur' para os campos
// 'inputNome', 'inputTelefono' e 'inputCorreo'.

// LIÑA 591: O ERRO orixínase aquí -> Os erros só se amosan e comproban ao facer clic no botón.
document.getElementById('btnConfirmar').addEventListener('click', () => {
  const formularioVisible = bloqueFormulario.style.display !== 'none';
  if(formularioVisible){
    const datos = validarFormulario(); // <-- Solo valida ao premer
    if(!datos) return;
    gardarUsuario(datos);
  }
  // ... resto do código de confirmación ...
});