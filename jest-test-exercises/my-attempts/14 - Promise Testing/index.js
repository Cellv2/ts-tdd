import fetch from "node-fetch";

export const LOCATION_ORIGIN = (() => {
    if (typeof window !== "undefined" && window.location !== "undefined") {
        const url =
            window.location.origin ||
            window.location.protocol +
                "//" +
                window.location.hostname +
                (window.location.port ? ":" + window.location.port : "");
        if (url.toString() !== "null") {
            return url;
        }
    }
    return "http://localhost";
})();

export const defaultFetchHeaders = {
    compress: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
};

export const camelCase = (input) => {
    // TODO: implement
};

const normalizeCasing = (value) => {
    // TODO: implement
};

const callApi = async (url = "", options = {}) => {
    // TODO: implement
    // const request = fetch(LOCATION_ORIGIN + url, {
    //     ...defaultFetchHeaders,
    // });
    const request = fetch(LOCATION_ORIGIN + url, {
        ...defaultFetchHeaders,
    })
        // .then(response => response.text())
        // .then(data => {
        //     return {
        //         resp: 200,
        //         json: JSON.parse(data)
        //     }
        // })
    ;

    // return request

    const response = request
        .then((result) => {
            let retObj = {
                resp: result,
                json: null,
            };

            if (result.status === "204") {
                return retObj;
            }

            if (!result.ok) {
                retObj.json = JSON.parse(result.body);
                return retObj;
            }

            return retObj;
        })
        .catch((err) => {
            throw new Error(err);
        });

    return response;

    // const res = request.json();

    return req;
};

export default callApi;
