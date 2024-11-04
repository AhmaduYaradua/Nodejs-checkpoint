import generator from "generate-password";

// Function to generate a unique password
function generatePassword() {
  let password = generator.generate({
    length: 10,
    numbers: true,
  });

  console.log("Your generated password is:");
  return password;
}
console.log(generatePassword());
