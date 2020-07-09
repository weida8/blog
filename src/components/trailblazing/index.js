import React, {useState} from 'react'
import ContentLayout from '../ContentLayout'
import { Form, Field } from 'react-final-form'
import { FormInput, Row, Col, FormTextarea, Button } from "shards-react";
import ReactMarkdown from 'react-markdown'
import {TrailBlazingContainer} from './styles'
import {required} from '../../utils/validations'

export default function Trailblazing() {
    const [summary, setSummary] = useState()

    const onSubmit = (values) => {
        setSummary(values.summary)
    }

    return( <ContentLayout>
        <TrailBlazingContainer>
            <Row className='header'>
                <Col>ADD A NEW TRAIL</Col>
            </Row>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                    <Field name="title" validate={required}>
                            {({ input, meta }) => (
                                <Row className='row'>
                                    <Col>
                                        <FormInput 
                                            {...input} 
                                            invalid={meta.error && meta.touched} 
                                            type="text" 
                                            placeholder="Title" 
                                            />
                                    </Col>
                                </Row>
                            )}
                    </Field>
                    <Field name="location" validate={required}>
                        {({ input, meta }) => (
                            <Row className='row'>
                                <Col>
                                    <FormInput 
                                    {...input} 
                                    invalid={meta.error && meta.touched}
                                    type="text" 
                                    placeholder="Location" 
                                    />
                                </Col>
                            </Row>
                        )}
                    </Field>
                    <Field name="summary" validate={required}>
                        {({ input, meta }) => (
                            <Row className='row'>
                                <Col>
                                    <FormTextarea 
                                        id='summary'
                                        invalid={meta.error && meta.touched}
                                        {...input} 
                                        placeholder="Summary"
                                    />
                                </Col>
                            </Row>
                        )}
                        </Field>
                        <Button type="submit" className='submit-button'>
                            SUBMIT
                        </Button>
                    </form>
                )}
                />
                <ReactMarkdown source={summary}/>
        </TrailBlazingContainer>
    </ContentLayout>)
}