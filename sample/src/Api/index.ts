import { $post } from "./fetch";

export const fetchBanner = (params: Object = {}) => {
  return $post({
    path: "/advertList",
    params: params
  });
};
