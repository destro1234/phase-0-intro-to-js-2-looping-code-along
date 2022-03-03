const cards = [];

let writeCards = function (names, event) {
    for(let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return cards;
}



let countDown = function (int) {
    let i = 0;
    while (i <= int) {
        console.log(int);
        int--;
    }
}