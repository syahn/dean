import styled from 'styled-components'

export const Card = styled.div`
    border-radius: 3px;
    width: 250px;
    padding: 20px;
    transition: 0.5s;
    box-shadow: 0 0 0 1px rgba(16,22,26,.15), 0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0);
    background: #fff;
`
export const ICard = Card.extend`
    &:hover {
        box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 2px 4px rgba(16,22,26,.2), 0 8px 24px rgba(16,22,26,.2);
    }
`