const LengvasisAuto = require('./LengvasisAuto')

const Volvo extends LengvasisAuto{
    constructor(steeringWheelPosition, seatCount, wheelCount, isEngineWorking){
        super(steeringWheelPosition, seatCount, wheelCount, isEngineWorking)
        this.antenaStyle = 'Cord';
    }
}

module.exports = Volvo;