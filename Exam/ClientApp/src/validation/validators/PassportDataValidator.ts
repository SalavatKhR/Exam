import {
    PassportIssuerMaxLength,
    PassportIssuerMinLength,
    PassportNumberLength,
    PassportRegInformationMaxLength,
    PassportRegInformationMinLength,
    PassportSeriesLength,
} from "../ValidationData";


export const IsPassportSeriesValid = (value: string) =>
    value.length === PassportSeriesLength;
export const IsPassportNumberValid = (value: string) =>
    value.length === PassportNumberLength;
export const IsPassportIssuerValid = (value: string) =>
    PassportIssuerMinLength <= value.length && value.length <= PassportIssuerMaxLength;
export const IsPassportRegInformationValid = (value: string) =>
    PassportRegInformationMinLength <= value.length && value.length <= PassportRegInformationMaxLength;