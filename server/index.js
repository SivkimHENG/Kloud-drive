import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";

const app = express();

app.use(cors());

let startServer = async () => {
	try {
		await connectDB();
		app.listen(3000, () => {
			console.log("Server running on 80 port number");
		});
	} catch (error) {
		console.error("Database not connecting with the server");
	}
};

startServer();
