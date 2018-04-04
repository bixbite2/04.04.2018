console.log('crud');
const form = document.querySelector('form');
const inputDescricao = document.querySelector('input#descricao');
const selectPrioridade = document.querySelector('select#prioridade');
const tbody = document.querySelector('tbody');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const descricao = inputDescricao.value;
    const prioridade = selectPrioridade.value;

    const row = `<tr><td>${descricao}</td><td>${prioridade}</td><td><button>Excluir</button></td></tr>`
    tbody.innerHTML += row;
});

tbody.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        console.log('Excluir');
        if (confirm('Certeza?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
})

tbody.addEventListener('dbclick', function(e) {
    e.preventDefault();
    if (e.target.tagName === 'TD') {
        console.log('edit');
    }
});