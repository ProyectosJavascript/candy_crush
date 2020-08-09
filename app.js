document.addEventListener('DOMContentLoaded', ()=>{ 
    // console.log('hola')
    // console.log('ey')
    const grid = document.querySelector('.grid')
    // console.log(grid)
    const width = 8
    // esto lo pone ania pero no veo que sirva
    // ahora veo que sirve para encontrar el square por la id y cambiarlo de color
    const squares = []

    const candyColors = [
        'red',
        'yellow',
        'orange',
        'purple',
        'green',
        'blue'
    ]


    //Create board
    function createBoard(){
        for (let i = 0; i < width*width; i++){
            const square = document.createElement('div')
            let randomColor = Math.floor(Math.random() * candyColors.length)
            square.style.backgroundColor = candyColors[randomColor]
            square.setAttribute('draggable', true)
            square.addEventListener('dragstart', dragStart)
            // de momento no hacen falta los otros eventos
            // https://www.tutorialesprogramacionya.com/htmlya/html5/temarios/descripcion.php?cod=174&punto=45&inicio=40
            // square.addEventListener('dragend', dragEnd)
            square.addEventListener('dragover', dragOver)
            // square.addEventListener('dragenter', dragEnter)
            // square.addEventListener('dragleave', dragLeave)
            square.addEventListener('drop', dragDrop)
            square.setAttribute('id', i)
            grid.appendChild(square)
            // esto lo pone Ania pero no veo que sirva. ahora veo que si (leer linea 8)
            squares.push(square)
        }
    }
    createBoard()


    //drag the candies
    // añade los event listeners acada square del array squares, pero yo los añado en la creacion
    // squares.forEach(square => square.addEventListener('dragstart', dragStart))
    // squares.forEach(square => square.addEventListener('dragend', dragEnd))
    // squares.forEach(square => square.addEventListener('dragover', dragOver))
    // squares.forEach(square => square.addEventListener('dragenter', dragEnter))
    // squares.forEach(square => square.addEventListener('dragleave', dragLeave))
    // squares.forEach(square => square.addEventListener('drop', dragDrop))

    let colorBeingDragged
    let squareIdBeingDragged
    let colorBeingReplaced
    let squareIdBeingReplaced


    function dragStart(){
        colorBeingDragged = this.style.backgroundColor
        squareIdBeingDragged = parseInt(this.id)
        console.log(this)
        console.log(colorBeingDragged)
        console.log(this.id, 'dragStart')
    }

    // function dragEnd(){
    //     console.log(this.id, 'dragEnd')
    // }

    function dragOver(e){
        e.preventDefault()
        console.log(this.id, 'dragOver')
    }

    // function dragEnter(){
    //     // aqui tmb previene el default, pero no he encontrado en la documentacion qeu hagafalta, y probandolo tampoco veo qye vaya mal
    //     console.log(this.id, 'dragEnter')
    // }

    // function dragLeave(){
    //     console.log(this.id, 'dragLeave')
    // }

    function dragDrop(){
        colorBeingReplaced = this.style.backgroundColor
        squareIdBeingReplaced = parseInt(this.id)
        console.log(this.id, 'dragDrop')
        this.style.backgroundColor = colorBeingDragged
        squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced
    }

})