import { getTranslations } from "./translationService";

const moduleWeAreTesting = (language: string | number, bool = true) => {
    const trans = getTranslations();
    const getString = (stringKey: string) => {
        //@ts-ignore
        return trans["strings"][language][stringKey];
    };
    const res = bool ? getString("agree") : getString("disagree");
    return `They say: ${res}`;
};

export default moduleWeAreTesting;
