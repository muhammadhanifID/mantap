const qs = require("querystring");
exports.handler = async function (event) {
	var tes = console.log(event.body);
	return {
		headers: {
			"Content-Type": "application/json",
		},

		statusCode: 200,
		body: JSON.stringify(event.body),
	};
};
