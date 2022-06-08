import {
    NameMaxLength,
    NameMinLength,
    PatronymicMaxLength,
    PatronymicMinLength,
    SurnameMaxLength,
    SurnameMinLength
} from "../ValidationData";

export const IsNameValid = (value: string) =>
    NameMinLength <= value.length && value.length <= NameMaxLength;
export const IsSurnameValid = (value: string) =>
    SurnameMinLength <= value.length && value.length <= SurnameMaxLength;
export const IsPatronymicValid = (value: string) =>
    value === undefined || PatronymicMinLength <= value.length && value.length <= PatronymicMaxLength;