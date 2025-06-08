function isUsernameAvailable(existingUsers, newUsername) {
  return !existingUsers.some(user => user.toLowerCase() === newUsername.toLowerCase());
}

console.log(isUsernameAvailable(["kabir", "farhan", "zahid"], "Kabir")); // false
console.log(isUsernameAvailable(["kabir", "farhan", "zahid"], "Nayeem")); // true
