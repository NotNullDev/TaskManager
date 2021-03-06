const express = require("express")
const path = require("path");
const connection = require("./middleware/connection");
const cors = require("cors");

// fs.readFile("data.json", (err, d) => {
//     if (err) console.log("error reading file");
//     data = JSON.parse(d);
//     console.log(`data: ${d} type: ${typeof data}`)
// });

const app = express();
const port = 8000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(connection);
app.use(cors());

//data api
app.use("/api/data", require("./routes/api/data"));

app.get("/", (req, res) => res.send());

// const saveData = (dataToSave) => {
//     fs.writeFile(
//         "data.json", JSON.stringify(dataToSave), err => {
//         });
//     data = dataToSave;
// }


app.listen(port, () => console.log(`Server started at port ${port}`));