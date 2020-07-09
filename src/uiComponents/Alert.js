import React from "react";
import { Alert } from "shards-react";

export const DangerAlert = (props) => {
    const {text, open} = props
    return(
        <Alert theme="danger" open={open}>
            {text}
        </Alert>  
    )
}