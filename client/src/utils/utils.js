const resume = 'Certainly! Here is a sample resume for you based on the information you provided:---**Kostiantyn Dontsov** Email: kostdonc90@gmail.com | Phone: 07467690397 **Summary:**  Dedicated lawyer with 10 years of experience practicing in Ukraine. Skilled in communication and adept at building strong relationships with clients. **Work Experience:**  Lawyer  [Law Firm Name], Ukraine  - Represented clients in various legal matters  - Conducted legal research and prepared legal documents  - Advised clients on legal rights and obligations **Education:**  Masters in Law  [University Name] **Skills:**  - Excellent communication skills  - Strong attention to detail  - Legal research and analysis  - Client relationship management --- Feel free to customize this template further with additional details as needed.'

export function getTextAfterDelimiter(inputString) {
    const delimiterIndex = inputString.indexOf('---');

    if (delimiterIndex !== -1) {
        const text = inputString.slice(delimiterIndex + 3).trim();
        const newIndex = text.indexOf('---');
        if(newIndex !== -1){
        const newText = text.substring(0, newIndex).trim();
        return newText;
        }
    } else {
        return inputString;
    }
}
