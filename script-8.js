let obj = {
    id: 1,
    name: "WebBrain",
    offline: true,
    online: true,
    individual: false
};

for (const key in obj) {
    if (typeof obj[key] === 'boolean') {
        console.log(key);
        console.log(obj[key]);

    }
}


