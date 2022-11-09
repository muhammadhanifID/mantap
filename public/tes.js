const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.get("/form", (req, res) => {
	res.send(req.body);
});
app.post("/formPost", (req, res) => {
	res.send(req.body);
	console.log(req.body);
});
app.listen(port, () => {
	console.log("server started 5000");
});
