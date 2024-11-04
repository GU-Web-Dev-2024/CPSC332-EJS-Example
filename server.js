// Import the express module, which is a minimal and flexible Node.js web application framework
const express = require("express");
// Create an instance of the express application
const app = express();

// Define the port the server will listen on; uses environment variable if available or defaults to 3000
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the 'public' directory (e.g., images, CSS files, JavaScript files)
// Previously commented out to prevent serving static index.html (this would prevent our / route from
// being served)
// Put back in after renaming index.html so we can access resources in the /public/ directory
// In this case, favicon.png
app.use(express.static("public"));

// set our view engine to ejs
// we want to use embedded javascript "template" files
app.set("view engine", "ejs");

// Middleware to parse URL-encoded data in the request body and make it available in req.body
// The 'extended: false' option uses the querystring library for parsing
app.use(express.urlencoded({ extended: false }));

// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

// Define a GET route for the root path ('/') that serves an HTML form
app.get("/", (req, res) => {
    // Method for the form submission is set to POST
    const method = "POST";

    // Create the HTML content that will be sent as the response
    // No longer needed
    // const htmlContent = ``;

    // Send the generated HTML content as the response
    //res.send(htmlContent);
    // Render the ejs instead of the string.
    res.render("index.ejs");
});

// Define a GET route for '/submit' that handles form submissions with query parameters
app.get("/submit", (req, res) => {
    // Extract query parameters from the request
    let first = req.query.first;
    let last = req.query.last;
    let summary = req.query.summary;
    let item1 = req.query.item1 ? true : false; // Check if 'item1' is present and set it to true or false

    // Create the HTML content to display the submitted data
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="favicon.png">
        <title>Submission Page</title>
        <style>
            table, th { border: 1px solid black; }
            td { border: 1px dotted black; }
        </style>    
    </head>
    <body>
        <h1>Submission Results Page</h1>
        <table id="results-table">
            <caption>Widget values submitted on the previous page</caption>
            <tr>
                <th>Widget Name</th>
                <th>Widget Value</th>
            </tr>
            <tr><td>First</td><td>${first}</td></tr>
            <tr><td>Last</td><td>${last}</td></tr>
            <tr><td>Summary</td><td>${summary}</td></tr>
            <tr><td>item1</td><td>${item1}</td></tr>
        </table>
    </body>
    </html>
    `;

    // Send the generated HTML content as the response
    res.send(htmlContent);
});

// Define a POST route for '/submit' that handles form submissions with data in the request body
app.post("/submit", (req, res) => {
    // Extract form data from the request body
    let first = req.body.first;
    let last = req.body.last;
    let summary = req.body.summary;
    let item1 = req.body.item1 ? true : false; // Check if 'item1' is present and set it to true or false

    // Create the HTML content to display the submitted data
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="favicon.png">
        <title>Submission Page</title>
        <style>
            table, th { border: 1px solid black; }
            td { border: 1px dotted black; }
        </style>    
    </head>
    <body>
        <h1>Submission Results Page</h1>
        <table id="results-table">
            <caption>Widget values submitted on the previous page</caption>
            <tr>
                <th>Widget Name</th>
                <th>Widget Value</th>
            </tr>
            <tr><td>First</td><td>${first}</td></tr>
            <tr><td>Last</td><td>${last}</td></tr>
            <tr><td>Summary</td><td>${summary}</td></tr>
            <tr><td>item1</td><td>${item1}</td></tr>
        </table>
        <!-- Link to go back to the main form page -->
        <div style="margin: 20px;">
            <a href="/">Back</a>
        </div>
    </body>
    </html>
    `;

    // Send the generated HTML content as the response
    res.send(htmlContent);
});
