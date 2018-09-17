import React from 'react';
import { Toast } from 'native-base' 
let baseUrl = 'http://192.168.3.71:8099/show'

export const $get = (path, params) => {
  return new Promise((resolve, reject) => {
    fetch(baseUrl + path, {
        method: 'GET',
        body: params
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data.code === 0) {
          resolve(data);
        } else {
          Toast.show({text: data.msg, type: "warning"});
        }
      }).catch(error => {
        Toast.show({text: "netword error", type: "danger"});
      });
  })
}

export const $post = (path, params) => {
  return new Promise((resolve, reject) => {
    fetch(baseUrl + path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(params),
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data.code === 0) {
          resolve(data);
        } else {
          Toast.show({text: data.msg, type: "warning"});
        }
      }).catch(error => {
        Toast.show({text: "netword error", type: "danger"});
      });
  })
}

export const $fetch = (path, params,cb) => {
  fetch(baseUrl + path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(params),
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      if (data.code === 0) {
        cb(data);
      } else {
        Toast.show({text: data.msg, type: "warning"});
      }
    }).catch(error => {
      Toast.show({text: "netword error", type: "danger"});
    });
}