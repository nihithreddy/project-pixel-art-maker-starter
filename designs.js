// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const colorInput = document.querySelector("#colorPicker")

function makeGrid() {
    // Your code goes here!
    const tableElement =  document.querySelector("#pixelCanvas")
    const prevTableBody = document.getElementsByTagName("tbody")
    if(prevTableBody.length !== 0){
        tableElement.removeChild(prevTableBody[0])
    }
    const rows = parseInt(document.getElementById("inputHeight").value)
    const columns = parseInt(document.getElementById("inputWidth").value)
    console.log(rows,columns)
    const tableBody = document.createElement("tbody")
    for(let row = 0; row < rows; row ++){
        const tableRow = document.createElement("tr")
        for(let col = 0; col < columns ; col++){
            const tableCell = document.createElement("td")
            tableCell.addEventListener("click",function(event){
                event.target.style.backgroundColor = colorInput.value
            })
            tableRow.appendChild(tableCell)
        }
        tableBody.appendChild(tableRow)
    }
    tableElement.appendChild(tableBody)
}


