const arr1 = [557, 565, 572, 579, 585, 592, 599, 606, 615];
const arr2 = [561, 569, 576, 582, 589, 596, 603, 612]

document.getElementById("primer").onclick = () => {
    document.getElementById("op").innerHTML = `
        <option value="1">Primera Opción</option>
        <option value="2">Segunda Opción</option>
        <option value="3">Tercera Opción</option>
        `;
};

document.getElementById("segundo").onclick = () => {
    document.getElementById("op").innerHTML = `
        <option value="1">Primera Opción</option>
        <option value="2">Segunda Opción</option>
        `;
};

document.getElementById("de").onclick = () => {
    if (document.getElementById("primer").checked) {
        if (document.getElementById("anio").value == "2020" && document.getElementById("op").value == "3") {
            window.open(constructLink12(), "_blank");
        } else {
            window.open(constructLink1(), "_blank");
        }
    }
    if (document.getElementById("segundo").checked) {
        window.open(constructLink2(), "_blank");
    }
};

document.getElementById("ds").onclick = () => {
    if (document.getElementById("primer").checked) {
        if (document.getElementById("anio").value == "2020" && document.getElementById("op").value == "3") {
            window.open(constructLinkS12(), "_blank");
        } else {
            window.open(constructLinkS1(), "_blank");
        }
    }
    if (document.getElementById("segundo").checked) {
        window.open(constructLinkS2(), "_blank");
    }
}

function constructLink1() {
    var aux;
    var link = "http://sagaa.fcyt.umss.edu.bo/adm_academica/archivos/examenes/" + document.getElementById("anio").value + "-";
    link += "1-" + (arr1[Number(document.getElementById("anio").value) - 2012] + Number(document.getElementById("op").value)) + "/1/6-";
    aux = document.getElementsByName("fila");
    for (var i = 0; i < aux.length; i++) {
        if(aux[i].checked) {
            link += aux[i].value + ".pdf";
            break;
        }
    }
    return link;
}

function constructLink12() {
    var aux;
    var link = "http://sagaa.fcyt.umss.edu.bo/adm_academica/archivos/examenes/" + document.getElementById("anio").value + "-";
    link += "1-" + (arr1[Number(document.getElementById("anio").value) - 2012] + Number(document.getElementById("op").value) + 1) + "/1/6-";
    aux = document.getElementsByName("fila");
    for (var i = 0; i < aux.length; i++) {
        if(aux[i].checked) {
            link += aux[i].value + ".pdf";
            break;
        }
    }
    return link;
}

function constructLink2() {
    var aux;
    var link = "http://sagaa.fcyt.umss.edu.bo/adm_academica/archivos/examenes/" + document.getElementById("anio").value + "-";
    link += "2-" + (arr2[Number(document.getElementById("anio").value) - 2012] + Number(document.getElementById("op").value)) + "/1/6-";
    aux = document.getElementsByName("fila");
    for (var i = 0; i < aux.length; i++) {
        if(aux[i].checked) {
            link += aux[i].value + ".pdf";
            break;
        }
    }
    return link;
}

function constructLinkS1 () {
    var aux;
    var link = "http://sagaa.fcyt.umss.edu.bo/adm_academica/archivos/solucionario/" + document.getElementById("anio").value + "-";
    link += "1-" + (arr1[Number(document.getElementById("anio").value) - 2012] + Number(document.getElementById("op").value)) + "/1/6-";
    aux = document.getElementsByName("fila");
    for (var i = 0; i < aux.length; i++) {
        if(aux[i].checked) {
            link += aux[i].value + "/0.pdf";
            break;
        }
    }
    return link;
}

function constructLinkS12 () {
    var aux;
    var link = "http://sagaa.fcyt.umss.edu.bo/adm_academica/archivos/solucionario/" + document.getElementById("anio").value + "-";
    link += "1-" + (arr1[Number(document.getElementById("anio").value) - 2012] + Number(document.getElementById("op").value) + 1) + "/1/6-";
    aux = document.getElementsByName("fila");
    for (var i = 0; i < aux.length; i++) {
        if(aux[i].checked) {
            link += aux[i].value + "/0.pdf";
            break;
        }
    }
    return link;
}

function constructLinkS2 () {
    var aux;
    var link = "http://sagaa.fcyt.umss.edu.bo/adm_academica/archivos/solucionario/" + document.getElementById("anio").value + "-";
    link += "2-" + (arr2[Number(document.getElementById("anio").value) - 2012] + Number(document.getElementById("op").value)) + "/1/6-";
    aux = document.getElementsByName("fila");
    for (var i = 0; i < aux.length; i++) {
        if(aux[i].checked) {
            link += aux[i].value + "/0.pdf";
            break;
        }
    }
    return link;
}