const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const catsNewArray = [...cats, name]
    return catsNewArray
}

function prependCat(name) {
    const catsNewArray = [name, ...cats]
    return catsNewArray
}

function removeLastCat(name) {
    const catsNewArray = [...cats.slice(0, 2)]
    return catsNewArray
}

function removeFirstCat(name) {
    const catsNewArray = [...cats.slice(-2)]
    return catsNewArray 
}