import React from 'react';

const UserData = (e: IUserData) => {
    return <div>
        <label><strong>surname</strong></label>
        <div>{e.surname}</div>
        <label><strong>name</strong></label>
        <div>{e.name}</div>
        <label><strong>patronymic</strong></label>
        <div>{e.patronymic}</div>
        <label><strong>passport_series</strong></label>
        <div>{e.passport_series}</div>
        <label><strong>passport_id</strong></label>
        <div>{e.passport_id}</div>
        <label><strong>issued_by</strong></label>
        <div>{e.issued_by}</div>
        <label><strong>registration</strong></label>
        <div>{e.registration}</div>
        <label><strong>employment</strong></label>
        <div>{e.employment}</div>
        <label><strong>target</strong></label>
        <div>{e.purpose}</div>
        <label><strong>guarantee</strong></label>
        <div>{e.deposit}</div>
    </div>
};

export default UserData;