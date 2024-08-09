import { useRef, useState } from "react";

function Imageupload() {


	const [image, setImage] = useState();

	const fileUploadRef = useRef();



	const handleImageUpload = (event) => {

		event.preventdefault();
		fileUploadRef.current.click();

	}

	const uploadImageDisplay = () => {

		try {
			const uploadFile = fileUploadRef.current.files[0];
			const formData = new FormData();


			formData.append("file", uploadFile);


			const response = axios.post("http://localhost:3000", {
				response, formData

			});


			if (response.status === 201) {
				const data = response.json();
				setImage(data?.location);

			}

		} catch (error) {

			console.log(error);
			setImage(null);
		}





	}

	return (

		<>

			<div className="flex container bg-sky-300 `">

				<form action="">


					<input type="file" />

					<button className="outline-gray-50 bg-transparent hover:cursor-pointer">

						Upload

					</button>
				</form>



			</div>





		</>






	)

}


export default Imageupload;
