//1 My first code

let messege : string="Hello world";
console.log(messege);

// 2personal messege: store a person,s name in a variable and print a messege to 
// that person.your messege should be simple such as, hello hashim would you like 
// to learn some python  today?

let hello: string = "Hashim";
console.log("Hello ${hello}, would you like to learn some python today");

//3 Name cases: store person name,s in a variable and then print that person,s
// name in lowercase,uppercase,and titlecase.

let person_name = "hashim"  ;
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
console.log(person_name.charAt(0).toUpperCase()+person_name.slice(1));
console.log(person_name.slice(0,3));

// 4 Famousequote:find a quote frome a famous person you admire.print the quote and 
// the name of its author. your outputshpuld look something like the following 
// including the quotation marks:
// alberrt Einstein once said, A person who never made mistake never tried
// anything new.

console.log('Tonny Robbin once said,"settin goals is the firt step in turning the invisible into the visible"');

//5 Famouse quote2: Repeat  exercise 4, but this time store the famouse person,s name 
//a variable called famouse_person then compose your messege and store it in 
//a new variable messege. print your messege.

let famouse_person ='Tonny Robbin';
let quote = "settin goals is the first stepin turning the invisible into the visible";
console.log('${famouse_person} once said,${quote}');

//6 Stripping name : store a person,s name .and include some whitespace at the 
//beginnig and end of the neme.make sure you use each character combination "\t"
//and "\n",at least once. print the neme once .so the whitespace around the name 
//is displayed.then print the name after striping the white space.

let personName: string ='\t\n  Hashim \n\t';
console.log("original:", personName);
console.log("stripped:", personName.trim());

//7 Number eiight: write addition. subtraction. multippication. and adivision operations
//that each result in the number 8 Be sure to enclose your operations in print
//statements to see the result.

//8 You should create four lines that look like this:

console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);

//9 Favorit number: store your favorite number in a variable. then using thet 
//variable. create a messege that reveals your favorite number print that messege;

let favoriteNumber: number = 12;
console.log('my favorite number is ${favoriteNumber},');

//10 Adding Comments: Choose two of the programs you’ve written, and add at least 
//one comment to each. If you don’t have anything specific to write because
 //your programs are too simple at this point, just add your nameand the current date at the top
 //of each program file. Then write one sentence describing what the program does. 

author: [M Hashim];
date: [Monday , Feburay 12 , 2024];

task 9: printing my favorite number;

let favoriteNumber: number = 12;

reveling my favorite number in a messege formate;
console.log('My favorite number is ${favoriteNumber},');

//11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names : string [] = ["Hashim","Ramzan","hanif","imam bus",];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

//12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names : string [] = ["Hashim","Ramzan","hanif","imam bux",];
let messege : string = "Do you like to play football?";
console.log(names[0] +" "+ messege);
console.log(names[1] +" "+ messege);
console.log(names[2] +" "+ messege);
console.log(names[3] +" "+ messege);

//13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of 
//statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation : string [] = ["united motorcycle","audi","honda","bus",];
transportation.map((items) => console.log('i would like to own a ${items}'));

