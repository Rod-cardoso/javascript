function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var let = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = '<strong>Contando:</strong> <br>'
        var i = Number(ini.value) 
        var f = Number(fim.value) 
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
           for(var c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        } 
        } else {
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} `                
            }

        }

        
    }
}
