const TransportoPriemone = require('../TransportoPriemone')

const LengvasisAuto extends TransportoPriemone {
    constructor(steeringWheelPosition, seatCount, wheelCount, isEngineWorking){
        super(steeringWheelPosition, seatCount, wheelCount, isEngineWorking)
        this.wheelCount = 4;
        this.seatCount = 5;
        this.steeringWheelPosition = `right`;
    }
}

module.exports = LengvasisAuto;