import axios from "axios";

// here we are just maing our code look more DRY. With every backend call we must deal with errors and success states. The idea of creating these kinds of services is to make our lives easier in the components
function internalServerError(err) {
  console.log("err:", err.response.data);
  if (err.response && err.response.data && err.response.data.errorMessage) {
    return {
      status: false,
      errorMessage: err.response.data.errorMessage,
    };
  }
  return {
    status: false,
    errorMessage: "Internal server error. Please check your server",
  };
}

function successStatus(res) {
  return {
    status: true,
    data: res.data,
  };
}

// creates a basic url for every request in this file
// REMEMBER TO CHANGE IT TO baseURL: `${process.env.REACT_APP_SERVER_URL}/auth` WHEN GOING LIVE
const authService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`,
});

export function login(credentials) {
  return authService
    .post("/login", credentials)
    .then(successStatus)
    .catch(internalServerError);
}

export function getLoggedIn() {
  return authService
    .get(`session`, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function signup(credentials) {
  return authService
    .post("/signup", credentials)
    .then(successStatus)
    .catch(internalServerError);
}

export function logout() {
  return authService
    .delete("/logout", {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function upload(credentials) {
  return authService
    .post("/upload", credentials, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}
export function getDays() {
  return authService
    .get("/daily-report", {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    })
    .then(successStatus)
    .catch(internalServerError);
}

export function updateSingleDay(id, info) {
  return authService
    .put(`/${id}`, info, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    })
    .then((response) => {
      return {
        status: true,
        data: response.data,
      };
    })
    .catch((err) => {
      console.log(err.response);
      return {
        status: false,
        errorMessage: err.response.data.errorMessage,
      };
    });
}

export function getSingleDay(id) {
  return authService
    .get(`/${id}`)
    .then((dayBack) => {
      // console.log("Data from axios", dayBack);
      return dayBack.data;
    })
    .catch((err) => {
      console.log(err.response);
      return {
        errorMessage: err.response.data.errorMessage,
      };
    });
}

export function getDayAndDelete(id) {
  console.log(id);
  return authService
    .delete(`delete/${id}`, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    })
    .then((dayToDelete) => {
      // return dayToDelete.data;
      return dayToDelete;
    })
    .catch((err) => {
      console.log("ërrre , ", err.response);
      return {
        errorMessage: err.response.data.errorMessage,
      };
    });
}
export function deleteAccount() {
  return authService
    .delete(`account`, {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log("ërrre , ", err.response);
      return {
        errorMessage: err.response.data.errorMessage,
      };
    });
}
