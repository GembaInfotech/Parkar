import { API, handleApiError } from "./utils";

export const getUser = async (id) => {
  try {
    const { data } = await API.get(`/users/${id}`);
    console.log("here ")
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const updateUser = async (id, formData) => {
  try {
    const { data } = await API.put(`/users/UpdateInfo`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getPublicUsers = async () => {
  try {
    const { data } = await API.get("/users/public-users");
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};
export const getPublicUser = async (id) => {
  try {
    const { data } = await API.get(`/users/public-users/${id}`);
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const followUser = async (id) => {
  try {
    const { data } = await API.patch(`/users/${id}/follow`);
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const unfollowUser = async (id) => {
  try {
    const { data } = await API.patch(`/users/${id}/unfollow`);
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getFollowingUsers = async () => {
  try {
    const { data } = await API.get("/users/following");
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};
export const getState = async () => {
  try {
    const { data } = await API.get("/add/state");
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};
export const getCity = async (state) => {
  try {
    const { data } = await API.get(`/add/city/${state}`);
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};
