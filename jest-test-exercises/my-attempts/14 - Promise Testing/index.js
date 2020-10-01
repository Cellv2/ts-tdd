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
    if (Array.isArray(input)) {
        const normalizedItems = input.map((item) => {
            return !Array.isArray(item) && typeof item === "object"
                ? normalizeCasing(item)
                : item;
        });
        return normalizedItems;
    }

    return normalizeCasing(input);
};

const normalizeCasing = (value) => {
    return Object.entries(value).reduce((acc, [key, val]) => {
        const modifiedKey = key.replace(/^\w/, (match) => match.toLowerCase());

        const modifiedVal =
            typeof val === "object" && val !== null ? camelCase(val) : val;

        return {
            ...acc,
            ...{ [modifiedKey]: modifiedVal },
        };
    }, {});
};

const callApi = (url = "", options = {}) => {
    const request = fetch(LOCATION_ORIGIN + url, {
        ...defaultFetchHeaders,
    });

    const response = request
        .then((result) => {
            let retObj = {
                resp: result,
            };

            if (result.status === 204) {
                retObj.json = null;
                return retObj;
            }

            if (!result.ok) {
                retObj.json = camelCase(JSON.parse(result.body));
                return retObj;
            }

            retObj.json = camelCase(JSON.parse(result.body));
            return retObj;
        })
        .catch((err) => {
            throw new Error(err);
        });

    return response;
};

export default callApi;
