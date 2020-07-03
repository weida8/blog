import React from 'react'
import ContentLayout from '../ContentLayout'
import { Form, Field } from 'react-final-form'
import { FormInput, Row, Col } from "shards-react";
import {TrailBlazingContainer} from './styles'

export default function Trailblazing() {

    const onSubmit = values => {
        console.log(values)
    }

    const required = value => (value ? undefined : 'Required')

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
                            {({ input }) => (
                                <Row className='row'>
                                    <Col>
                                        <FormInput {...input} type="text" placeholder="Title" />
                                    </Col>
                                </Row>
                            )}
                    </Field>
                    <Field name="location" validate={required}>
                        {({ input }) => (
                            <Row className='row'>
                                <Col>
                                    <FormInput {...input} type="text" placeholder="Location" />
                                </Col>
                            </Row>
                        )}
                    </Field>
                    <Field name="lastName" validate={required}>
                        {({ input, meta }) => (
                        <div>
                            <label>Last Name</label>
                            <input {...input} type="text" placeholder="Last Name" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                    <Field
                        name="age"
                    >
                        {({ input, meta }) => (
                        <div>
                            <label>Age</label>
                            <input {...input} type="text" placeholder="Age" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                    <div className="buttons">
                        <button type="submit" disabled={submitting}>
                        Submit
                        </button>
                        <button
                        type="button"
                        onClick={form.reset}
                        disabled={submitting || pristine}
                        >
                        Reset
                        </button>
                    </div>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                )}
                />
        </TrailBlazingContainer>
    </ContentLayout>)
}