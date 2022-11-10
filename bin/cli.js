// Import statements
import { roll } from "/lib/roll.js";
import minimist from "minimist";

//use minimist function to create argv variable
const args = minimist(process.argv.slice(2))

// Initialized vaiables
const sides = args.sides ? args.sides: 6;
const dice = args.dice ? args.dice: 2;
