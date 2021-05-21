const LengvasisAuto = require('./LengvasisAuto')

const Tesla extends LengvasisAuto{
    constructor(steeringWheelPosition, seatCount, wheelCount, isEngineWorking){
        super(steeringWheelPosition, seatCount, wheelCount, isEngineWorking)
        this.antenaStyle = 'No outside antena';
    }
}

module.exports = Tesla;