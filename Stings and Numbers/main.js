// Formatting Strings //

const people = ["John", "Paul", "George", "Ringo"];

// 1. Loop through the people array and insert an <li> tag for each person inside the <ul> with the id "people"
const peopleID = document.getElementById('people');
peopleID.innerHTML = people.map(p => `<li>${p}</li>`).join('');

// 2. Add the list of people as a string as the next sibling of the heading "Listing Names". The list should be wrapped in a <p> tag and formatted as a comma separated list (e.g., "John, Paul, George, Ringo").
const names = document.querySelector('#names');
// names.insertAdjacentHTML('afterend', `<p>${people.toLocaleString()}</p>`)

// 3. Add the conjunction “and” between the final two names (e.g., "John, Paul, George, and Ringo").
// const formatString = (arr) => {
//     const formatConjunction = new Intl.ListFormat(undefined, {
//         type: 'conjunction'
//     });
//     return formatConjunction.format(arr);
// }
// names.insertAdjacentHTML('afterend', `<p>${formatString(people)}</p>`);

// 4. Add the total number of people as an appended string to the above paragraph (e.g., "John, Paul, George, and Ringo (4)").
// names.insertAdjacentHTML('afterend', `<p>${formatString(people)} (${people.length})</p>`);

// 5. Change the paragraph to read "John, Paul, George, or Ringo (4)".
const formatString = ({arr, type = 'conjunction'}) => {
    const formatConjunction = new Intl.ListFormat(undefined, {
        array: arr,
        type
    });
    return formatConjunction.format(arr);
}
// names.insertAdjacentHTML('afterend', `<p>${formatString({arr: people, type: 'disjunction'})} (${people.length})</p>`);

// 6. Show only the first three names (it should read “John, Paul, or George (3)”).
// names.insertAdjacentHTML('afterend', `<p>${formatString({arr: people.slice(0, 3), type: 'disjunction'})} (${people.length})</p>`);

// 7. Show only the last two names (it should read “George or Ringo (2)”).
names.insertAdjacentHTML('afterend', `<p>${formatString({arr: people.slice(-2), type: 'disjunction'})} (${people.length})</p>`);

// Formatting Numbers //

const numbers = [1, 2, 3, 2, 5, 4, 6, 5, 3, 5];
const small_amt = 1234;
const medium_amt = 124.234;
const large_amt = 123_224_223_159;

// 1. Create a new array called uniqueNumbers with all unique numbers in the numbers array.
const uniqueNumbers = [...new Set(numbers)];
console.log("🚀 ~ uniqueNumbers:", uniqueNumbers)

// 2. Insert the sum of the new uniqueNumbers array as the next sibling of the heading "Listing Numbers" in a <p> tag.
const numbersId = document.querySelector('#numbers');
numbersId.insertAdjacentHTML('afterend', `<p>${uniqueNumbers.reduce((acc, num) => acc + num, 0)}</p>`);

// 3. Loop through each number in the uniqueNumbers array and insert an <li> tag for each number inside the <ul> with the id "numbersList".
const numbersList = document.querySelector('#numbersList');
numbersList.innerHTML = uniqueNumbers.map(n => `<li>${n}</li>`).join('');

// 4. Format each number in the uniqueNumbers array as a currency string with a dollar sign and two decimal places (e.g., $1.00, etc.).
const listItems = document.querySelectorAll('li');
listItems.forEach((item) => {
    const value = +item.textContent;
    item.textContent = `${value.toLocaleString(undefined, {
        style: 'currency',
        currency: 'USD'
    })}`;
});

// 5. Output small_amt in a <p> tag as the next sibling. Format the number as a currency string, assuming 1234 represents pennies (i.e., $12.34).
const section = document.querySelector('[aria-label="Formatting Items"]');
const appendToSection = (str) => {
    section.insertAdjacentHTML('beforeend', str);
}
appendToSection(`<p>${(small_amt / 100).toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD'
})}</p>`);

// 6. Output medium_amt in a <p> tag as the next sibling to your <p id="small_amt"> with the id "medium_amt". Format the number as a number with only two decimal places (e.g., 124.23).
appendToSection(`<p id="medium_amt">${medium_amt.toLocaleString(undefined, {
    maximumFractionDigits: 2
})}</p>`)

// 7. Output large_amt in a <p> tag as the next sibling to your <p id="medium_amt"> with the id "large_amt". Format it as a number with a comma separating the thousands (e.g., 123,224,223,159).
appendToSection(`<p id="large_amt">${large_amt.toLocaleString()}</p>`)

// 8. Format "large_amt" as a compact number with a maximum of one fraction digit (e.g., 123.2B).
const largeAmt = document.querySelector('#large_amt');
const value = +largeAmt.textContent.split(',').join('');
largeAmt.textContent = value.toLocaleString('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1
});