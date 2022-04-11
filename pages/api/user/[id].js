import axios from "axios";
export default async function userDetails(req, res) {
    const {
        query: { id },
        method,
      } = req
    const { data } = await axios.get(`https://reqres.in/api/users/${id}`);
    res.status(200).json(data.data)
}