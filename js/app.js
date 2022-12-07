const inicioContainer = document.getElementById('naoIniciado')
const andamentoContainer = document.getElementById('andamento')
const concluidoContainer = document.getElementById('concluido')

const inicioInput = document.getElementById('inputInicio')
const andamentoInput = document.getElementById('inputAndamento')
const concluidoInput = document.getElementById('inputConcluido')

const inicioBtn = document.getElementById('inicioBtn')
const andamentoBtn = document.getElementById('andamentoBtn')
const concluidoBtn = document.getElementById('concluidoBtn')

// Funções

const deleteItem = (item) => {
    const itemToRemove = item.parentNode
    itemToRemove.parentNode.remove()
}

const mudarParaAndamento = (paragrafo) => {
    const itemToRemove = paragrafo.parentNode
    addItemAndamento(itemToRemove.firstChild.dataset.value)
    itemToRemove.remove()
}

const mudarParaConcluido = paragrafo => {
    const itemToRemove = paragrafo.parentNode
    addItemConcluido(itemToRemove.firstChild.dataset.value)
    itemToRemove.remove()
}

const addItemConcluido  = (texto) => {
    const div = document.createElement('div')
    div.classList.add('item')

    const paragrafo = document.createElement('p')    
        paragrafo.innerText = texto
        paragrafo.dataset.value = texto
    

    const controlsContainer = document.createElement('div')
    controlsContainer.classList.add('controlsContainer')

    const andamentoArrow = document.createElement('i')
    andamentoArrow.classList.add('fa-solid')
    andamentoArrow.classList.add('fa-arrow-left')

    andamentoArrow.addEventListener('click', () => mudarParaAndamento(paragrafo))

    const trashIcon = document.createElement('i')
    trashIcon.classList.add('fa-solid')
    trashIcon.classList.add('fa-trash')

    trashIcon.addEventListener('click', () => deleteItem(trashIcon))

    controlsContainer.append(andamentoArrow, trashIcon)
    div.append(paragrafo, controlsContainer)

    concluidoContainer.appendChild(div)

    concluidoInput.value = ''
    concluidoInput.focus()
}

const addItemAndamento = (texto) => {
    const div = document.createElement('div')
    div.classList.add('item')

    const paragrafo = document.createElement('p')    
        paragrafo.innerText = texto
        paragrafo.dataset.value = texto
    

    const controlsContainer = document.createElement('div')
    controlsContainer.classList.add('controlsContainer')

    const andamentoArrow = document.createElement('i')
    andamentoArrow.classList.add('fa-solid')
    andamentoArrow.classList.add('fa-arrow-right')

    andamentoArrow.addEventListener('click', () => mudarParaConcluido(paragrafo))

    const trashIcon = document.createElement('i')
    trashIcon.classList.add('fa-solid')
    trashIcon.classList.add('fa-trash')

    trashIcon.addEventListener('click', () => deleteItem(trashIcon))

    controlsContainer.append(andamentoArrow, trashIcon)
    div.append(paragrafo, controlsContainer)

    andamentoContainer.appendChild(div)

    andamentoInput.value = ''
    andamentoInput.focus()
}

const addItemInicial= () => {
    const div = document.createElement('div')
    div.classList.add('item')

    const paragrafo = document.createElement('p')
    paragrafo.innerText = inicioInput.value
    paragrafo.dataset.value = inicioInput.value

    const controlsContainer = document.createElement('div')
    controlsContainer.classList.add('controlsContainer')

    const andamentoArrow = document.createElement('i')
    andamentoArrow.classList.add('fa-solid')
    andamentoArrow.classList.add('fa-arrow-right')

    andamentoArrow.addEventListener('click', () => mudarParaAndamento(paragrafo))

    const trashIcon = document.createElement('i')
    trashIcon.classList.add('fa-solid')
    trashIcon.classList.add('fa-trash')

    trashIcon.addEventListener('click', () => deleteItem(trashIcon))

    controlsContainer.append(andamentoArrow, trashIcon)
    div.append(paragrafo, controlsContainer)

    inicioContainer.appendChild(div)

    inicioInput.value = ''
    inicioInput.focus()
}

inicioBtn.addEventListener('click', () => addItemInicial())
andamentoBtn.addEventListener('click', () => addItemAndamento(andamentoInput.value))
concluidoBtn.addEventListener('click', () => addItemConcluido(concluidoInput.value))