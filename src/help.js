import { Command } from "commander";

const help = () => {
  const com = new Command();
  com
    .name("gendiff")
    .description("Compares two configuration files and shows a difference.")
    .version("1.0.0.0");

  com
    .command("split")
    .description("Split a string into substrings and display as an array")
    .argument("<string>", "string to split")
    .option("--first", "display just the first substring")
    .option("-s, --separator <char>", "separator character", ",")
    .action((str, options) => {
      const limit = options.first ? 1 : undefined;
      console.log(str.split(options.separator, limit));
    });

  com.parse();
};

export default help;