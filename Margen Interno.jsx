// Script para Adobe Illustrator
// Crea márgenes internos dependiendo del tamaño de la hoja o forma seleccionada.

if (app.documents.length > 0) {
    var doc = app.activeDocument;

    // Verifica si hay al menos un objeto seleccionado
    if (doc.selection.length > 0) {
        var selectedObject = doc.selection[0]; // Toma el primer objeto seleccionado

        // Panel de entrada para márgenes
        var marginValues = prompt("Ingresa los márgenes en puntos (arriba, derecha, abajo, izquierda) separados por comas.\nPor ejemplo: 10,10,10,10", "10,10,10,10");

        if (marginValues) {
            try {
                // Convierte la cadena de márgenes a un array de números manualmente
                var margins = [];
                var marginArray = marginValues.split(",");
                for (var i = 0; i < marginArray.length; i++) {
                    margins.push(parseFloat(marginArray[i].trim()));
                }

                // Asegúrate de que haya 4 valores
                if (margins.length !== 4) {
                    throw new Error("Debes proporcionar exactamente 4 valores de margen.");
                }

                // Dimensiones del objeto seleccionado
                var bounds = selectedObject.geometricBounds;
                var left = bounds[0];
                var top = bounds[1];
                var right = bounds[2];
                var bottom = bounds[3];

                // Aplica los márgenes
                var newLeft = left + margins[3];
                var newTop = top - margins[0];
                var newRight = right - margins[1];
                var newBottom = bottom + margins[2];

                // Crea el rectángulo de márgenes
                var marginRect = doc.pathItems.rectangle(
                    newTop,
                    newLeft,
                    newRight - newLeft,
                    newTop - newBottom
                );

                // Ajusta el estilo del rectángulo (opcional)
                marginRect.filled = false;
                marginRect.stroked = true;
                marginRect.strokeColor = doc.swatches[0].color; // Usa el primer color de muestra
                marginRect.strokeWidth = 1;

                alert("¡Márgenes aplicados con éxito!");
            } catch (e) {
                alert("Error: " + e.message);
            }
        } else {
            alert("No se proporcionaron márgenes.");
        }
    } else {
        alert("Selecciona un objeto para aplicar márgenes.");
    }
} else {
    alert("No hay documentos abiertos.");
}
