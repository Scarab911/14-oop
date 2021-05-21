const LengvasisAuto = require('./LengvasisAuto')

const Bmw extends LengvasisAuto{
    constructor(steeringWheelPosition, seatCount, wheelCount, isEngineWorking){
        super(steeringWheelPosition, seatCount, wheelCount, isEngineWorking)
        this.antenaStyle = 'Shark';
    }
}

module.exports = Bmw;