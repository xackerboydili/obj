// "#1 upvotes & downvotes "
// function getVoteCount(votes) {
// 	return votes.upvotes - votes.downvotes
// }
// console.log(getVoteCount({upvotes: 5, downvotes: 3}))


// "#2 fiftyThirtyTwenty"

// function fiftyThirtyTwenty(ati) {
// 	return {"needs": 0.5 * ati, "wants": 0.3 *ati, "savings":0.2 * ati}
// }
// console.log(fiftyThirtyTwenty(5000))


// "#3 volumeOfBox"

// function volumeOfBox(sizes) {
// 	return sizes.width * sizes.length * sizes.height
// }
// console.log(volumeOfBox({width: 2, length: 5, height: 1}))

// "#4 cityFacts"

// function cityFacts(city) {
// 	let {name, population, continent, surname} = city
//     return `${name} has ${population} and islocated in ${continent} and surname is ${surname}`
// }
// console.log(cityFacts({name: "Uzb", population: 2000000, continent: "Asia", surname: "Voxidov"}))

// "#5 destrucuring"
// writeyourcodehere = [1, 2, 3, 4, 5, 6, 7, 8]
// let [first, second, third, fourth, fifth, sixth, ...other] = [1, 2, 3, 4, 5, 6, 7, 8]  
// console.log(fifth)

// "#6 "

// function determineLever(arr) {
// 	return arr[0] == 'f' ? 'third class lever' : arr[1] == 'f' ? 'first class lever' : 'second class lever'
// }
// console.log(determineLever([, ,'f' ]))

// "#7"

// function nSidedShape(n) {
//     let shapes = ["circle", "semi-circle", "triangle", "square", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"]
//     return shapes[n-1]
// }
// console.log(nSidedShape(3))

// "8"
// function totalAmountAdjectives(obj) {
// 	return Object.keys(obj).length
// }
// console.log(totalAmountAdjectives({ a: "moron", b: 2 }))

"9"

// function isInRange(num, range) {
// 	return range.min >= num ? false : true
// }
// console.log(isInRange(4, {min: 3, max: 7}))

"10"

function makeCopy(obj) {
	// return obj
    let arr = Object.entries(obj)
    let result = Object.fromEntries(arr)
    return result
}
console.log(makeCopy({item: 'phone', money: '$2000'}))

