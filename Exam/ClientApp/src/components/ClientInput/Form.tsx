import React, {Dispatch, SetStateAction, useState} from 'react';
import Select from "./Select";
import TextInput from "./TextInput";
import {stringify} from "querystring";
import NumberInput from "./NumberInput";
import FormErrors from "../../validation/FormErrors";

const Form: React.FC<{send: Dispatch<SetStateAction<IUserData>>}> = ({send}) => {
    const [state, setState] = useState<IUserData>({
        surname:'',
        name:'',
        patronymic:'',
        passport_series:'',
        passport_id:'',
        issued_by:'',
        registration:'',
        age:0,
        credit_amount:0,
        purpose:0,
        employment:0,
        deposit: 0
    })
    
    const changeEmployment = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({...state, employment: parseInt(e.target.value)})
    }
    const changeTarget = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({...state, purpose: parseInt(e.target.value)})
    }
    const changeGuarantee = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({...state, deposit: parseInt(e.target.value)})
    }
    const changeSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, surname: e.target.value})
    }
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, name: e.target.value})
    }
    const changePatronymic = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, patronymic: e.target.value})
    }
    const changePassportSeries = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, passport_series: e.target.value})
    }
    const changePassportId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, passport_id: e.target.value})
    }
    const changeIssuedBy = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, issued_by: e.target.value})
    }
    const changeRegistration = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, registration: e.target.value})
    }
    const changeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, age: parseInt(e.target.value)})
    }
    const changeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, credit_amount: parseInt(e.target.value)})
    }
    
    const sendData =  async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const response = await fetch('api/credit', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        });
        /*const data = await response.json();*/
    }
    
    return (
        <div style={{width:"100%"}}>
            <div>
                <FormErrors formErrors={this.state.formErrors} />
            </div>
            <form>
                <label><strong>Фамилия</strong></label>
                <TextInput id="surname"value={state.surname} OnChange={changeSurname}/>
                <label><strong>Имя</strong></label>
                <TextInput id="name"value={state.name} OnChange={changeName}/>
                <label><strong>Отчество</strong></label>
                <TextInput id="patronymic" value={state.patronymic} OnChange={changePatronymic}/>
                <label><strong>Серия Паспорта</strong></label>
                <TextInput id="passport_series" value={state.passport_series} OnChange={changePassportSeries}/>
                <label><strong>Номер Паспорта</strong></label>
                <TextInput id="passport_id" value={state.passport_id} OnChange={changePassportId}/>
                <label><strong>Информация о выдаче</strong></label>
                <TextInput id="issued_by" value={state.issued_by} OnChange={changeIssuedBy}/>
                <label><strong>Прописка</strong></label>
                <TextInput id="registration" value={state.registration} OnChange={changeRegistration}/>
                <label><strong>Возраст</strong></label>
                <NumberInput id="age" value={state.age} OnChange={changeAge} max={90} min={18}/>
                <label><strong>Сумма кредита</strong></label>
                <NumberInput id="amount" value={state.credit_amount} OnChange={changeAmount} max={15000000} min={300000}/>
                <label><strong>Трудоустройство</strong></label>
                <br/>
                <Select
                    id="employment"
                    options={[
                        {value:"0", name:"Официальное трудоустройство"},
                        {value:"1", name:"Индивидуальный предприниматель"},
                        {value:"2", name:"Самозаянтый"},
                        {value:"3", name:"Пенсионер"},
                        {value:"4", name:"Безработный"}
                    ]}
                    defaultValue="--Выберите Трудоустройство--"
                    value={String(state.employment)}
                    onChange={changeEmployment}
                />
                <br/>
                <label><strong>Цель</strong></label>
                <br/>
                <Select
                    id="purpose"
                    options={[
                        {value:"0", name:"Потребительский кредит"},
                        {value:"1", name:"Недвижимость"},
                        {value:"2", name:"Перекредитование"}
                    ]} 
                    defaultValue="--Выберите Цель--" 
                    value={String(state.purpose)} 
                    onChange={changeTarget}
                />
                <br/>
                <label><strong>Залог</strong></label>
                <br/>
                <Select
                    id="deposit"
                    options={[
                        {value:"0", name:"Нет"},
                        {value:"1", name:"Недвижимость"},
                        {value:"2", name:"Автомобиль"}
                    ]}
                    defaultValue="--Выберите Залог--"
                    value={String(state.deposit)}
                    onChange={changeGuarantee}
                />
                <br/>
                <br/>
                <button onClick={sendData}>Отправить</button>
            </form>
        </div>
    );
};

export default Form;