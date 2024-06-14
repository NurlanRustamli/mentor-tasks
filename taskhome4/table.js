// function createTable() {
//     const body = document.body;

//     const table = document.createElement('table');
//     table.style.width='100%';
//     table.style.border = '1px solid black'
//     for (let i = 0; i < 3; i++) {
//         const row = table.insertRow();
//         for (let j = 0; j < 3; j++) {
//             const cell = row.insertCell();
//             cell.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
//             cell.style.border = '1px solid black';
//             if (j === 0) {
//                 cell.style.backgroundColor = 'lightblue'; 
//             }else if (j===2){
//                 cell.style.background = 'green';
//             }
//         }
        
//     }
//     body.append(table)
// }
// createTable();



function createTable1() {
    const body = document.body;

    const table = document.createElement('table');
    table.style.width='100%';
    table.style.border = '1px solid black'
    for (let i = 0; i < 3; i++) {
        const row = table.insertRow();
        if(i%2 == 0){
            for (let j = 0; j < 3; j++) {
                const cell = row.insertCell();
                cell.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
                cell.style.border = '1px solid black';
                if (j === 0) {
                    cell.style.backgroundColor = 'lightblue'; 
                }else if (j===2){
                    cell.style.background = 'green';
                }
            }
        }else if(i%2 === 1){
            for (let j = 0; j < 3; j++) {
                const cell = row.insertCell();
                cell.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
                cell.style.border = '1px solid black';
                if (j === 1) {
                    cell.style.backgroundColor = 'lightblue'; 
                }
            }
        }
        
        
    }
    body.append(table)
}
createTable1();

