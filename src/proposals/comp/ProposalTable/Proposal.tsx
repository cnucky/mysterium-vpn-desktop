/**
 * Copyright (c) 2020 BlockDev AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react"
import { observer } from "mobx-react-lite"
import { QualityLevel } from "mysterium-vpn-js"

import { UIProposal } from "../../ui-proposal-type"
import { useStores } from "../../../store"
import { Toggle } from "../../../ui-kit/toggle/toggle"
import { PerGiBRate, PerMinuteRate } from "../../../payment/price"
import { ProposalQuality } from "../ProposalQuality/ProposalQuality"

import { Cell } from "./Cell"

interface ProposalPureProps {
    proposal: UIProposal
    active: boolean
    onToggle: () => void
}

const proposalPropsAreEqual = (prevProps: ProposalPureProps, nextProps: ProposalPureProps): boolean => {
    return (
        prevProps.proposal.key === nextProps.proposal.key &&
        prevProps.proposal.qualityLevel === nextProps.proposal.qualityLevel &&
        prevProps.active === nextProps.active
    )
}

// eslint-disable-next-line react/display-name
const ProposalPure: React.FC<ProposalPureProps> = React.memo(({ proposal, active, onToggle }) => {
    return (
        <Toggle active={active} onClick={onToggle}>
            <Cell>{proposal.id10}</Cell>
            <Cell>
                <PerMinuteRate paymentMethod={proposal.paymentMethod} units={false} />/
                <PerGiBRate paymentMethod={proposal.paymentMethod} units={false} />
            </Cell>
            <Cell>
                <ProposalQuality level={proposal.qualityLevel ?? QualityLevel.UNKNOWN} />
            </Cell>
            <Cell>{proposal.serviceType4}</Cell>
        </Toggle>
    )
}, proposalPropsAreEqual)

interface ProposalProps {
    proposal: UIProposal
}

export const Proposal: React.FC<ProposalProps> = observer(({ proposal }) => {
    const { proposals } = useStores()
    const onToggle = (): void => proposals.toggleActiveProposal(proposal)
    return <ProposalPure proposal={proposal} active={proposals.active?.key == proposal.key} onToggle={onToggle} />
})
