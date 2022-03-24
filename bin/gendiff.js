import { Command } from "commander";

import gendiff from "../src/help.js";

const program = new Command();
program.option("-h, --help", "display help for command");
program.parse(process.argv);

const options = program.opts();

if (options.help) gendiff();
