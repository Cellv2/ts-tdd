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

    const request = fetch(LOCATION_ORIGIN + url, {
        ...defaultFetchHeaders,
    });

    const response = request
        .then((result) => {
            let retObj = {
                resp: result,
                json: JSON.parse(result.body),
            };

            // still broken
            if (result.status === 204) {
                retObj.json = null;
                return retObj;
            }

            if (!result.ok) {
                return retObj;
            }

            if (result.status !== "204" && result.ok) {
                return retObj;
            }
        })
        .catch((err) => {
            throw new Error(err);
        });

    return response;
};

export default callApi;
