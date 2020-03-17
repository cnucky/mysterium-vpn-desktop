/**
 * Copyright (c) 2020 BlockDev AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { ReactNode } from "react"
import { Button, View } from "@nodegui/react-nodegui"

export type ClickableViewProps = {
    width: number
    height: number
    children: ReactNode
    onClick: Function
}

export const ClickableView: React.FC<ClickableViewProps> = ({ width, height, onClick, children }) => {
    return (
        <View
            style={`
                width: "100%";
                height: ${height};
                min-height: ${height};
                background: "transparent";
                flex-direction: "column";
            `}
        >
            <View
                style={`
                    width: ${width};
                    height: ${height};
                    min-height: ${height};
                `}
            >
                {children}
            </View>
            <Button
                on={{
                    clicked: (): void => onClick(),
                }}
                style={`
                    top: -${height};
                    width: ${width};
                    height: ${height};
                    min-height: ${height};
                    background: "transparent";
                `}
            />
        </View>
    )
}
