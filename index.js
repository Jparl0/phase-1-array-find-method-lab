// code your solution here

const timeline = [
    { year: "2002", result: "T"},
    { year: "2003", result: "L"},
    { year: "2004", result: "c"},
    { year: "2005", result: "L"},
    { year: "2006", result: "W"}
]


// function superbowlWin(date) {
//     if (date.result === "W") {
//         return date.year;
//     }
// }


function superbowlWin(arr){
    return (arr.find(arr => arr.result === "W")).year;
}



console.log(superbowlWin(timeline))

//onsole.log(timeline.find(superbowlWin));
