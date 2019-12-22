gimli = {
    name : 'gimli',
    weapon : 'axe',
    attack : function() {
        return `Attacking with ${this.weapon}`
    }
}

console.log(gimli.attack())
