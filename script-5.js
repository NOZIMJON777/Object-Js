let schedule = {
    time: '8:30'
};

let isEmpty = (input) => {
    for (let key in input) {
        return false
    }
    return true
}

console.log(isEmpty(schedule));