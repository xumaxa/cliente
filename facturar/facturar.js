
function addRow() {
    tabla = document.getElementById("tabla");
    codigo = document.getElementById("codigo").textContent;
    desc= document.getElementById("desc").textContent;
    cant = document.getElementById("cant").textContent;
    precio = document.getElementById("precio").textContent;
  
    // Inserta una fila en la tabla, en el índice 0
    var newRow   = tabla.insertRow(tabla.rows.length);
  
    // Inserta una celda en la fila, en el índice 0
    var newCell1  = newRow.insertCell(0);
    var newCell2  = newRow.insertCell(1);
    var newCell3  = newRow.insertCell(2);
    var newCell4 = newRow.insertCell(3);
  
   newCell1.innerHTML = codigo;
   newCell2.innerHTML = desc;
   newCell3.innerHTML = cant;
   newCell4.innerHTML = precio;
  }
