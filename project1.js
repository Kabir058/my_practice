
//  Email Organizer and Analyzer

/* 
 Features:
1. Validate a list of email addresses
2. Extract usernames and domains
3. Count valid vs invalid emails
4. Group emails by domain
5. Display a notification message for each valid email
*/

function isValidEmail(email) {
    return typeof email === "string" &&
        email.includes("@") &&
        email.indexOf("@") === email.lastIndexOf("@") &&
        email.indexOf("@") > 0 &&
        email.indexOf("@") < email.length - 1;
}

function extractParts(email) {
    const [username, domain] = email.split("@");
    return { username, domain };
}

function sendNotification(email) {
    if (!isValidEmail(email)) {
        return " Invalid Email";
    }
    const { username, domain } = extractParts(email);
    return ` ${username} sent you an email from ${domain}`;
}

function organizeEmails(emailList) {
    let validEmails = [];
    let invalidEmails = [];
    let domainGroups = {};

    for (let email of emailList) {
        if (isValidEmail(email)) {
            validEmails.push(email);
            const domain = extractParts(email).domain;
            if (!domainGroups[domain]) {
                domainGroups[domain] = [];
            }
            domainGroups[domain].push(email);
        } else {
            invalidEmails.push(email);
        }
    }

    return {
        validEmails,
        invalidEmails,
        domainGroups
    };
}


const emails = [
    "kabir058@gmail.com",
    "nadim.naem5@outlook.com",
    "hello.world@yahoo.com",
    "noatsymbol.com",
    "double@@error.com",
    "sadiaicloud.com"
];


const results = organizeEmails(emails);
console.log(" Valid Emails:", results.validEmails);
console.log(" Invalid Emails:", results.invalidEmails);
console.log(" Grouped by Domain:", results.domainGroups);


console.log(" Notifications:");
for (let email of emails) {
    console.log(sendNotification(email));
}
