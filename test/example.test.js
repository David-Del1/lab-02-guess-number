// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('if guess equals correctNumber, return 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    let expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    let actual = compareNumbers(1, 1);
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if guess is less than correctNumber, return -1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    let expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    let actual = compareNumbers(1, 2);
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if guess is greater than correctNumber, return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    let expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    let actual = compareNumbers(2, 1);
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
