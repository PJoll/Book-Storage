import React, {useState} from "react";
import {Form,Button, Alert} from "react-bootstrap";
import {ADD_User} from '../utils/mutations';
import Auth from '../utils/auth';


const SignupForm = () => {

    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    const [addUser , {error,data} = useMutation(ADD_User)];

    const [validated] = useState(false); 
    cosnt [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    }
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        try {   
            const {data} = await addUser({
                variables: {...userFormData}
            });
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
            setShowAlert(true);

        }
        setUserFormData({
            username: '',
            email: '',
            password: ''
        });
        
    }
}