const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

//commented out for now so we don't serve the static index.html
//app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

//adding an express route and using query string parameters
app.get("/", (req, res) => {
    //res.send(new DOMParser().parseFromString(htmlContent));
    var htmlContent = `
    <!-- This is the Chapter 3 Demo page    
        More HTML for CPSC 332 -->

    <!DOCTYPE html>
    <html lang="en">

    <head>
            <title>REAL Form Demo</title>
            <link rel="icon" href="favicon2.png">
            <style>
                    body {
                            text-align: center;
                            margin: auto;
                            max-width: 600px;
                            padding: 15px;
                    }

                    #container {
                            border: 3px solid blue;
                            border-radius: 15px;
                            padding: 15px;
                    }
            </style>
    </head>

    <body>
            <div id="container">
                    <h1>Hello, World! New web page, who is this?</h1>
                    <img src="https://placehold.co/400x200"
                            alt="Shamelessly stolen from https://i.kym-cdn.com/photos/images/original/000/000/601/C6QJPRHW4QF6KFDP7XJNW24TNDI4YNF2.jpg">

                    <form action="submission.html" method="GET">

                            <p>
                                    <label for="first">First Name:</label>
                                    <input type="text" name="first" id="first">
                            </p>

                            <p>
                                    <label for="last">Last Name:</label>
                                    <input type="text" name="last" id="last">
                            </p>

                            <p>
                                    <textarea name="summary" rows="4" cols="50" placeholder="enter text here"></textarea>
                            </p>

                            <p>
                                    <label for="item1">Item 1:</label>
                                    <input type="checkbox" name="item1" id="item1">
                            </p>

                            <input type="submit" value="Submit Feedback">
                    </form>
            </div>
    </body>

    </html>
`;
    res.send(htmlContent);
});

