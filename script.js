var selecFila = null

function agregarDatos(e) {
    event.preventDefault();
        var formData = readFormData();
        if (selecFila == null){
            insertNewRecord(formData);
        }
        else{
            actualizarRecord(formData);
        }
        resetForm();    
}

//Extraer data
function readFormData() {
    var formData = {};
    formData["producto"] = document.getElementById("producto").value;
    formData["cantidad"] = document.getElementById("cantidad").value;
    formData["precio"] = document.getElementById("precio").value;
    return formData;
}

//Insertar info
function insertNewRecord(data) {
    var table = document.getElementById("lista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    
    cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.producto;
    cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.cantidad;
    cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.precio;
    cell3 = newRow.insertCell(3);
        cell3.innerHTML = `<button onClick="onEdit(this)">Editar</button> <button onClick="onDelete(this)">Eliminar</button>`;
}

//Editar info
function onEdit(td) {
    selecFila = td.parentElement.parentElement;
    document.getElementById("producto").value = selecFila.cells[0].innerHTML;
    document.getElementById("cantidad").value = selecFila.cells[1].innerHTML;
    document.getElementById("precio").value = selecFila.cells[2].innerHTML;
}
function actualizarRecord(formData) {
    selecFila.cells[0].innerHTML = formData.producto;
    selecFila.cells[1].innerHTML = formData.cantidad;
    selecFila.cells[2].innerHTML = formData.precio;
}

//Eliminar datos
function onDelete(td) {
    if (confirm('Estas seguro que quieres eliminar!!?')) {
        row = td.parentElement.parentElement;
        document.getElementById('lista').deleteRow(row.rowIndex);
        resetForm();
    }

}
//Limpiar 
function resetForm() {
    
    document.getElementById("producto").value = '';
    document.getElementById("cantidad").value = '';
    document.getElementById("precio").value = '';
    selecFila = null;
}

