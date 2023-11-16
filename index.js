const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
const expressHbs = require("express-handlebars");

// Cấu hình trả về thư mục web tĩnh
app.use(express.static(__dirname + "/html"));

// Cấu hình sử dụng View Template
app.engine(
    "hbs", 
    expressHbs.engine({
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
        defaultLayout: "layout",
        extname: "hbs"
    })
);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/html/index.htm");
    res.render("index");
});

app.use("/task1.htm", require("./routes/task1Route"));
app.use("/task2.htm", require("./routes/task2Route"));
app.use("/task3.htm", require("./routes/task3Route"));
app.use("/task4.htm", require("./routes/task4Route"));

// app.get("/task1.htm", (req, res) => {
//     let { emotions } = require("./data");
//     // res.locals.emotions = emotions;
//     // res.render("task1");

//     res.render("task1", { emotions });
// });

app.get("/admin", (req, res) => {
    res.render("index", { layout: "admin" }); // Ko khai báo layout thì dùng default layout
});

// Gọi từng Static File >>> Thay bằng khai báo thư mục web tĩnh 
// app.get("/images/lang-logo.png", (req, res) => {
//     res.sendFile(__dirname + "/html/imageS/lang-logo.png");
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});