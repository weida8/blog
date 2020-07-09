import React, {useState} from 'react'
import AuthLayoutContainer from './styles'
import {useHistory } from 'react-router-dom'
import {setCookie} from '../../utils/cookies'
import { FormGroup, FormInput, Row, Col } from "shards-react";
import {DangerAlert} from '../../uiComponents/Alert'
import {PrimaryButton} from '../../uiComponents/Buttons'
import { Form, Field } from 'react-final-form'
import {postLogin} from '../../api/authentication'
import {required} from '../../utils/validations'

const Login = () => {
    let history = useHistory()
    const [showAlert, setShowAlert] = useState(false)
    const [loginError, setLoginError] = useState()

    const onSubmit = (values) => {
        postLogin(values)
            .then(res => {
                console.log(res.data)
                if(res.data.status === 200) {
                    setLoginError()
                    setCookie('userObj', res.data.data)
                    history.push('/')
                }
            })
            .catch(err => {
                setShowAlert(true)
                setLoginError(err.response.data)
            })
    }

    return(
        <AuthLayoutContainer>
            <Row>
                <DangerAlert text={loginError ? loginError.error : ''} open={showAlert}/>
            </Row>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="userName" validate={required}>
                                {({ input, meta }) => (
                                    <Row className='row'>
                                        <Col>
                                            <FormGroup>
                                                <label>Username</label>
                                                <FormInput 
                                                    {...input} 
                                                    invalid={meta.error && meta.touched} 
                                                    type="email" 
                                                    placeholder="Username" 
                                                    />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                )}
                        </Field>
                        <Field name="password" validate={required}>
                            {({ input, meta }) => (
                                <Row className='row'>
                                    <Col>
                                            <FormGroup>
                                                <label>Password</label>
                                                <FormInput 
                                                    {...input} 
                                                    invalid={meta.error && meta.touched} 
                                                    type="password" 
                                                    placeholder="Password" 
                                                    />
                                            </FormGroup>
                                        </Col>
                                </Row>
                            )}
                        </Field>
                        <PrimaryButton type="submit" className='submit-button'>
                            SUBMIT
                        </PrimaryButton>
                    </form>
                )}
            />
        </AuthLayoutContainer>
    )
}

export default Login