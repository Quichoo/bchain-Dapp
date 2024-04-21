// Import required modules
const { expect } = require("chai");
const { ethers } = require("hardhat");

// Define test suite
describe("Rental Contract", function () {
  let Rental;
  let rental;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  // Before each test, deploy the contract and get the signers
  beforeEach(async function () {
    Rental = await ethers.getContractFactory("Rental");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    rental = await Rental.deploy();
    await rental.deployed();
  });

  // Test case for checking initial values
  it("Should return correct initial values", async function () {
    // expect(await rental.owner()).to.equal(owner.address);
    expect(await rental.getTotalHours()).to.equal(0);
    expect(await rental.getTotalRents()).to.equal(0);
    expect(await rental.getNumOfCars()).to.equal(8);
  });

  // Test case for renting a car
  it("Should allow renting", async function () {
    const initialTotalHours = await rental.getTotalHours();
    const initialTotalRents = await rental.getTotalRents();
    const carName = "Luxury Black Van";

    // Rent a car
    await rental.rent(2, carName);

    // Check updated values
    expect(await rental.getTotalHours()).to.equal(initialTotalHours.add(2));
    expect(await rental.getTotalRents()).to.equal(initialTotalRents.add(1));

    // Check if the car is unavailable after renting
    const cars = await rental.getCars();
    const rentedCar = cars.find(car => car.name === carName);
    expect(rentedCar.isAvailable).to.be.false;
  });

  // Test case for updating cars availability
  it("Should update availability correctly", async function () {
    const carName = "Luxury Black Van";

    // Rent a car
    await rental.rent(2, carName);

    // Check if the car is unavailable after renting
    let cars = await rental.getCars();
    let rentedCar = cars.find(car => car.name === carName);
    expect(rentedCar.isAvailable).to.be.false;

    // Return the car
    await rental.updateCars(carName);

    // Check if the car is available again
    cars = await rental.getCars();
    rentedCar = cars.find(car => car.name === carName);
    expect(rentedCar.isAvailable).to.be.true;
  });
});
