const people = [
    {
        birthYear: 1890,
        deathYear: 1990
    },
    {
        birthYear: 1990,
        deathYear: 2090
    },
    {
        birthYear: 1888,
        deathYear: 1991
    },
    {
        birthYear: 1991,
        deathYear: 2091
    },
]


// O(n*log(n))
const yearMaxPeopleAlive = (people) => {
    const births = []
    const deaths = []

    // O(n)
    people.forEach(person => {
       births.push(person.birthYear)
       deaths.push(person.deathYear) 
    })

    // normally O(n*log(n))
    births.sort()
    deaths.sort()

    let birthIndex = 0
    let deathIndex = 0
    let currentNumOfAlive = 0
    let maxNumOfAlive = 0
    let maxAliveYear = births[0]

    // O(n)
    while (birthIndex < births.length) {
        if (births[birthIndex] <= deaths[deathIndex]) {
            currentNumOfAlive += 1
            if (currentNumOfAlive > maxNumOfAlive) {
                maxAlive = currentNumOfAlive
                maxAliveYear = births[birthIndex]
            }
            birthIndex += 1
        } else { // births[birthIndex] > deaths[deathIndex]
            currentNumOfAlive -= 1
            deathIndex += 1
        }
    }

    return maxAliveYear
}

console.log(yearMaxPeopleAlive(people))