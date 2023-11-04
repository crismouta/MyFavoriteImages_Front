import axios from "axios";

const MY_IMAGE_BASE_REST_API_URL = "http://localhost:8080/api/v1/images";

class MyImageService {
    getAllImages() {
        return axios.get(MY_IMAGE_BASE_REST_API_URL);
    }

    getImageById(id) {
        return axios.get(MY_IMAGE_BASE_REST_API_URL + '/' + id)
    }

}
export default new MyImageService();