import React from "react";
import styled from 'styled-components'
import { Button } from "shards-react";

export const PrimaryButton = styled(Button)`
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};

    :hover {
        background-color: ${props => props.theme.colors.secondary};
        border-color: ${props => props.theme.colors.secondary};
        box-shadow: ${props => ` 0 5px 15px rgba(0,0,0,.05), 0 4px 10px ${props.theme.colors.secondary}`};
    }
`

