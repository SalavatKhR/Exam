import React, {Component, useState} from 'react';
import Form from "./ClientInput/Form";
import UserData from "./ClientInput/UserData";

function Home(){
    const [input, setInput] = useState<IUserData>({
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
    
    return (
        <div>
            <h1>Алё, ну как там с деньгами?</h1>
            <hr/>
            <div className="row">
                <div className="col-6">
                    <h3>Данные пользователя</h3>
                    <Form send={setInput}/>
                </div>
                <div className="col-4">
                    <h3>Ответ</h3>
                </div>
            </div>
        </div>
    );
}

export default Home;
