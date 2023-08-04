class Rocket{
    //name prperties first
    constructor(
        fuelType,
        weight,
        power
    ){
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;
    }

    //we have properties, now on to methods
    launch(){
        console.log("launch sequence started");
        alert("Warning! Launch Sequence Started");
        return true;
    }

    refuel(){
        console.log("refuel sequence started");
        alert("Refueling process started");
        return true;

    }

    detachThruster(thrusterID){
        console.log("Thruster detach sequence started");
        alert("Thruster" + this.thrusterID + "has been successfully detached");
        return true;

    }
}

class Mission{
    constructor(
        objectibe,
        oxyLvl,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spaceCraft,
        numOfAstronauts
    ){
        this.objectibe = objectibe;
        this.oxyLvl = oxyLvl;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spaceCraft = spaceCraft;
        this.numOfAstronauts = numOfAstronauts;
    }

    displayMissionParameters(){
        alert("The spacecraft " + this.spaceCraft + " will launch on " + this.launchDateDay + " " + 
        this.launchDateMonth + " " + this.launchDateYear + " with an oxygen level of " + this.oxyLvl + "%.");
    }

    launch(){
        alert("launch sequence for " + this.spaceCraft + " has begun");
    }
}

function displayFall(){
    console.log("displayFall started");
    fallLaunch.displayMissionParameters();

}