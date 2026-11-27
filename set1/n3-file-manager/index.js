// Name: Danica A. Cabuay
// Section: IV-BSIT B
// Activity: N3
// Date: November 27, 2026

const fs = require("fs");
const path = require("path");

// Every file is stored in the "files" subfolder
const folder = path.join(__dirname, "files");
fs.mkdirSync(folder, { recursive: true });

// command, file name, then the rest is the content
const [command, fileName, ...words] = process.argv.slice(2);
const content = words.join(" ");

// basename keeps the file inside the "files" folder
function getPath(name) {
  return path.join(folder, path.basename(name));
}

function createFile(name) {
  // "wx" means: write, but fail if the file already exists
  fs.writeFileSync(getPath(name), content, { flag: "wx" });
  console.log('Created ${name}');
}

function readFile(name) {
  console.log(fs.readFileSync(getPath(name), "utf8"));
}

function updateFile(name) {
  // check first, because appendFileSync would create a missing file
  fs.accessSync(getPath(name));
  fs.appendFileSync('getPath(name), \n${content}');
  console.log('Updated ${name}');
}

function deleteFile(name) {
  fs.unlinkSync(getPath(name));
  console.log('Deleted ${name}');
}

function listFiles() {
  const names = fs.readdirSync(folder);
  if (names.length === 0) {
    console.log("No files yet.");
  }
  for (const name of names) {
    const fullPath = path.join(folder, name);
    console.log("------------------------");
    console.log('Full path: ${fullPath}');
    console.log('File name: ${path.basename(fullPath)}');
    console.log('Extension: ${path.extname(fullPath)}');
    console.log('Contents : ${fs.readFileSync(fullPath, "utf8")}');
  }
}

function main() {
  console.log('File Manager by Danica A. Cabuay');
  const actions = { create: createFile, read: readFile, update: updateFile, delete: deleteFile };

  try {
    if (command === "list") {
      listFiles();
    } else if (!Object.hasOwn(actions, command)) {
      console.log('Commands: create, read, update, delete, list');
    } else if (!fileName) {
      console.log('Error: please give a file name.');
    } else if ((command === "create" || command === "update") && !content) {
      console.log('Error: please give the content.');
    } else {
      actions[command](fileName);
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log('Error: ${fileName} does not exist.');
    } else if (error.code === "EEXIST") {
      console.log('Error: ${fileName} already exists.');
    } else {
      console.log('Error: ${error.message}');
    }
  }
}

main();