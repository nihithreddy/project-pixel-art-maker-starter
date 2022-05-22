
const colorInput = document.querySelector("#colorPicker")

function makeGrid() {
    /**
     * @desc creates a grid of squares of size rows and columns
     */
    const tableElement =  document.querySelector("#pixelCanvas")
    const prevTableBody = document.getElementsByTagName("tbody")
    //Clear the previous grid
    if(prevTableBody.length !== 0){
        tableElement.removeChild(prevTableBody[0])
    }
    //Parsing the rows (height) and columns (width) values
    const rows = parseInt(document.getElementById("inputHeight").value)
    const columns = parseInt(document.getElementById("inputWidth").value)
    const tableBody = document.createElement("tbody")
    //Dynamically creating the canvas
    for(let row = 0; row < rows; row ++){
        const tableRow = document.createElement("tr")
        for(let col = 0; col < columns ; col++){
            const tableCell = document.createElement("td")
            tableCell.addEventListener("click",function(event){
                //Dynamically setting the backgroundcolor to the table cell
                event.target.style.backgroundColor = colorInput.value
            })
            tableRow.appendChild(tableCell)
        }
        tableBody.appendChild(tableRow)
    }
    tableElement.appendChild(tableBody)
}


