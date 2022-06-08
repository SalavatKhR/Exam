import {
    AgeMax,
    AgeMin,
    AmountMax,
    AmountMin,
    NameMaxLength,
    NameMinLength,
    PassportIssuerMaxLength,
    PassportIssuerMinLength,
    PassportNumberLength,
    PassportRegInformationMaxLength,
    PassportRegInformationMinLength,
    PassportSeriesLength,
    PatronymicMaxLength,
    SurnameMaxLength,
    SurnameMinLength
} from "../ValidationData";
import {Deposit} from "../../enums/Deposit";
import {
    IsPassportIssuerValid,
    IsPassportNumberValid,
    IsPassportRegInformationValid,
    IsPassportSeriesValid
} from "./PassportDataValidator";
import {IsNameValid, IsPatronymicValid, IsSurnameValid} from "./FullNameValidator";

export const IsAdultValid = (value: number) =>
    AgeMin <= value && value <= AgeMax;

export const IsAmountValid = (value: number) =>
    AmountMin <= value && value <= AmountMax;

interface IUserData{
    surname:string;
    name:string;
    patronymic:string;
    passport_series:string;
    passport_id:string;
    issued_by:string;
    registration:string;
    age:number;
    credit_amount:number;
    hasOtherCredits: boolean;
    purpose:number ;
    employment:number ;
    deposit: number ;
}

export function IsApplicationDataValid(userData: IUserData) {
    if (!IsSurnameValid(userData.surname))
        return `Длинна фамили от ${SurnameMinLength} до ${SurnameMaxLength}`;
    if (!IsNameValid(userData.name))
        return `Длинна имени от ${NameMinLength} до ${NameMaxLength}`;
    if (!IsPatronymicValid(userData.patronymic))
        return `Длинна отчества до ${PatronymicMaxLength}`;
    if (!IsPassportSeriesValid(userData.passport_series))
        return `Некорректная серия паспорта ${PassportSeriesLength}`;
    if (!IsPassportNumberValid(userData.passport_id))
        return `Некорректный номер ${PassportNumberLength}`;
    if (!IsPassportIssuerValid(userData.issued_by))
        return `Некорректная информация о выдаче. Возможная длина от ${PassportIssuerMinLength} до ${PassportIssuerMaxLength}`;
    if (!IsPassportRegInformationValid(userData.registration))
        return `Некорректная информация о прописке. 
        Возможная длина от ${PassportRegInformationMinLength} до ${PassportRegInformationMaxLength}`;
    if (!IsAdultValid(userData.age))
        return `Кредит выдается людям в возрасте от ${AgeMin} до ${AgeMax}`;
    if (!IsAmountValid(userData.credit_amount))
        return `Сумма кредита доступна в диапозоне от ${AmountMin} до ${AmountMax}`;
    if (userData.credit_amount % 100000 != 0)
        return `Сумма кредита доступна в диапозоне от ${AmountMin} до ${AmountMax} c шагом в 100000`;
    return true;
}