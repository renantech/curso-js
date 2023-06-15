function toDo() {
    const inputTarefa = document.querySelector('.input-tarefa');
    const btnTarefa = document.querySelector('.btn-tarefa');
    const tarefas = document.querySelector('.tarefas');

    function criaLi() {
        const li = document.createElement('li');
        return li;
    }

    inputTarefa.addEventListener('keypress', e => {
        if (e.keyCode === 13) {
            if (!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
        }
    })

    function limpaInput() {
        inputTarefa.value = '';
    }

    function criaBotaoApagar(li) {
        li.innerHTML += ' ';
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'Apagar';
        botaoApagar.setAttribute('class', 'apagar');
        li.appendChild(botaoApagar);
    }

    function criaTarefa(textoInput) {
        const li = criaLi();
        li.textContent = textoInput;
        tarefas.appendChild(li);
        limpaInput();
        criaBotaoApagar(li);
        salvarTarefas();
    }

    btnTarefa.addEventListener('click', e => {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    });

    document.addEventListener('click', e => {
        if (e.target.classList.contains('apagar')) {
            e.target.parentElement.remove();
            salvarTarefas();
        }
    });

    function salvarTarefas() {
        const liTarefas = tarefas.querySelectorAll('li');
        const listaDeTarefas = [];

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
            listaDeTarefas.push(tarefaTexto);
        }
        const tarefasJSON = JSON.stringify(listaDeTarefas); // transforma em string no formato JSON
        localStorage.setItem('tarefas', tarefasJSON);
    }

    function adicionaTarefasSalvar() {
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas);
        
        for (let tarefa of listaDeTarefas) {
            criaTarefa(tarefa);
        }
    }

    adicionaTarefasSalvar()
}

toDo();