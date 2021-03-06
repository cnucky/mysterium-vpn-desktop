/**
 * Copyright (c) 2020 BlockDev AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react"
import styled from "styled-components"

import welcomeBg from "../../../ui-kit/assets/welcome-bg.png"
import { Spinner } from "../../../ui-kit/spinner/spinner"

const Container = styled.div`
    background-image: url(${welcomeBg});
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoadingView: React.FC = () => {
    return (
        <Container>
            <Spinner />
        </Container>
    )
}
