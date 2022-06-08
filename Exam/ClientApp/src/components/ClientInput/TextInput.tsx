import React from 'react';

interface TextInputProps {
    value:string;
    OnChange: React.ChangeEventHandler<HTMLInputElement>;
    id:string
}

const TextInput: 
    React.FC<TextInputProps> = 
    (props) => {
    
    
    
    return (
        <div style={{width:"100%"}}>
            <input value={props.value}
                   onChange={props.OnChange} 
                   type="text"
                   id={props.id}
                   width="100"
                   style={{width:"60%"}}
            />
        </div>
    );
};

export default TextInput;