const getDaysInMonth = function(month, year) {
    return new Date(year, month, 0).getDate();
}
for(let i = 0; i < 12; i++){
const Y2020 = getDaysInMonth([i], 2020);
console.log(Y2020);
}
