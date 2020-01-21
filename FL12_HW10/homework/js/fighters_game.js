function Fighter(fighter) {
    this.Wins = 0;
    this.getWin = function () {
        return this.Wins;
    }
    this.addWin = function () {
        this.Wins++;
    }
    this.Losses = 0;
    this.getLosses = function () {
        return this.Losses;
    }
    this.addLoss = function () {
        this.Losses++;
    }
    this.StartedHP = fighter.hp;
    this.Name = fighter.name;
    this.getName = function(){
        return this.fighterName;
    }
    this.Damage = fighter.damage;
    this.getDamage = function(){
        return this.Damage;
    }
    this.HP = fighter.hp;
    this.getHealth = function(){
        return this.HP;
    }
    this.setHealth = function (currentHP) {
        this.HP = currentHP;
    }
    this.Strength = fighter.strength;
    this.getStrength = function(){
        return this.Strength;
    }
    this.Agility = fighter.agility;
    this.getAgility = function(){
        return this.Agility;
    }
    this.logCombatHistory = function () {
        console.log(`Name: `+this.getName()+`, Wins: `+this.getWin()+`, Losses: `+this.getLosses());
    }
    this.heal = function (hp) {
        let currentHP = hp+this.getHealth();
        if (currentHP>this.StartedHP){
            currentHP = this.StartedHP;
        }
        this.setHealth(currentHP);
    }
    this.dealDamage = function (hp) {
        let currentHP = this.getHealth()-hp;
        if (currentHP<0){
            currentHP<0;
        }
        this.setHealth(currentHP);
    }
    this.attack = function (defender) {
        let chance = 100-(defender.getStrength()+defender.getAgility());
        let random = Math.floor(Math.random()*101);
        if (random<chance){
            defender.dealDamage(this.Damage);
            console.log(this.getName()+`makes `+this.Damage+` damage to`+defender.getName());
        } else {
            console.log(this.getName()+` attack missed`);
        }
    }
}
function Battle(myFighter1, myFighter2) {
    if (myFighter1.getHealth()<=0){
        console.log(myFighter1.getName()+` is dead and can't`);
    }
    if (myFighter2.getHealth()<=0){
        console.log(myFighter2.getName()+` is dead and can't`);
    }
    while (myFighter1.getHealth()>0 && myFighter2.getHealth()>0){
        myFighter1.attack(myFighter1);
        if (myFighter2.getHealth()<=0){
            console.log(myFighter1.getName()+` has won!`);
            myFighter1.addWin();
            myFighter2.addLoss();
            break;
        }
        myFighter2.attack(myFighter1);
        if (myFighter1.getHealth()<=0){
            console.log(myFighter2.getName()+` has won!`);
            myFighter2.addWin();
            myFighter1.addLoss();
            break;
        }
    }
}