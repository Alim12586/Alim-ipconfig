#!/usr/bin/env node

const { exec } = require("child_process");
const os = require("os");

let command;

switch (os.platform()) {
  case "win32":
    command = "ipconfig";
    break;
  case "linux":
  case "darwin":
    command = "ifconfig";
    break;
  default:
    console.error("Desteklenmeyen platform:", os.platform());
    process.exit(1);
}

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error("Hata:", error.message);
    return;
  }
  if (stderr) {
    console.error("stderr:", stderr);
    return;
  }
  console.log(stdout);
});
