import axios from "axios";
import { apiUrl } from "@/env";
// import { IUserProfile, IUserProfileUpdate, IUserProfileCreate, IItemCreate, IItemUpdate } from './interfaces';

// function authHeaders(token: string) {
//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// }
//
// function authFormData(token: string) {
//   return {
//     headers: {
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'multipart/form-data',
//     },
//   };
//
// }

export default {
  /** */
  //async logInGetToken(username: string, password: string) {
  //  const params = new URLSearchParams();
  //  params.append('username', username);
  //  params.append('password', password);
  //
  //  return axios.post(`${apiUrl}/api/v1/login/access-token`, params);
  //},
  async getPerson(id) {
    return axios.get(`${apiUrl}/people/${id}`);
  },
  async updatePerson(person) {
    return axios.put(`${apiUrl}/people`, person);
  },
  async getAllPerson() {
    console.log(apiUrl)
    return axios.get(`${apiUrl}/people`);
  },
  async createPerson(person) {
    return axios.post(`${apiUrl}/people`, person);
  },
  async deletePerson(id) {
    return axios.delete(`${apiUrl}/people/${id}`);
  }
};
