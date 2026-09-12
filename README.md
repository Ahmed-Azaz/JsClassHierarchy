# JsClassHierarchy

A JavaScript demonstrating prototypal inheritance using constructor functions and prototypes (no ES6 classes).

## Structure

```
Vehicle (abstract)
├── Bicycle
└── MotorVehicle
    ├── Car
    └── DumpTruck
```
<img width="1913" height="1857" alt="Vehicle-Hierarchy-Graph-09-12-2026_03_35_PM" src="https://github.com/user-attachments/assets/abb08bfb-f3ba-43ba-becf-6aa0dbd8392b" />


## Files

- **taskts2.js** - Contains the class definitions, property helpers, and example usage
- **taskts2.html** - Entry point that loads the script

## How it works

Each vehicle is defined as a constructor function with properties added via `defineProp`, which enforces type-checked getters and setters. Subclasses connect to their parent through `Object.create(Vehicle.prototype)`.

`toString()` and `valueOf()` are overridden at each level so you can inspect objects and do arithmetic like `car + bike` (which adds their respective values).

## Running

Open `taskts2.html` in a browser and check the console for output.
