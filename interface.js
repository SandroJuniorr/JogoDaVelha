document.addEventListener('DOMContentLoaded', () =>{
 
 
    let quadrado = document.querySelectorAll(".quadrado")
    quadrado.forEach(element => {
        element.addEventListener('click', handleclick)
        
    });

})

function handleclick(evento){
    square = evento.target;
    let position = square.id;

    handleMove(position)
    uptadeSquares()
}
function uptadeSquares(){
    let quadrado = document.querySelectorAll(".quadrado")
    quadrado.forEach(element => {
        let position = element.id;
        let symbols = board[position]

        if(symbols != ""){
            element.innerHTML = `<p class = ${symbols}>${symbols}</p>` 
        }
        
    });
}