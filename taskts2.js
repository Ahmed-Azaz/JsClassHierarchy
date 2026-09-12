function defineProp(obj, name, initial, type) {
    let value = initial;

    if (typeof value !== type)
        throw Error(`${name} must be ${type}`);

    Object.defineProperty(obj, name, {
        get() { return value; },
        set(v) {
            if (typeof v !== type)
                throw Error(`${name} must be ${type}`);
            value = v;
        },
        enumerable: false,
        configurable: false
    });
}


function Vehicle(speed, color) {

    if (new.target === Vehicle)
        throw Error("Vehicle is abstract");

    defineProp(this, "speed", speed, "number");
    defineProp(this, "color", color, "string");

    let running = false;

    this.turnLeft = () => { };
    this.turnRight = () => { };

    this.start = () => {
        running = true;
        return true;
    };

    this.stop = () => {
        running = false;
        return true;
    };

    this.goForward = (s, accel) => {
        this.speed += s + accel;
    };

    this.goBackward = (s, accel) => {
        this.speed -= (s + accel);
    };
}

Vehicle.prototype.toString = function () {
    return `Vehicle speed=${this.speed}, color=${this.color}`;
};

Vehicle.prototype.valueOf = function () {
    return this.speed;
};



function Bicycle(speed, color) {
    Vehicle.call(this, speed, color);
}

Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

Bicycle.prototype.ringBell = function () { };

Bicycle.prototype.toString = function () {
    return `Bicycle speed=${this.speed}, color=${this.color}`;
};

Bicycle.prototype.valueOf = function () {
    return this.speed;
};



function MotorVehicle(speed, color, engineSize, plate) {
    Vehicle.call(this, speed, color);

    defineProp(this, "sizeOfEngine", engineSize, "number");
    defineProp(this, "licencePlate", plate, "string");
}

MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;

MotorVehicle.prototype.getSizeOfEngine = function () {
    return this.sizeOfEngine;
};

MotorVehicle.prototype.getLicensePlate = function () {
    return this.licencePlate;
};

MotorVehicle.prototype.toString = function () {
    return `MotorVehicle engine=${this.sizeOfEngine}, plate=${this.licencePlate}`;
};

MotorVehicle.prototype.valueOf = function () {
    return this.sizeOfEngine;
};


function Car(speed, color, engineSize, plate,
    doors, wheels, weight) {

    MotorVehicle.call(this, speed, color, engineSize, plate);

    defineProp(this, "numOfDoors", doors, "number");
    defineProp(this, "numWheels", wheels, "number");
    defineProp(this, "weight", weight, "number");
}

Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.switchOnAirCon = function () { };
Car.prototype.getNumOfDoors = function () {
    return this.numOfDoors;
};

Car.prototype.toString = function () {
    return `Car doors=${this.numOfDoors}, wheels=${this.numWheels}, weight=${this.weight}`;
};

Car.prototype.valueOf = function () {
    return this.weight;
};



function DumpTruck(speed, color, engineSize, plate,
    capacity, wheels, weight) {

    MotorVehicle.call(this, speed, color, engineSize, plate);

    defineProp(this, "loadCapacity", capacity, "number");
    defineProp(this, "numWheels", wheels, "number");
    defineProp(this, "weight", weight, "number");
}

DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;

DumpTruck.prototype.lowerLoad = function () { };
DumpTruck.prototype.raiseLoad = function () { };

DumpTruck.prototype.toString = function () {
    return `DumpTruck capacity=${this.loadCapacity}, wheels=${this.numWheels}`;
};

DumpTruck.prototype.valueOf = function () {
    return this.loadCapacity;
};



const car = new Car(100, "red", 2.0, "ABC123", 4, 4, 1500);
const bike = new Bicycle(20, "blue");

console.log(car.toString());
console.log(bike.toString());


console.log(car + bike);   
