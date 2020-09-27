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

// https://www.typescriptlang.org/play?#code/MYewdgziA2CmB0w4EMBOAKAlAbgLACgAXATwAdYACEAIwCsKBeCk8kAMyrr31EkM-pMA3gQpiKwAJYkAXBQBEAW2IBhacXkAaUeOQATPalgQIcpcQCCBoya06x7NpODG5I-OM9UwsM09QQhADybE4udh5eYoQA7iBmELC8eiFhsPL2FAC+BDn4BLyBFEbAAK4BsABKsHqlLowU6DS0cs1JhJitdO2MAHwU7p5GhOVgFEHdwITwsGCEqJLGTXSY8Ea1LujoyMDAmhQA2gDWsMT7AG7I0AC6mH0DmZ6F-IogepJONQDSpw0nxPBCCAADIgGKwVAqZCJLDcKJiZ4UV7vT56ABqVwaLFg7Aol2gjAYTHkbSm8goADIKXjMQBCIkUMClaAEgD8xSS5US1Q2sHQ+Lucnx3Ee4mGowekXh4ngsp2e1FUVl8CEh2RH0Weh+xGucnVqIxBLy0uN4iy+yEWRwuRFPHARQAHg0SlyqjU6nzmta7ZAYAhoCAAOboB04IA
// export const camelCase = (input) => {
//     // TODO: implement
//     // return input;
//     if (Array.isArray(input)) {
//         return input;
//     }

//     return Object.entries(input).reduce((acc, [key, val]) => {
//         const modifiedKey = key.replace(/^\w/, (match) => match.toLowerCase());
//         const modifiedVal =
//             typeof val === "object" && val !== null ? camelCase(val) : val;

//         return {
//             ...acc,
//             ...{ [modifiedKey]: modifiedVal },
//         };
//     }, {});
// };

// const normalizeCasing = (value) => {
//     // TODO: implement
// };
export const camelCase = (input) => {
    // TODO: implement
    // return input;
    return Object.entries(input).reduce((acc, [key, val]) => {
        const modifiedKey = key.replace(/^\w/, (match) => match.toLowerCase());

        if (Array.isArray(val)) {
            const modifiedArray = val.map((entry) => {
                return typeof entry === "object" && entry !== null 
                    ? camelCase(entry)
                    : entry;
            });
            return { ...acc, [modifiedKey]: modifiedArray };
        }

        const modifiedVal =
            typeof val === "object" && val !== null ? camelCase(val) : val;

        return {
            ...acc,
            ...{ [modifiedKey]: modifiedVal },
        };
    }, {});
};

const normalizeCasing = (value) => {
    // TODO: implement
};

const callApi = (url = "", options = {}) => {
    // TODO: implement

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
