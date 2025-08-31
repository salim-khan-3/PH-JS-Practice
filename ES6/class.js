/**
 * class --> template 
 *properties 
 *method
 * 
 * 
 * object
 * 
 * 
 */

 class Player {
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh'
        // console.log('calling a constructor method',name);
    }
    goal(){
        console.log('score a goal');
    }
    getTeamName(){
        return 'borsha'
    }
 }
 const player1 = new Player('md salim islam',33)
 const player2 = new Player('sdkfjsdlkjf dsjfk',11)
//  player1.goal()
//  console.log(player1);
console.log(player1 instanceof Player);
console.log(player2);