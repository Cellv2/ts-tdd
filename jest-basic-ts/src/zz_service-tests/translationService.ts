export const getTranslations = () => {
    // makes network call to retrieve translations
    // then parses result into an object of the below shape
    const result = {
        strings: {
            "british-english": {
                keyOne: "string-one",
            },
            malaysian: {
                keyOne: "string-satu",
            },
        },
    };
    return result;
};
