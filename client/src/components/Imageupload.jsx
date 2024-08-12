import axios from "axios";
import { useState } from "react";

function Imageupload() {

	const [image, setImage] = useState({ preview: "", raw: "" })


	const handleChange = e => {

		if (e.target.files.length) {
			setImage({
				preview: URL.createObjectURL(e.target.files[0]),
				raw: e.target.files[0]

			});
		}

	};



	const handleUpload = () => {

		const formData = new FormData();
		formData.append("image", image.raw);
		axios.post('http://localhost:3000', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'

			}

		}
		).then(() => {
			console.log("Success !!");
		})
			.catch(() => {
				console.log("Failure !!");

			});

	}





	return (

		<div className="h-screen flex justify-center items-center ">


			<div className="flex-col">


				<label htmlFor="upload-button">
					{image.preview ? (
						<img src={image.preview} alt="dummy" width="600" height="600" />
					) : (
						<>
							<span className="fa-stack fa-2x mt-3 mb-2">
								<i className="fas fa-circle fa-stack-2x" />
								<i className="fas fa-store fa-stack-1x fa-inverse" />
							</span>
							<div className="flex justify-center items-center">

								<h5 className="text-center flex-row ">Upload your photo</h5>

							</div>
						</>
					)}
				</label>
				<input
					type="file"
					id="upload-button"
					style={{ display: "none" }}
					onChange={handleChange}
				/>
				<br />
				<button className=" flex justify-center px-14 py-6 absolute right-[43rem] rounded-xl items-center bg-blue-300" onClick={handleUpload}>Upload</button>





			</div>

		</div>

	)


};




export default Imageupload;
