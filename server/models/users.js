
const data = [{ name: 'Cade', age: 20}, {name: 'Moshe', age: 43 }]

function getAll(){
    return data;
}

function add(name, age){
    data.push({name, age});
}

module.exports = { getAll, add, search: q => data.filter(x=> x.name == q) }