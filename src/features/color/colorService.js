import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getColors = async () => {
  const response = await axios.get(`${base_url}colors/`);

  return response.data;
};
const createColor = async (color) => {
  const response = await axios.post(`${base_url}colors/`, color, config);

  return response.data;
};

const updateColor = async (color) => {
  const response = await axios.put(
    `${base_url}colors/${color.id}`,
    { title: color.colorData.title },
    config
  );

  return response.data;
};
const getColor = async (id) => {
  const response = await axios.get(`${base_url}colors/${id}`, config);

  return response.data;
};

const deleteColor = async (id) => {
  const response = await axios.delete(`${base_url}colors/${id}`, config);

  return response.data;
};
const colorService = {
  getColors,
  createColor,
  updateColor,
  getColor,
  deleteColor,
};

export default colorService;