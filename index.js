#!/usr/bin/env node

import welcome from "cli-welcome";

import pkgJSON from "./package.json" assert { type: "json" };

const content = `
🐳 Linkedin : https://linkedin.com/in/Furqaaan
🐙 Github   : https://github.com/Furqaaan
🦖 Leetcode : https://leetcode.com/Furqaaan
`;

// Cli header.
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

console.log(content);
