const TransportoPriemone{
    constructor(steeringWheelPosition, seatCount, wheelCount, isEngineWorking){ 
        this.steeringWheelPosition = steeringWheelPosition;
        this.seatCount = seatCount;
        this.wheelCount = wheelCount;
        this.isEngineWorking = isEngineWorking;
    
    }
    About(){
        `This car has steering wheel in ${this.steeringWheelPosition}, ${this.seatCount} seats and ${this.wheelCount}wheels`
    }
    TurnOnEngine(){
        `Ijunktas motoras`
    }
    TurnOfEngine(){
        `Isjunktas motoras`
    }
}

module.exports = TransportoPriemone;