const cadena = "🦇🎃🎃🦇🦇🎃🦇🎃🎃🎃🦇🦇🎃🎃";

function contarCalabazasYMurcielagos(cadena) {
    let conteoCalabazas = 0;
    let conteoMurcielagos = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === "🎃") {
            conteoCalabazas++;
        } else if (cadena[i] === "🦇") {
            conteoMurcielagos++;
        }
    }

    console.log(`Número de calabazas: ${conteoCalabazas}`);
    console.log(`Número de murciélagos: ${conteoMurcielagos}`);
}

contarCalabazasYMurcielagos(cadena);