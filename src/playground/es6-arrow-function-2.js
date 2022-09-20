const add = (a, b) => {
    //console.log(arguments)
    return a + b;
}

console.log(add(22, 58, 1000))

const user = {
    name: 'Nicholas',
    cities: ['Ondo', 'Port Harcourt', 'Lagos','Enugu'],
    placesLived() {

        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city
        })
        return cityMessages;

        // // this.cities.forEach((city) => {
        // //     console.log(this.name + ' has lived in ' + city)
        // })
        
    }
}

console.log(user.placesLived())

const multiplier = {
    numbers: [2,4,5,6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number)
    }
}

console.log(multiplier.multiply())