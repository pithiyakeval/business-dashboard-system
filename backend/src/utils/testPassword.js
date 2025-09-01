import bcrypt from 'bcryptjs';

// Replace with the hashed password from your DB
const hashedPassword = "$2b$10$XqmLRPWPqclegiQkC/IJ1.3Re9oSdV1TQyfFNK61f2e3LwRVwdBUC";

// Replace with the plain text password you want to test
const inputPassword = "keval";

const checkPassword = async () => {
  const match = await bcrypt.compare(inputPassword, hashedPassword);
  if (match) {
    console.log("✅ Password is correct!");
  } else {
    console.log("❌ Password does not match!");
  }
};

checkPassword();
