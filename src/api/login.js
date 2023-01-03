import request from "../utils/request";

const gelLogin = (data) => {
  return request({
    url: "/admin/login",
    method: "post",
    data,
  });
};
const gelLoginOut = (data) => {
    return request({
      url: "/admin/logout",
      method: "post",
      data,
    });
  };

export default {
    gelLogin,
    gelLoginOut
};
