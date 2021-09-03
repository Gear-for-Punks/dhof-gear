// Imports
const fs = require("fs");
const ethers = require("ethers");
const { abi } = require("./abi");

// Setup contract
const gearAddress = "0xFf796cbbe32B2150A4585a3791CADb213D0F35A3";
const rpc = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const gear = new ethers.Contract(gearAddress, abi, rpc);

(async () => {
  // In-mem retrieval
  let retrievedGear = [];

  // Collect 1...8000 ids
  for (let i = 1; i <= 7777; i++) {
    console.log("Collecting: ", i);

    // Collect parts
    const [chest, eyes, foot, hand, head, implant, waist, weapon] =
      await Promise.all([
        gear.getChest(i),
        gear.getEyes(i),
        gear.getFoot(i),
        gear.getHand(i),
        gear.getHead(i),
        gear.getImplant(i),
        gear.getWaist(i),
        gear.getWeapon(i),
      ]);

    // Push parts to array
    retrievedGear.push({
      [i]: {
        chest, eyes, foot, hand, head, implant, waist, weapon
      },
    });
  }

  // Write output
  fs.writeFileSync("./output/gear.json", JSON.stringify(retrievedGear));
})();
