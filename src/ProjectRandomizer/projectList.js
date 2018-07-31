import projectSource from './projectSource';

let projectList = [
  {
    description: "Find PI to the Nth Digit - Enter a number and have the program generate PI up to that many decimal places. Keep a limit to how far the program will go.",
    source: projectSource[1],
  },
  {
    description: "Find e to the Nth Digit - Just like the previous problem, but with e instead of PI. Enter a number and have the program generate e up to that many decimal places. Keep a limit to how far the program will go.",
    source: projectSource[1],
  },
  {
    description: "Fibonacci Sequence - Enter a number and have the program generate the Fibonacci sequence to that number or to the Nth number.",
    source: projectSource[1],
  },
  {
    description: "Prime Factorization - Have the user enter a number and find all Prime Factors (if there are any) and display them.",
    source: projectSource[1],
  },
  {
    description: "Next Prime Number - Have the program find prime numbers until the user chooses to stop asking for the next one.",
    source: projectSource[1],
  },
  {
    description: "Find Cost of Tile to Cover W x H Floor - Calculate the total cost of tile it would take to cover a floor plan of width and height, using a cost entered by the user.",
    source: projectSource[1],
  },
  {
    description: "Mortgage Calculator - Calculate the monthly payments of a fixed term mortgage over given Nth terms at a given interest rate. Also figure out how long it will take the user to pay back the loan. For added complexity, add an option for users to select the compounding interval (Monthly, Weekly, Daily, Continually).",
    source: projectSource[1],
  },
  {
    description: "Change Return Program - The user enters a cost and then the amount of money given. The program will figure out the change and the number of quarters, dimes, nickels, pennies needed for the change.",
    source: projectSource[1],
  },
  {
    description: "Binary to Decimal and Back Converter - Develop a converter to convert a decimal number to binary or a binary number to its decimal equivalent.",
    source: projectSource[1],
  },
  {
    description: "Calculator - A simple calculator to do basic operators. Make it a scientific calculator for added complexity.",
    source: projectSource[1],
  },
  {
    description: "Unit Converter (temp, currency, volume, mass and more) - Converts various units between one another. The user enters the type of unit being entered, the type of unit they want to convert to and then the value. The program will then make the conversion.",
    source: projectSource[1],
  },
  {
    description: "Alarm Clock - A simple clock where it plays a sound after X number of minutes/seconds or at a particular time.",
    source: projectSource[1],
  },
  {
    description: "Distance Between Two Cities - Calculates the distance between two cities and allows the user to specify a unit of distance. This program may require finding coordinates for the cities like latitude and longitude.",
    source: projectSource[1],
  },
  {
    description: "Credit Card Validator - Takes in a credit card number from a common credit card vendor (Visa, MasterCard, American Express, Discoverer) and validates it to make sure that it is a valid number (look into how credit cards use a checksum).",
    source: projectSource[1],
  },
  {
    description: "Tax Calculator - Asks the user to enter a cost and either a country or state tax. It then returns the tax plus the total cost with tax.",
    source: projectSource[1],
  },
  {
    description: "Factorial Finder - The Factorial of a positive integer, n, is defined as the product of the sequence n, n-1, n-2, ...1 and the factorial of zero, 0, is defined as being 1. Solve this using both loops and recursion.",
    source: projectSource[1],
  },
  {
    description: "Complex Number Algebra - Show addition, multiplication, negation, and inversion of complex numbers in separate functions. (Subtraction and division operations can be made with pairs of these operations.) Print the results for each operation tested.",
    source: projectSource[1],
  },
  {
    description: "Happy Numbers - A happy number is defined by the following process. Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers. Display an example of your output here. Find first 8 happy numbers.",
    source: projectSource[1],
  },
  {
    description: "Number Names - Show how to spell out a number in English. You can use a preexisting implementation or roll your own, but you should support inputs up to at least one million (or the maximum value of your language's default bounded integer type, if that's less). *Optional: Support for inputs other than positive integers (like zero, negative integers, and floating-point numbers).*",
    source: projectSource[1],
  },
  {
    description: "Coin Flip Simulation - Write some code that simulates flipping a single coin however many times the user decides. The code should record the outcomes and count the number of tails and heads.",
    source: projectSource[1],
  },
  {
    description: "Limit Calculator - Ask the user to enter f(x) and the limit value, then return the value of the limit statement *Optional: Make the calculator capable of supporting infinite limits.*",
    source: projectSource[1],
  },
  {
    description: "Fast Exponentiation - Ask the user to enter 2 integers a and b and output a^b (i.e. pow(a,b)) in O(lg n) time complexity.",
    source: projectSource[1],
  },
  {
    description: "Collatz Conjecture - Start with a number *n > 1*. Find the number of steps it takes to reach one using the following process: If *n* is even, divide it by 2. If *n* is odd, multiply it by 3 and add 1.",
    source: projectSource[1],
  },
  {
    description: "Sorting - Implement two types of sorting algorithms: Merge sort and bubble sort.",
    source: projectSource[1],
  },
  {
    description: "Closest pair problem - The closest pair of points problem or closest pair problem is a problem of computational geometry: given *n* points in metric space, find a pair of points with the smallest distance between them.",
    source: projectSource[1],
  },
  {
    description: "Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways to find all of the smaller primes (below 10 million or so).",
    source: projectSource[1],
  },
  {
    description: "Graph from links - Create a program that will create a graph or network from a series of links.",
    source: projectSource[1],
  },
  {
    description: "Eulerian Path - Create a program which will take as an input a graph and output either a Eulerian path or a Eulerian cycle, or state that it is not possible.  A Eulerian Path starts at one node and traverses every edge of a graph  through every node and finishes at another node.  A Eulerian cycle is a eulerian Path that starts and finishes at the same node.",
    source: projectSource[1],
  },
  {
    description: "Connected Graph - Create a program which takes a graph as an input and outputs whether every node is connected or not.",
    source: projectSource[1],
  },
  {
    description: "Dijkstra’s Algorithm - Create a program that finds the shortest path through a graph using its edges.",
    source: projectSource[1],
  },
  {
    description: "Minimum Spanning Tree - Create a program which takes a connected, undirected graph with weights and outputs the minimum spanning tree of the graph i.e., a",
    source: projectSource[1],
  },
  {
    description: "subgraph that is a tree, contains all the vertices, and the sum of its weights is the least possible.",
    source: projectSource[1],
  },
  {
    description: "Inverted index - An [Inverted Index](http://en.wikipedia.org/wiki/Inverted_index) is a data structure used to create full text search. Given a set of text files, implement a program to create an inverted index. Also create a user interface to do a search using that inverted index which returns a list of files that contain the query term / terms. The search index can be in memory.",
    source: projectSource[1],
  },
  {
    description: "Fizz Buzz - Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.",
    source: projectSource[1],
  },
  {
    description: "Reverse a String - Enter a string and the program will reverse it and print it out.",
    source: projectSource[1],
  },
  {
    description: "Pig Latin - Pig Latin is a game of alterations played on the English language game. To create the Pig Latin form of an English word the initial consonant sound is transposed to the end of the word and an ay is affixed (Ex.: 'banana' would yield anana-bay). Read Wikipedia for more information on rules.",
    source: projectSource[1],
  },
  {
    description: "Count Vowels - Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.",
    source: projectSource[1],
  },
  {
    description: "Check if Palindrome - Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”",
    source: projectSource[1],
  },
  {
    description: "Count Words in a String - Counts the number of individual words in a string. For added complexity read these strings in from a text file and generate a summary.",
    source: projectSource[1],
  },
  {
    description: "Text Editor - Notepad style application that can open, edit, and save text documents. *Optional: Add syntax highlighting and other features.*",
    source: projectSource[1],
  },
  {
    description: "RSS Feed Creator - Given a link to RSS/Atom Feed, get all posts and display them.",
    source: projectSource[1],
  },
  {
    description: "Quote Tracker (market symbols etc) - A program which can go out and check the current value of stocks for a list of symbols entered by the user. The user can set how often the stocks are checked. For CLI, show whether the stock has moved up or down. *Optional: If GUI, the program can show green up and red down arrows to show which direction the stock value has moved.*",
    source: projectSource[1],
  },
  {
    description: "Guestbook / Journal - A simple application that allows people to add comments or write journal entries. It can allow comments or not and timestamps for all entries. Could also be made into a shout box. *Optional: Deploy it on Google App Engine or Heroku or any other PaaS (if possible, of course).*",
    source: projectSource[1],
  },
  {
    description: "Vigenere / Vernam / Ceasar Ciphers - Functions for encrypting and decrypting data messages. Then send them to a friend.",
    source: projectSource[1],
  },
  {
    description: "Regex Query Tool - A tool that allows the user to enter a text string and then in a separate control enter a regex pattern. It will run the regular expression against the source text and return any matches or flag errors in the regular expression.",
    source: projectSource[1],
  },
  {
    description: "FTP Program - A file transfer program which can transfer files back and forth from a remote web sever.",
    source: projectSource[1],
  },
  {
    description: "Bandwidth Monitor - A small utility program that tracks how much data you have uploaded and downloaded from the net during the course of your current online session. See if you can find out what periods of the day you use more and less and generate a report or graph that shows it.",
    source: projectSource[1],
  },
  {
    description: "Port Scanner - Enter an IP address and a port range where the program will then attempt to find open ports on the given computer by connecting to each of them. On any successful connections mark the port as open.",
    source: projectSource[1],
  },
  {
    description: "Mail Checker (POP3 / IMAP) - The user enters various account information include web server and IP, protocol type (POP3 or IMAP) and the application will check for email at a given interval.",
    source: projectSource[1],
  },
  {
    description: "Country from IP Lookup - Enter an IP address and find the country that IP is registered in. *Optional: Find the Ip automatically.*",
    source: projectSource[1],
  },
  {
    description: "Whois Search Tool - Enter an IP or host address and have it look it up through whois and return the results to you.",
    source: projectSource[1],
  },
  {
    description: "Site Checker with Time Scheduling - An application that attempts to connect to a website or server every so many minutes or a given time and check if it is up. If it is down, it will notify you by email or by posting a notice on screen.",
    source: projectSource[1],
  },
  {
    description: "Product Inventory Project - Create an application which manages an inventory of products. Create a product class which has a price, id, and quantity on hand. Then create an *inventory* class which keeps track of various products and can sum up the inventory value.",
    source: projectSource[1],
  },
  {
    description: "Airline / Hotel Reservation System - Create a reservation system which books airline seats or hotel rooms. It charges various rates for particular sections of the plane or hotel. Example, first class is going to cost more than coach. Hotel rooms have penthouse suites which cost more. Keep track of when rooms will be available and can be scheduled.",
    source: projectSource[1],
  },
  {
    description: "Company Manager - Create an hierarchy of classes - abstract class Employee and subclasses HourlyEmployee, SalariedEmployee, Manager and Executive. Every one's pay is calculated differently, research a bit about it.",
    source: projectSource[1],
  },
  {
    description: "After you've established an employee hierarchy, create a Company class that allows you to manage the employees. You should be able to hire, fire and raise employees. ",
    source: projectSource[1],
  },
  {
    description: "Bank Account Manager - Create a class called Account which will be an abstract class for three other classes called CheckingAccount, SavingsAccount and BusinessAccount. Manage credits and debits from these accounts through an ATM style program.",
    source: projectSource[1],
  },
  {
    description: "Patient / Doctor Scheduler - Create a patient class and a doctor class. Have a doctor that can handle multiple patients and setup a scheduling program where a doctor can only handle 16 patients during an 8 hr work day.",
    source: projectSource[1],
  },
  {
    description: "Recipe Creator and Manager - Create a recipe class with ingredients and a put them in a recipe manager program that organizes them into categories like deserts, main courses or by ingredients like chicken, beef, soups, pies etc.",
    source: projectSource[1],
  },
  {
    description: "Image Gallery - Create an image abstract class and then a class that inherits from it for each image type. Put them in a program which displays them in a gallery style format for viewing.",
    source: projectSource[1],
  },
  {
    description: "Shape Area and Perimeter Classes - Create an abstract class called Shape and then inherit from it other shapes like diamond, rectangle, circle, triangle etc. Then have each class override the area and perimeter functionality to handle each shape type.",
    source: projectSource[1],
  },
  {
    description: "Flower Shop Ordering To Go - Create a flower shop application which deals in flower objects and use those flower objects in a bouquet object which can then be sold. Keep track of the number of objects and when you may need to order more.",
    source: projectSource[1],
  },
  {
    description: "Family Tree Creator - Create a class called Person which will have a name, when they were born and when (and if) they died. Allow the user to create these Person classes and put them into a family tree structure. Print out the tree to the screen.",
    source: projectSource[1],
  },
  {
    description: "Create A Progress Bar for Downloads - Create a progress bar for applications that can keep track of a download in progress. The progress bar will be on a separate thread and will communicate with the main thread using delegates.",
    source: projectSource[1],
  },
  {
    description: "Bulk Thumbnail Creator - Picture processing can take a bit of time for some transformations. Especially if the image is large. Create an image program which can take hundreds of images and converts them to a specified size in the background thread while you do other things. For added complexity, have one thread handling re-sizing, have another bulk renaming of thumbnails etc.",
    source: projectSource[1],
  },
  {
    description: "Page Scraper - Create an application which connects to a site and pulls out all links, or images, and saves them to a list. *Optional: Organize the indexed content and don’t allow duplicates. Have it put the results into an easily searchable index file.*",
    source: projectSource[1],
  },
  {
    description: "Online White Board - Create an application which allows you to draw pictures, write notes and use various colors to flesh out ideas for projects. *Optional: Add feature to invite friends to collaborate on a white board online.*",
    source: projectSource[1],
  },
  {
    description: "Get Atomic Time from Internet Clock - This program will get the true atomic time from an atomic time clock on the Internet. Use any one of the atomic clocks returned by a simple Google search.",
    source: projectSource[1],
  },
  {
    description: "Fetch Current Weather - Get the current weather for a given zip/postal code. *Optional: Try locating the user automatically.*",
    source: projectSource[1],
  },
  {
    description: "Scheduled Auto Login and Action - Make an application which logs into a given site on a schedule and invokes a certain action and then logs out. This can be useful for checking web mail, posting regular content, or getting info for other applications and saving it to your computer.",
    source: projectSource[1],
  },
  {
    description: "E-Card Generator - Make a site that allows people to generate their own little e-cards and send them to other people. Do not use Flash. Use a picture library and perhaps insightful mottos or quotes.",
    source: projectSource[1],
  },
  {
    description: "Content Management System - Create a content management system (CMS) like Joomla, Drupal, PHP Nuke etc. Start small. *Optional: Allow for the addition of modules/addons.*",
    source: projectSource[1],
  },
  {
    description: "Web Board (Forum) - Create a forum for you and your buddies to post, administer and share thoughts and ideas.",
    source: projectSource[1],
  },
  {
    description: "CAPTCHA Maker - Ever see those images with letters a numbers when you signup for a service and then asks you to enter what you see? It keeps web bots from automatically signing up and spamming. Try creating one yourself for online forms.",
    source: projectSource[1],
  },
  {
    description: "Quiz Maker - Make an application which takes various questions from a file, picked randomly, and puts together a quiz for students. Each quiz can be different and then reads a key to grade the quizzes.",
    source: projectSource[1],
  },
  {
    description: "Sort Excel/CSV File Utility - Reads a file of records, sorts them, and then writes them back to the file. Allow the user to choose various sort style and sorting based on a particular field.",
    source: projectSource[1],
  },
  {
    description: "Create Zip File Maker - The user enters various files from different directories and the program zips them up into a zip file. *Optional: Apply actual compression to the files. Start with Huffman Algorithm.*",
    source: projectSource[1],
  },
  {
    description: "PDF Generator - An application which can read in a text file, html file or some other file and generates a PDF file out of it. Great for a web based service where the user uploads the file and the program returns a PDF of the file. *Optional: Deploy on GAE or Heroku if possible.*",
    source: projectSource[1],
  },
  {
    description: "Mp3 Tagger - Modify and add ID3v1 tags to MP3 files. See if you can also add in the album art into the MP3 file’s header as well as other ID3v2 tags.",
    source: projectSource[1],
  },
  {
    description: "Code Snippet Manager - Another utility program that allows coders to put in functions, classes or other tidbits to save for use later. Organized by the type of snippet or language the coder can quickly look up code. *Optional: For extra practice try adding syntax highlighting based on the language.*",
    source: projectSource[1],
  },
  {
    description: "SQL Query Analyzer - A utility application which a user can enter a query and have it run against a local database and look for ways to make it more efficient.",
    source: projectSource[1],
  },
  {
    description: "Remote SQL Tool - A utility that can execute queries on remote servers from your local computer across the Internet. It should take in a remote host, user name and password, run the query and return the results.",
    source: projectSource[1],
  },
  {
    description: "Report Generator - Create a utility that generates a report based on some tables in a database. Generates a sales reports based on the order/order details tables or sums up the days current database activity.",
    source: projectSource[1],
  },
  {
    description: "Event Scheduler and Calendar - Make an application which allows the user to enter a date and time of an event, event notes and then schedule those events on a calendar. The user can then browse the calendar or search the calendar for specific events. *Optional: Allow the application to create re-occurrence events that reoccur every day, week, month, year etc.*",
    source: projectSource[1],
  },
  {
    description: "Budget Tracker - Write an application that keeps track of a household’s budget. The user can add expenses, income, and recurring costs to find out how much they are saving or losing over a period of time. *Optional: Allow the user to specify a date range and see the net flow of money in and out of the house budget for that time period.*",
    source: projectSource[1],
  },
  {
    description: "TV Show Tracker - Got a favorite show you don’t want to miss? Don’t have a PVR or want to be able to find the show to then PVR it later? Make an application which can search various online TV Guide sites, locate the shows/times/channels and add them to a database application. The database/website then can send you email reminders that a show is about to start and which channel it will be on.",
    source: projectSource[1],
  },
  {
    description: "Travel Planner System - Make a system that allows users to put together their own little travel itinerary and keep track of the airline / hotel arrangements, points of interest, budget and schedule.",
    source: projectSource[1],
  },
  {
    description: "Slide Show - Make an application that shows various pictures in a slide show format. *Optional: Try adding various effects like fade in/out, star wipe and window blinds transitions.*",
    source: projectSource[1],
  },
  {
    description: "Stream Video from Online - Try to create your own online streaming video player.",
    source: projectSource[1],
  },
  {
    description: "Mp3 Player - A simple program for playing your favorite music files. Add features you think are missing from your favorite music player.",
    source: projectSource[1],
  },
  {
    description: "Watermarking Application - Have some pictures you want copyright protected? Add your own logo or text lightly across the background so that no one can simply steal your graphics off your site. Make a program that will add this watermark to the picture. *Optional: Use threading to process multiple images simultaneously.*",
    source: projectSource[1],
  },
  {
    description: "Turtle Graphics - This is a common project where you create a floor of 20 x 20 squares. Using various commands you tell a turtle to draw a line on the floor. You have move forward, left or right, lift or drop pen etc. Do a search online for 'Turtle Graphics' for more information. *Optional: Allow the program to read in the list of commands from a file.*",
    source: projectSource[1],
  },
  {
    description: "GIF Creator A program that puts together multiple images (PNGs, JPGs, TIFFs) to make a smooth GIF that can be exported. *Optional: Make the program convert small video files to GIFs as well.*",
    source: projectSource[1],
  },
  {
    description: "Caesar cipher - Implement a Caesar cipher, both encoding and decoding. The key is an integer from 1 to 25. This cipher rotates the letters of the alphabet (A to Z). The encoding replaces each letter with the 1st to 25th next letter in the alphabet (wrapping Z to A). So key 2 encrypts 'HI' to 'JK', but key 20 encrypts 'HI' to 'BC'. This simple 'monoalphabetic substitution cipher' provides almost no security, because an attacker who has the encoded message can either use frequency analysis to guess the key, or just try all 25 keys.",
    source: projectSource[1],
  }
]

export default projectList;