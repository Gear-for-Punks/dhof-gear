// Imports
const fs = require("fs");
const ethers = require("ethers");
const { abi } = require("./abi");

// Setup contract
const lootAddress = "0xFf796cbbe32B2150A4585a3791CADb213D0F35A3";
const rpc = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const loot = new ethers.Contract(lootAddress, abi, rpc);

(async () => {
  // In-mem retrieval
  let retrievedLoot = [];

  // Collect 1...8000 ids
  for (let i = 1; i <= 7777; i++) {
    console.log("Collecting: ", i);

    // Collect parts
    const [chest, eyes, foot, hand, head, implant, waist, weapon] =
      await Promise.all([
        loot.getChest(i),
        loot.getEyes(i),
        loot.getFoot(i),
        loot.getHand(i),
        loot.getHead(i),
        loot.getImplant(i),
        loot.getWaist(i),
        loot.getWeapon(i),
      ]);

    // Push parts to array
    retrievedLoot.push({
      [i]: {
        chest, eyes, foot, hand, head, implant, waist, weapon
      },
    });
  }

  // Write output
  fs.writeFileSync("./output/gear.json", JSON.stringify(retrievedLoot));
})();
