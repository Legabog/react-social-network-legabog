import * as axios from "axios";
import { Redirect } from "react-router-dom";
import React from "react"

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "ef0d76e3-4021-4548-9c3d-00a0e96d3742",
  },
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 6) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((responce) => {
        return responce.data;
      });
  },

  getTotalUsersCount() {
    return instance.get(`users?page=1&count=6`).then((responce) => {
      return responce.data;
    });
  },

  getProfileStatus(id) {
    return instance.get(`profile/status/${id}`).then((response) => {
      return response.data;
    });
  },

  updateProfileStatus(status) {
    return instance.put(`profile/status`, { status }).then((response) => {
      return response.data;
    });
  },

  authMe() {
    return instance.get(`auth/me`).then((responce) => {
      return responce.data;
    });
  },

  login(email, password, rememberMe) {
    return instance.post(`/auth/login`, {email, password, rememberMe}).then((response) => {
      return <Redirect to={"/profile"}/>
    });
  },

  logout() {
    return instance.post(`auth/logout`).then(response => {
      return <Redirect to={"/profile"}/>
    })
  },

  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((responce) => {
      return responce.data;
    });
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`).then((responce) => {
      return responce.data;
    });
  },

  follow(id) {
    return instance.post(`follow/${id}`).then((responce) => {
      return responce.data;
    });
  },

  getNews(country, category) {
    return axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=2d0d9cdece874b16b2a7a0ce65513a28`
      )
      .then((response) => {
        return response.data;
      });
  },
};
