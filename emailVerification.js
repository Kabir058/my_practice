function sendNotification(email) {
  if (
    typeof email !== "string" ||
    email.indexOf('@') === -1 ||                            // no @
    email.indexOf('@') !== email.lastIndexOf('@') ||       // more than one @
    email.startsWith('@') ||                               // starts with @
    email.endsWith('@')                                    // ends with @
  ) {
    return "Invalid Email";
  }

  const parts = email.split('@');
  const username = parts[0];
  const domain = parts[1];

  return `${username} sent you an email from ${domain}`;
}