//14 Guest List: If you could invite anyone, living or deceased, to dinner, who
///you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest_list : string[] = ['Hashim','Ramzan','hanif','imam bux'];
for(let i=0; i<guest_list.length; i++){
   console.log('Dear Mr .'+ guest_list [i] + 
',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}


//15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

let guest_list : string[] = ['Hashim','Ramzan','hanif','imam bux'];
for(let i=0; i<guest_list.length; i++){
 console.log('Dear Mr .'+ guest_list [i] + 
',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

let absent_guest : string = 'Hashim' ;

let new_guest : string = 'latif';

guest_list[0] = new_guest ;

for(let i=0; i<guest_list.length; i++){

 console.log('Dear mr'+ guest_list [i] + 
',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

console.log('Mr. ${absent_guest} is not coming to the party.');


//16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guest_list : string[] = ['Hashim','Ramzan','hanif','imam bux'];

let absent_guest : string = 'Hashim' ;

let new_guest : string = 'latif';

guest_list[0] = new_guest ;
for(let i=0; i<guest_list.length; i++){
 console.log('Dear Mr.'+ guest_list [i] + 
',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}
console.log('Mr. ${absent_guest} is not coming to the party.')
console.log('Good news ! we find big table so we are inviting 3 more guests.');
guest_list.unshift('sir khan');
guest_list.splice(2 , 0 ,'course');
guest_list.push('metaverse');
for(let i=0; i<guest_list.length; i++){
   console.log('Dear Mr .'+ guest_list [i] + 
   ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
   }

// 17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guest_list : string[] = ['Hashim','Ramzan','hanif','imam bux'];

let absent_guest : string = 'Hashim' ;

let new_guest : string = 'latif';

guest_list[0] = new_guest ;

console.log('Mr. ${absent_guest} is not coming to the party.');

console.log('Good news ! we find big table so we are inviting 3 more guests.');

// array me 3 guest add kiye hain.
guest_list.unshift('sir khan');

guest_list.splice(2 , 0 ,'course');

guest_list.push('metaverse');


//yahan per mene 6guest ke array ko print kraya hai.
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr .'+ guest_list [i] + 
   ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
   }
sorry messege to guest for not inviting.
   console.log('\nsorry we can not arrange big table, only two people will be invited');
   
   //yahan per  mene guest remove kiye hain.
   while(guest_list.length > 2){
   let Remove_guest = guest_list.pop();
   console.log('sorry Mr. ${Remove_guest}, you are not invited for Dinner.');
  }

  //hamare bache howe 2 invited guest.
   for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr .'+ guest_list [i] + 
   ',\n\nyou are still invited.\n\nThank you!\n\n')
   }
   
//mene sare guest array se remove kar diye
   guest_list.slice(0, 2);

   console.log(guest_list);
   
   //18 Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

 let messege :string[] = ['italy','germany','agra','pakistan','dubai'];

// • Print your array in its original order.
 console.log('orignal '+ messege);

// • Print your array in alphabetical order without modifying the actual list.
 console.log('copy ' + [...messege].sort());

// • Show that your array is still in its original order by printing it.
 console.log('orignal ' + messege);
// • Print your array in reverse alphabetical order without changing the order of the original list.
 console.log('copy ' + [...messege].sort().reverse());

// • Show that your array is still in its original order by printing it again.
 console.log('orignal ' + messege);

// • Reverse the order of your list. Print the array to show that its order has changed.
 console.log('orignal ' + messege.reverse());

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
 console.log('orignal ' + messege.reverse());

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
 console.log('orignal ' + messege.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
 console.log('orignal ' + messege.sort().reverse());



//19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guest_list : string[] = ['Hashim','Ramzan','hanif','imam bux'];

let absent_guest : string = 'Hashim' ;

let new_guest : string = 'latif';

guest_list[0] = new_guest ;

guest_list.unshift('ustad');

guest_list.splice(2, 0 ,'jannat');

guest_list.push('dua');

  while(guest_list.length > 2){
  let Remove_guest = guest_list.pop();
 }
  
  guest_list.slice(0, 2);

  console.log(guest_list);
 console.log('Total number of Guest Are: ${Guest_List.Length}');

//20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.

let items :string[] = ['pakistan','karachi','urdu'];

Write a program that creates a list containing these items.

let items2 :string[] = [];
items2.push('usa');
items2.push('dubai');
items2.push('sudia arad');
console.log(items2);

//21 They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

Datatype of person object
interface person{
   age : Number,
   name : string,
   nationalaty : string,
   student : boolean,
}

person object
let person : person = {
   age : 22,
   name : 'Muhammad Hashim',
   nationalaty : 'pakistan',
   student : true,
}

print person
console.log(person);

//Datatype of car object
interface car{
   maker : string,
   color : string,
   automatic : boolean,
}

car object
let car = {
   maker : 'honda',
   color : 'white',
   automatic : true,

}

print car
console.log(car);


//22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let newArray :string[] = ['Hashim','Ramzan'];
console.log(newArray[6]);
console.log(newArray);

//23Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = 'subaru';
// //test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// //test 2
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
// //test 3
console.log("Is car != 'Honda'? I predict True.");
console.log(car != 'Honda');
// //test 4
console.log("Is car !== 'ford'? I predict True.");
console.log(car !== 'ford');
// //test 5
console.log("Is car.Upper case == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU');
// //test 6
console.log("Is car == 'SUBARU'? I predict false.");
console.log(car == 'SUBARU');


//24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

console.log("Equality test with string:","apple" === "apple");

console.log("Equality test with string:",("apple" as string) != "orang");

console.log("lower case funtion test:","Hello".toLowerCase() === "hello");

console.log("Equality test with numbers:",27 === 27);

console.log("inquality test with number:", (26 as number) != 35);

console.log("Greater than test:", 10 > 5);

console.log("less than test:", 5 < 10);

console.log("Greater than and equal to test:", 10 >= 10);

console.log("less than or equal to test:", 5 <= 10);

console.log("And operator test:", 5===5 && 10 > 5);

console.log("or operator test:", 5===5 || 10 > 5);


const Fruit :string[] = ['Nashpati', 'Banana', 'Amrood'];
console.log('test "Nashpati" in the array:', Fruit.includes("Nashpati"));

console.log('testing "Apple" is not in array:', Fruit.includes('Apple'));

console.log('testing "Apple" is not in array:', !Fruit.includes('Apple'));


//25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

let alien_color = " green"
if(alien_color == "green")
console.log(" you earn 5 point");

let alien_color :string = "red"
if(alien_color == "green")
console.log("no output")

26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.

let alien_color = " green";

if(alien_color == "green"){
console.log(" player just earned 5 points for shooting the alien ");
} else{
   console.log("player just earned 10 points");
}

let alien_color :string = " Red";

if(alien_color == "Green"){
console.log(" player just earned 5 points for shooting the alien ");
} else{
   console.log("player just earned 10 points");
}

//27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

 let alien_color :string = "red";

 if(alien_color == "Green"){
 console.log(" 5 points");
 } else if (alien_color == "yellow"){
   console.log("10 point");
 } else{
   console.log("15 points");
 }

//28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.

let age :number = 22

if (age < 2) {
   console.log("you are a baby")
}else if (age < 4) {
   console.log("you are a toddler")
}else if (age < 13) {
   console.log("you are a kid")
}else if (age < 20) {
   console.log("you are a teenagar")
}else if (age < 65) {
   console.log("you are a adult")
}else {
   console.log("you are a older")
}

//29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits :string [] = ["kivi", " orange", "peach", "berry", "apple"];

if (favorite_fruits.includes("kivi")){
   console.log("kivi")
}

if (favorite_fruits.includes("orange")){
   console.log("orange")
}

if (favorite_fruits.includes("peach")){
   console.log("peach")
}
if (favorite_fruits.includes("berry")){
   console.log("you really like banana")
}

if (favorite_fruits.includes("apple")){
   console.log("you really like banana")
}

//30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let users :string [] = ["admin", "aric", "Hashim", "Ramzan"];

for(let user of users){
   if(user === "admin"){
      console.log("Hello admin, would you like to see a status report?")
   } else {
      console.log("Hello ${user}, thank you for logging for again")
   }
}


//31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.

let username :string [] = ["admin", "aric", "Hashim", "Ramzan"];

if(username.length === 0){
   console.log("we need to find some users!");
}else{
   username =  [];
   console.log("All user Names have been removed. " + username.length);
}

//32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users :string [] = ['admin', 'hashim', 'ramzan', 'hanif'];
let new_users :string [] = ['abdul', 'latif', 'imam', 'bux'];

let current_users_lower :string [] =current_users.map(user => user.toLowerCase())

for (let new_user of new_users){
   if (current_users_lower.includes (new_user.toLowerCase())){
      console.log("sorry ${new_user}, that name is taken");
   } else {
      console.log('yes ${new_user}, is still in available list');
   }
}

//33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let numbers : number [] = [1,2,3,4,5,6,7,8,9];

for(let number of numbers) {
   if(number === 1){
      console.log('${nubers}st')
   }else if (number === 2){
      console.log('${number}nd')
   }else if (number === 3){
      console.log('${number}rd')
}else {
   console.log('${number}th')
}
}
//34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let favorite_pizza : string [] = ['popperoni', 'chiken', 'veg'];

for (let pizza of favorite_pizza){
   console.log(pizza)
}
console.log("\n")

for(let pizza of favorite_pizza)
console.log('I really like ${pizza}, pizza!')
console.log('nI really love pizza')

//35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animal : string [] = ["cat", "lion", "dog"];

for (let animal of animals) {
   console.log('animal')
}
console.log('\n')

for (let animal of animals) {
   console.log('A ${animal} has a tail')
}

console.log("\n all of these are great pets ! but i love cat more")

36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function makeshirt(size : string , text : string): void {
   console.log('\n you order a ${size} shirt that says ${text}')
}

makeshirt('large', "I love typescript")
makeshirt('mediume', "I need a big shirt")

//37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeshirt(size : string = 'large', text : string = "I love typescript"): void{
   console.log('you have order a ${size}, shirt that says ${text}');
}

makeshirt('small', 'I need a big shirt to wear');

//38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city: string, counry: string = 'pakistan'): void{
   console.log('${city}, is in {country}')
}
describe_city('karachi')
describe_city('france', 'europe')
describe_city('lahor', 'balochistan')

//39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.

function cityCountry(city : string, country : string): string {
   return '${city}, ${counry}'
}

let c1 = cityCountry('karachi', 'pakistan')
let c2 = cityCountry('tokyo', 'japan')
let c3 = cityCountry('paris', 'france')

console.log(c1);
console.log(c2);
console.log(c3);

//40 Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist: string, title: string){artist: String; title : String}
{
   const dictionaries = {
      artist: artist.charAt(0).toUpperCase() + artist.slice(1)
      title: title.charAt(0).toUpperCase() + title.slice(1)
   }
    return dictionaries;
}
let album = make_album('Hashim', 'light')
console.log(album);

album = make_album('Ramzan', 'red wave')
console.log(album);

album = make_album('Imam', 'seenbrez')
console.log(album);


//41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians :string[]): void{
   for(const magician of magicians){
      console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
   }
}
const magician: string [] = ['hashim', 'ramzan', 'imam'];
show_magicians(magician)

42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function show_magicians(magicians :string[]): void{
   for(const magician of magicians){
      console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
   }
}

function make_great(magicians :string[]): void {
   for( let i = 0; i < magicians.length; i++ ){
      magicians[i] = magicians[i] + ' the great'
   }
}

const magicians2: string [] = ['hashim', 'ramzan', 'imam'];
make_great(magicians2)
show_magicians(magicians2)

//43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magicians(magicians :string[]): void{
      for(const magician of magicians){
         console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
      }
   }

function make_great2(magicians :string[]):string [] {
   const greatMagicians :string [] = [];
   for(let i = 0; i < magicians.length; i++){
      greatMagicians.push(magicians[i] + ' the great');
   }
   return greatMagicians;
}

const magicians3 :string[] = ['hashim', 'ramzan', 'imam bux'];
const greatmagicians2 :string[] = make_great2(magicians3);

show_magicians(magicians3);
show_magicians(greatmagicians2);

//44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwich(...items: string[]): void{
   console.log("sandwich order:")

   for (let i = 0; i < items.length; i++){
      console.log('- ${items[i]}')
   }
}
sandwich('capsicum', 'tomato', 'chicken');
sandwich('beef', 'cheese');
sandwich('garlic chicken', 'mayo sauce');
console.log("enjoy your sandwich Hashim");



//45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

type car = {
   manufacture: string
   model: string
   [key: string]: any;
}
function createcar(manufacture: string, model: string, optional: Record < string, any>)
car {
   return{
      manufacture,
      model;
      ...optional

   }
}

const mycar: car = createcar("toyota", "corolla", { color: "silver", year: "2024"});
console.log(mycar);