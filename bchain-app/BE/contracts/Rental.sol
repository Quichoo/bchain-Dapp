// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Rental {
    struct Car{
        string name;
        string img;
        uint rangePower;
        uint maxSpeed;
        uint batteryCapacity;
        uint costPerHour;
        bool isAvailable;
    }
    
    //admin variables
    address owner;
    uint totalHours=0;
    uint totalRents=0;
    uint totalCars;

    //array of cars
    Car[] cars;
 
    constructor(){
        //contract deployer address
        owner = msg.sender;

        //initialization of car values
        cars.push(Car("Luxury Black Van", "src/images/b1.png", 60, 50, 576, 680000000000000, true));
        cars.push(Car("Muscle Car v1", "src/images/b2.png", 60, 50, 867, 680000000000000, true));
        cars.push(Car("Muscle Car v2", "src/images/b3.png", 60, 50, 473, 680000000000000, true));
        cars.push(Car("Muscle Car v3", "src/images/b4.png", 60, 50, 1080, 680000000000000, true));
        cars.push(Car("Vintage Style Van", "src/images/b5.png", 60, 50, 240, 680000000000000, true));
        cars.push(Car("4WD Sports Car", "src/images/b6.png", 70, 50, 240, 800000000000000, true));
        cars.push(Car("RWD Sports Car", "src/images/b7.png", 70, 50, 240, 800000000000000, true));
        cars.push(Car("Hybrid Sports Car", "src/images/b8.png", 70, 50, 240, 800000000000000, true));

        totalCars=cars.length;
    }
    
    function getCars() public view returns (Car[] memory){
        return cars;
    }

    function getNumOfCars() public view returns (uint){
        return totalCars;
    }

    function getTotalHours() public view returns (uint){
        return totalHours;
    }

    function getTotalRents() public view returns (uint){
        return totalRents;
    }

    function rent(uint _totalHours, string memory _name) payable public {
        totalHours+=_totalHours;
        totalRents++;
        updateCars(_name);
    }

    function updateCars(string memory _name) public {
        for(uint i=0; i<totalCars; i++){
            if(keccak256(abi.encodePacked(cars[i].name)) == keccak256(abi.encodePacked(_name))){
                cars[i].isAvailable = !cars[i].isAvailable;
            }
        }
    }


}