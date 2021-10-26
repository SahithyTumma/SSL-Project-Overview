function dintro() {
    let dis = document.getElementById('disintro');
    if (dis.style.display === 'none') {
        dis.style.display = 'block';
    }
    else {
        dis.style.display = 'none';
    }
}

function features() {
    let disFeatures = document.getElementById('inputDatabase');
    let disOperations = document.getElementById('operations');
    if (disFeatures.style.display === 'none') {
        disFeatures.style.display = 'block';
        disOperations.style.display = 'block';
    }
    else {
        disFeatures.style.display = 'none';
        disOperations.style.display = 'none';
        document.getElementById('inputContent').style.display = 'none';
        document.getElementById('administration').style.display = 'none';
        document.getElementById('userStu').style.display = 'none';
        document.getElementById('output').style.display = 'none';
        document.getElementById('adminsContent').style.display = 'none';
        document.getElementById('userContent').style.display = 'none';
        document.getElementById('disoutput').style.display = 'none';
    }
}

function inputDa() {
    let disInput = document.getElementById('inputContent');
    if (disInput.style.display === 'none') {
        disInput.style.display = 'block';
    }
    else {
        disInput.style.display = 'none';
    }
}

function operations() {
    let disAdmin = document.getElementById('administration');
    let disUser = document.getElementById('userStu');
    let disOut = document.getElementById('output');
    if (disAdmin.style.display === 'none') {
        disAdmin.style.display = 'block';
        disUser.style.display = 'block';
        disOut.style.display = 'block';
    }
    else {
        disAdmin.style.display = 'none';
        disUser.style.display = 'none';
        disOut.style.display = 'none';
        document.getElementById('adminsContent').style.display = 'none';
        document.getElementById('userContent').style.display = 'none';
        document.getElementById('disoutput').style.display = 'none';
    }
}

function disA() {
    let disInput = document.getElementById('adminsContent');
    if (disInput.style.display === 'none') {
        disInput.style.display = 'block';
    }
    else {
        disInput.style.display = 'none';
    }
}

function disUser() {
    let disUser = document.getElementById('userContent');
    if (disUser.style.display === 'none') {
        disUser.style.display = 'block';
    }
    else {
        disUser.style.display = 'none';
    }
}

function disOut() {
    let disOutput = document.getElementById('disoutput');
    if (disOutput.style.display === 'none') {
        disOutput.style.display = 'block';
    }
    else {
        disOutput.style.display = 'none';
    }
}

function implement() {
    let disImplementation = document.getElementById('disimplem');
    if (disImplementation.style.display === 'none') {
        disImplementation.style.display = 'block';
    }
    else {
        disImplementation.style.display = 'none';
    }
}

function sahithy() {
    let sahithy = document.getElementById('sahithy');
    if (sahithy.style.display === 'none') {
        sahithy.style.display = 'block';
        document.getElementById('sahithyButton').value = 'Read Less';
    }
    else {
        sahithy.style.display = 'none';
        document.getElementById('sahithyButton').value = 'Read More';
    }
}

function sudeshna() {
    let sudeshna = document.getElementById('sudeshna');
    if (sudeshna.style.display === 'none') {
        sudeshna.style.display = 'block';
        document.getElementById('sudeshnaButton').value = 'Read Less';
    }
    else {
        sudeshna.style.display = 'none';
        document.getElementById('sudeshnaButton').value = 'Read More';
    }
}

function meghana() {
    let meghana = document.getElementById('meghana');
    if (meghana.style.display === 'none') {
        meghana.style.display = 'block';
        document.getElementById('meghanaButton').value = 'Read Less';
    }
    else {
        meghana.style.display = 'none';
        document.getElementById('meghanaButton').value = 'Read More';
    }
}