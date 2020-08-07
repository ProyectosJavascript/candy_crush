document.addEventListener('DOMContentLoaded', ()=>{ 
    // console.log('hola')
    // console.log('ey')
    const grid = document.querySelector('.grid')
    // console.log(grid)
    const width = 8
    // esto lo pone ania pero no veo que sirva
    // const squares = []

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
            square.setAttribute('id', i)
            grid.appendChild(square)
            // esto lo pone Ania pero no veo que sirva
            // squares.push(square)
        }
    }
    createBoard()
})