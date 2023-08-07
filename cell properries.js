// // storage
let sheetDB = [];

for(let i=0; i<rows; i++){
    let sheetRow = [];
    for(let j=0; i<cols; j++){
        let cellProp = {
            bold: false,
            italic:false,
            underline:false,
            alignment:"left",
            fontFamily:"monospace",
            fontSize:"14",
            fontColor:"#000000",
            BGcolor:"#000000",// just for indication purpose
        }
        sheetRow.push(cellProp);
    }
    sheetDB.push(sheetRow);
}




// selctor for cell properties
let bold  = document.querySelector(".bold");
let italic  = document.querySelector(".italic");
let underline  = document.querySelector(".underline");
let fontSize = document.querySelector(".font-size-prop");
let fontFamily = document.querySelector(".font-family-prop");
let fontColor =  document.querySelector(".font-color-prop");
let BGcolor =  document.querySelector(".BGcolor-prop");
let alignment = document.querySelectorAll(".alignment")
let leftAlign = alignment[0];
let centerAlign = alignment[1];
let rightAlign = alignment[2];

// attached property listeners
bold.addEventListener("click", (e)=>{
   
})




