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

// function makeCopy(obj) {
// 	// return obj
//     let arr = Object.entries(obj)
//     let result = Object.fromEntries(arr)
//     return result
// }
// console.log(makeCopy({item: 'phone', money: '$2000'}))


"#11  has Key"

// function hasKey(obj, key) {
// 	return key in obj ? true : false
// }
// console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"))

"#12 "

// function profit(info) {
// 	const {sellprice, costprice, inventory} = info
//     return Math.round((sellprice - costprice)*inventory)
// }
// console.log(profit({
//     costprice: 32.67,
//     sellprice: 45.00,
//     inventory: 1200
//   }))

"#13 isEmpty"

// function isEmpty(obj) {
// 	return Object.keys(obj).length === 0
// }
// console.log(isEmpty({}))

"#14 sortDrinkByPrice"

// function sortDrinkByPrice(drinks) {
// 	return drinks.sort((a, b) => a.price - b.price)
// }
// console.log(sortDrinkByPrice([{name: "lime", price: 160}, {name: "lemonade", price: 50}]))

"#15"

// function isFirstSuperior(arr1, arr2) {
// 	return arr1 > arr2
// }
// console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 3, 4]))

"16 calculateDifference"

// function calculateDifference(obj, limit) {
// 	let result = Object.values(obj).reduce((a, b) => (a + b) - limit)
//     return result
// }
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19))

"17 ink levels"

// function inkLevels(inks) {
//     return Math.min(...Object.values(inks))
// }
// console.log(inkLevels({"cyan": 23, "magenta": 12, "yellow": 10}))
  
"18 addName"

// function addName(obj, name, value) {
// 	let arr = Object.entries(obj)
//     let arr1 = arr.concat([[name,value]])
//     let arr2 = Object.fromEntries(arr1)
//     return arr2
// }
// console.log(addName({ piano: 500 }, "Brutus", 400))


const obj = {
    name: 'dilshod',
    surname: 'Isoqov',
    age : 20,
}

let keys = Object.keys(obj).map((value)=>console.log(value))

for(props in obj){
    console.log(props)
}
