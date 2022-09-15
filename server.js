const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const path = require("path");


const PORT = process.env.PORT || 3001;

const app = express();
const pdfTemplate = require("./documents");
const options = {
	height: "42cm",
	width: "29.7cm",
	timeout: "6000",
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/client/build")));



// POST route for PDF generation....
app.post("/create-pdf", (req, res) => {
	pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {
		if (err) {
			console.log(err);
			res.send(Promise.reject());
		} else res.send(Promise.resolve());
	});
});
app.get("/api", (req, res) => {
	res.json({ message: "Hello from server!" });
  });

// GET route -> send generated PDF to client...
app.get("/fetch-pdf", (req, res) => {
	const file = path.join(__dirname, `/Resume.pdf`);
	console.log(file);
	console.log("show");
	res.download(file);
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});