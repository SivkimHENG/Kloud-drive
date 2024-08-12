import express from "express";
import cors from "cors";
import env from "dotenv";

env.config();
const PORT = 3000;
const app = express();



app.get("/", (_, res) => {

	res.json({ Info: "Hello world" })

})







app.listen(PORT, () => {
	console.log(new Date().toLocaleTimeString() + "Sever listeinign the port ");

});
