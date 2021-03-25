## Making a plan

1. Make a drawing of your app. Simple "wireframes"
2. Once you have a drawing, name the HTML elements you'll need to realize your vision
3. For each HTML element ask: Why do I need this?
   - This is your pseudocode
4. Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5. Is there some state we need to initialize?
6. Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7. Think about how to validate each of your steps

## Objectives

- Create a number guessing game
  - Generate a random number hidden from the user
    - How? A: `Math.ceiling(Math.random * 20);`
    - Display a box with a "?" indicating the number to guess.
  - Have a place where the user can input their guess
    - Use an `<input type="text">` for this.
  - Generate a response depending on the user's guess that tells them whether their guess is too high, too low or just right.
    - use a `<div>` for this and grab it in JS file.
    - If the user guesses correctly, display a message indicating they won. If the user has used up all of their tries, display a message indicating they lost.
  - Have a way to track the number of tries the user has left.
    - How? A: Initial state will be 4 tries.
    - use and `if` statement to check whether the user has guessed correctly (?).
