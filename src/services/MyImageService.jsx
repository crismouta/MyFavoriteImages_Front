import axios from "axios";

const MY_IMAGE_BASE_REST_API_URL = "http://localhost:8080/api/v1/images";

class MyImageService {
    getAllImages() {
        return axios.get(MY_IMAGE_BASE_REST_API_URL);
    }

    getImageById(id) {
        return axios.get(MY_IMAGE_BASE_REST_API_URL + '/' + id)
    }

    createImage(title, description, image) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("image", image);

        return axios.post(MY_IMAGE_BASE_REST_API_URL + '/create', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

    updateMyImage(id, title, description, image) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("image", image);
        return axios.put(MY_IMAGE_BASE_REST_API_URL + '/update/' + id, formData)
    }

}
export default new MyImageService();