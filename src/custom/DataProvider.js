import axios from "axios";

const apiUrl = "http://localhost:3000";

const dataProvider = {
  getList: async (resource, params) => {
    try {
      const response = await axios.get(`${apiUrl}/${resource}`);
      return {
        data: response.data,
        total: response.data.length,
      };
    } catch (err) {
      console.log(err);
      throw new Error('fetch request failed');
    }
  },

  getOne: async (resource, params) => {
    try {
      const response = await axios.get(`${apiUrl}/${resource}/${params.id}`);
      return { data: response.data };
    } catch (err) {
      console.log(err);
      throw new Error('fetch request failed');
    }
  },

  delete: async (resource, params) => {
    try {
      const response = await axios.delete(`${apiUrl}/${resource}/${params.id}`);
      return { data: response.data };
    } catch (err) {
      console.log(err);
      throw new Error('delete request failed');
    }
  },

  update: async (resource, params) => {
    try {
      const response = await axios.put(`${apiUrl}/${resource}/${params.id}`, params.data);
      return { data: { ...response.data, id: response.id } };
    } catch (err) {
      console.log(err);
      throw new Error('update request failed');
    }
  },

  create: async (resource, params) => {
    try {
      const response = await axios.post(`${apiUrl}/${resource}`, params.data);
      return { data: { ...response.data, id: response.id } };
    } catch (err) {
      console.log(err);
      throw new Error('create request failed');
    }
  },

  deleteMany: async (resource, params) => {
    try {
      const deletePromises = params.ids.map(id =>
        axios.delete(`${apiUrl}/${resource}/${id}`)
      );
      await Promise.all(deletePromises);
      return { data: params.ids };
    } catch (err) {
      console.log(err);
      throw new Error('deleteMany request failed');
    }
  }

};

export default dataProvider;
