let obj = {
    id: 1,
    name: 'Webrain'
};

for (let key in obj) {
    if (typeof obj[key] === 'number') {
        console.log(key);
        // console.log(obj[key]);
    }
}
