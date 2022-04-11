import axios from "axios";
export default async function handler(req, res) {
    const { data } = await axios.get('https://reqres.in/api/users');
    res.status(200).json(data.data)
  }