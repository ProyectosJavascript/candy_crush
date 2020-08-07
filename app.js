document.addEventListener('DOMContentLoaded', ()=>{ 
    // console.log('hola')
    // console.log('ey')
    const grid = document.querySelector('.grid')
    // console.log(grid)
    const width = 8
    // esto lo pone ania pero no veo que sirva
    // const squares = []

    //Create board
    function createBoard(){
        for (let i = 0; i < width*width; i++){
            const square = document.createElement('div')
            grid.appendChild(square)
            // esto lo pone Ania pero no veo que sirva
            // squares.push(square)
        }
    }
    createBoard()
})