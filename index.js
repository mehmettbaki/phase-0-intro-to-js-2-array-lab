// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)

}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}


function destructivelyRemoveFirstCat() {
    cats.shift()
}


function appendCat(name) {
    const newCats=[...cats]
    newCats.push(name)
    return newCats
}

function removeFirstCat() {
    const copyCats=[...cats]
    copyCats.shift()
    return copyCats
}

function removeLastCat(){
    const copyCats=[...cats]
    copyCats.pop()
    return copyCats
}

function prependCat(name) {
    const copCats=[...cats]
    copCats.unshift(name)
    return copCats
}