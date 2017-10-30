var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

document.querySelector('.form').addEventListener('submit', function(event){
    var tr = document.querySelector('tr');
    campos.forEach(function(campo){
        var td = document.querySelector('td');
        td.textContent = campo.value;
        tr.appendChild(td); 

        var tdVolume = document.createElement('td');
    })
});