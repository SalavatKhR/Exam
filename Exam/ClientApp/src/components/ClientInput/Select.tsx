import React from 'react';

interface SelectProps{
    options: {value: string, name: string}[],
    defaultValue: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLSelectElement>,
    id:string
}

const Select: React.FC<SelectProps> = (props) => {
    
    const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        props.onChange(e)
    }
    return (
        <select
            value={props.value}
            onChange={changeHandler}
            style={{width:"60%"}}
        >
            <option id={props.id} disabled value="">{props.defaultValue}</option>
            {props.options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    );
};

export default Select;