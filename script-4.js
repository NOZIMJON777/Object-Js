let salaries = {
    John: 100,
    Pete: 200,
    Ann: 150
};

let sum = 0;

for (let key in salaries) {
    sum += salaries[key]
}

console.log(sum);

