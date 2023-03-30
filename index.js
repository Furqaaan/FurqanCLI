#!/usr/bin/env node

const clearConsole = require("clear-any-console");
const welcome = require("cli-welcome");

const pkgJSON = require("./package.json");

const content = `
🐳 Linkedin : https://linkedin.com/in/Furqaaan
🐙 Github   : https://github.com/Furqaaan
🦖 Leetcode : https://leetcode.com/Furqaaan
`;

// To clear everything in terminal.
clearConsole();

// Cli header.
welcome({
    title: `Furqan`,
    tagLine: `by ${pkgJSON.author}`,
    bgColor: `#AFD808`,
    color: `#ffffff`,
    bold: true,
    clear: true,
    version: pkgJSON.version,
});

console.log(content);
