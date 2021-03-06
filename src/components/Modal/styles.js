import styled from 'styled-components'

export const ModalContainer = styled.div`
background: rgba(0, 0, 0, 0.5);
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;

display: flex;
justify-content: center;
align-items: center;
`

export const ModalBox = styled.div`
    width: 592px;
    height: 233px;
    background: #fff;
    padding: 32px;

    header{
        display: flex;
        justify-content: space-between;
    }

    header h1{
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: var(--primary);
        margin: 0;
    }

    header div.fechar{
        cursor: pointer;
    }

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 36px;
        color: var(--primary);
        margin-top: 30px;
    }
    
`