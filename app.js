document.addEventListener('DOMContentLoaded', ()=>{ 
    // console.log('hola')
    // console.log('ey')
    const grid = document.querySelector('.grid')
    // console.log(grid)
    const width = 8
    // esto lo pone ania pero no veo que sirva
    // ahora veo que sirve para encontrar el square por la id y cambiarlo de color
    const squares = []
    let score = 0
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
            square.addEventListener('dragend', dragEnd)
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
        // console.log(this)
        // console.log(colorBeingDragged)
        // console.log(this.id, 'dragStart')
    }

    
    function dragOver(e){
        e.preventDefault() // previene porque el compor. por defecto es regresar al origeno es 
        // console.log(this.id, 'dragOver')
    }

    // function dragEnter(){
    //     // aqui tmb previene el default, pero no he encontrado en la documentacion qeu hagafalta, y probandolo tampoco veo qye vaya mal
    //     console.log(this.id, 'dragEnter')
    // }

    // function dragLeave(){
    //     console.log(this.id, 'dragLeave')
    // }

    function dragDrop(){
        console.log(this.id, 'dragdrop')
        colorBeingReplaced = this.style.backgroundColor
        squareIdBeingReplaced = parseInt(this.id)
        // console.log(this.id, 'dragDrop')
        this.style.backgroundColor = colorBeingDragged
        squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced
    }

    //the drop event always fires just before the dragend event
    // A drop event is fired from the drop target
    // A dragend event is fired from the source of the drag

    function dragEnd(){
        console.log(this.id, 'id al dragEnd')
        let validMoves = [
            squareIdBeingDragged + 1,
            squareIdBeingDragged + width,
            squareIdBeingDragged -1,
            squareIdBeingDragged - width
        ]

        let validMove = validMoves.includes(squareIdBeingReplaced)
        console.log('esto es el valid move', validMove)
        console.log('id reemplazada antes del if', squareIdBeingReplaced)
        if (validMove && squareIdBeingReplaced){
            // squareIdBeingReplaced = null // clear the value of squareIdBeingReplaced ready for a fresh start
            console.log('id original', squareIdBeingDragged)
            console.log('id donde voy', squareIdBeingReplaced)
        } else if (squareIdBeingReplaced && !validMove) { //quiero mover la casilla a otra casilla, pero no es un movimiento válido
            squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
            squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced
            console.log('invalid move- muy lejos')
        } else { // creo que ya se cubren todas las opciones con lo anterio, pero beuno
            squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
            console.log('invalid move- fuera del tablero')
        }
    }

    //check for matches
    // check for row of three
    function checkRowForThree(){
        for (i = 0; i < 61; i++){
            // defino mi fila de tres casillas
            let rowOfThree = [i, i+1, i+2]
            // cojo el color de mi primera casilla de las tres
            let decidedColor = squares[i].style.backgroundColor
            // varible booleana para saber si tenemos un espacio en blanco o no. Es blank (true) si el background color de las casillas está vacío 
            const isBlank = squares[i].style.backgroundColor === ''

            // si todos los indices en nuestro array son del decidedColor ( el color de la primera casilla de las tres), y el color no es blanco
            if (rowOfThree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)){
                score += 3
                rowOfThree.forEach(index => {
                    squares[index].style.backgroundColor = ''
                })
                
            }
        }
    }
    window.setInterval(function(){
        checkRowForThree()
    }, 100)

})