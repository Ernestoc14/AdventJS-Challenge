function createChristmasTree(ornaments, height) {
  let tree = "";
  let ornamentsPrinted = 0;

  // Creating a repeated ornaments to Add to the line
  for (let x = 0; x <= height; x++) {
    ornamentsPrinted = ornamentsPrinted + x;
  }
  // console.log(ornamentsPrinted)
  let repeatString = ornaments.repeat(ornamentsPrinted);

  for (let i = 1; i <= height; i++) {
    let line = "";

    // Add spaces to center the ornaments
    for (let j = 0; j < height - i; j++) {
      line += " ";
    }

    // Add ornaments to the line
    for (let k = 0; k < i; k++) {
      let o = 0
      // line += " " + repeatString[o+1];
      o++
    }
    line += " " + repeatString[i];
    // Remove trailing space and add the line to the tree
    tree += line + "\n";
  }

  // Add trunk to the tree
  tree += " ".repeat(height) + "|\n";

  return tree;
}

// Example usage:
const tree1 = createChristmasTree("123", 4);
console.log(tree1);

const tree2 = createChristmasTree("*@os", 3);
console.log(tree2);
