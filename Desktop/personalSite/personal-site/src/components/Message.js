import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';


const SubmitButton = styled.input`
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.tagLineColor};
    border-radius: 20%;
    justify-content: center;
`;

const SubmitForm = styled.div`
    padding: 30px;
    background-color: ${props => props.theme.titleColor};
    border-radius: 10%;
    width: 500px;
    height: 300px;
    
`;

export const Message = () => {
    const [values, setValues] = useState({
        from_name: '',
        from_email: '',
        message: ''
    })

    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_b6yfiqn', 'template_rcd5zcr', values, 'user_U8UyGjenE5skumFu6jb0C')
            .then(response => {
                console.log('SUCCESS!', response);
                setValues({
                    from_name: '',
                    from_email: '',
                    message: ''
                });
                setStatus('SUCCESS!')
            }, (error) => {
                console.log('ERROR', error);
            });

    };

    useEffect(() => {
        if (status === 'SUCCESS!') {
            setTimeout(() => {
                setStatus('');
            }, 3000);
        }
    }, [status]);

    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <SubmitForm>
            <form onSubmit={sendEmail} style={{alignItems:'center'}}>
                <div style={{display:'flex', justifyContent:'center' }}>
                <div style={{padding:15}}>
                <input value={values.from_name} type="text" name="from_name" onChange={handleChange} placeholder='Name' />
                </div>
                <div style={{padding:15}}>
                <input value={values.from_email} type="email" name="from_email" onChange={handleChange} placeholder='Email'/>
                </div>
                </div>
                <div style={{ justifyContent:'center', display:'flex'}}>
                    <textarea value={values.message} onChange={handleChange} name="message" rows='5' placeholder='Message' style={{width:325, height:150, justifyContent:'center'}}/>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', alignContent:'center', padding:15}}>
                        <SubmitButton type="submit" value="Send" />
                    </div>
            </form>
        </SubmitForm>
    );
};