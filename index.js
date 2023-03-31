#!/usr/bin/env node

import welcome from "cli-welcome";
import meow from "meow";
import clearAnyConsole from "clear-any-console";

import pkgJSON from "./package.json" assert { type: "json" };

const helpText = `
Usage
    furqan [--options]

Options
    --header,-h Include header
    --no-header,--no-h Remove header

Examples
    furqan -h
    furqan --header
    furqan --no-h
    furqan --no-header
`;

const meowOptions = {
    importMeta: import.meta,
    flags: {
        header: {
            type: "boolean",
            default: true,
            alias: "h",
        },
    },
};
const cli = meow(helpText, meowOptions);

const content = `
🐳 Linkedin : https://linkedin.com/in/Furqaaan
🐙 Github   : https://github.com/Furqaaan
🦖 Leetcode : https://leetcode.com/Furqaaan
`;

// Cli header.
if (cli.flags.header) {
    welcome({
        title: `Furqan`,
        tagLine: `by ${pkgJSON.author.name}`,
        description: pkgJSON.description,
        bgColor: `#AFD808`,
        color: `#ffffff`,
        bold: true,
        clear: true,
        version: pkgJSON.version,
    });
} else {
    clearAnyConsole();
}

console.log(content);
