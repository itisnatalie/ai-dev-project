import { isEmpty } from './isEmpty';

// Check & evaluate BODY data
// Headlines (H! - H6 arrays)
// Images (array)
export function checkBodyData(data) {
	const bodyData = Object.entries(data.meta);

	bodyData.forEach(([key, value]) => {
		switch (key) {
			case 'headlines':
				// Check if there are any headlines
				if (!isEmpty(value)) {
					// check if H1 exists
					if (!isEmpty(value.h1)) {
						// check if there is only one
					} else {
						// log missing h1
					}
					// check if H2 exists
					if (!isEmpty(value.h2)) {
						// research what to check
						// iterate through tags
					}
					// check if H3 exists
					if (!isEmpty(value.h3)) {
						// research what to check
						// iterate through tags
					}
					// check if H4 exists
					if (!isEmpty(value.h4)) {
						// research what to check
						// iterate through tags
					}
					// check if H5 exists
					if (!isEmpty(value.h5)) {
						// research what to check
						// iterate through tags
					}
					// check if H6 exists
					if (!isEmpty(value.h6)) {
						// research what to check
						// iterate through tags
					}

					// check duplicity amongst the other titles
					// (optional) check relevancy against the body content
				} else {
					// log missing title error
				}
				break;

			case 'images':
				if (!isEmpty(value)) {
					value.forEach((image) => {
						if (isEmpty(image.alt)) {
							// log misisng alt text for the image
						}
						// (optional) check if image url returns 200 response code (broken image)
					});
				}
				break;

			default:
				console.warn('Unknown value passed to checkMetaData method: ' + key);
				break;
		}
	});
}

// data:
//   ├── body:
//   │   ├── headlines:
//   │   │   ├── h1:
//   │   │   │   └── - text: "Main headline 1"
//   │   │   ├── h2:
//   │   │   │   ├── - text: "Subheadline 1"
//   │   │   │   └── - text: "Subheadline 2"
//   │   │   └── h3:
//   │   │       └── - text: "Tertiary headline 1"
//   │   │   # ... and so on for h4, h5, h6
//   │   │
//   │   └── images:
//   │       ├── - src: "https://www.example.com/img1.jpg"
//   │       │     alt: "Image 1 description"
//   │       └── - src: "https://www.example.com/img2.jpg"
//   │             alt: "Image 2 description" #and so on for all images found
