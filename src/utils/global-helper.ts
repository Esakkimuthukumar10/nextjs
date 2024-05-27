export function obscureEmail(email: string): string {

    // Destructure the email into username and domain using split
    const [username, domain] = email.split('@');

    if(!(username && domain)) return ''; 

    // Determine the length of the username
    const usernameLength = username.length;

    const isDividNumber = usernameLength == 1 ? 0 : usernameLength / 2;
    
    // Extract the first three characters of the username
    let obscuredUsername = username.substring(0, isDividNumber);
    
    // Add asterisks to represent the remaining characters of the username
    obscuredUsername += '*'.repeat(Math.max(usernameLength - isDividNumber, 0));
    
    // Construct the obscured email using template literals
    const obscuredEmail = `${obscuredUsername}@${domain}`;
    
    return obscuredEmail;
}
