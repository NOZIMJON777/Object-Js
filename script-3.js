let menu = {
    width: 200,
    height: 300,
    title: 'Web Brain'
};

let multiplyNumeric = (input) => {
    for (let key in input) {
        if (typeof input[key] === 'number') {
            (input[key] *= 2);
        } else if (typeof input[key] === 'string') {
            (input[key] += ' IT');
        }
    }
}

multiplyNumeric(menu)

console.log(menu);