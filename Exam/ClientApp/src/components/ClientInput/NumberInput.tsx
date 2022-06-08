import React from 'react';

interface NumberInputProps{
    value:number;
    OnChange: React.ChangeEventHandler<HTMLInputElement>;
    id:string
    min:number
    max:number
}

const NumberInput: React.FC<NumberInputProps> = (props) => {
    return (
        <div style={{width:"100%"}}>
            <input value={props.value}
                   onChange={props.OnChange}
                   type="number"
                   min={props.min}
                   max={props.max}
                   
                   id={props.id}
                   style={{width:"60%"}}
            />
        </div>
    );
};

export default NumberInput;