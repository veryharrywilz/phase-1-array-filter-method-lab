
function findMatching(nameList, name) {
    let newArray = nameList.filter(key => {
        return key.toLowerCase() === name.toLowerCase()
        })
    return newArray}

let nameList = ['tommy', 'bob', 'pauly', 'Jimbo', 'piKachu', "tommy", "tommy", "tommy"]

//console.log(findMatching(nameList, "tommy"))


function fuzzyMatch(nameList, letters) {
    let newArray = nameList.filter(key => {
        return key[0].toLowerCase() === letters[0].toLowerCase()
    })
    return newArray
}

console.log(fuzzyMatch(nameList, 'jim'))


function matchName(object, hometownString) {
    let newArray = object.filter(key => {
        return key.name.toLowerCase() === hometownString.toLowerCase()
        })
    return newArray
}
