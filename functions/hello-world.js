const qs = require("querystring");
const fetch = require("node-fetch");
const Xendit = require("xendit-node");
exports.handler = async function (event) {
	const { query } = qs.parse(event.body);
	const x = new Xendit({
		secretKey: process.env.API_KEY_XENDIT,
	});
	const { Invoice } = x;
	const invoiceSpecificOptions = {};
	const i = new Invoice(invoiceSpecificOptions);
	const resp = await i
		.createInvoice({
			externalID: "ppp",
			payerEmail: query,
			description: "tes",
			amount: 10000,

			successRedirectURL: "https://mhdhanif.me",
			failureRedirectURL: "https://meikelstore.site",
		})
		.then(({ id }) => {
			return id;
		});
	const url = await i.getInvoice({
		invoiceID: resp,
	});

	return {
		statusCode: 200,
		body: JSON.stringify(url),
	};
};
