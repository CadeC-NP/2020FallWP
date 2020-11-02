
const data = [{ name: 'Cade', age: 20}, {name: 'Moshe', age: 43 }]

async function getAll(){
    //throw { status: 501, message: "This is a test error"}
    //await Promise.resolve()
    console.log("Called Get All");
    return data;
}

async function add(name, age){
    data.push({name, age});
}

function rand() {
    return Math.random();
}

module.exports = { rand, getAll, add, search: async q => data.filter(x=> x.name == q) }