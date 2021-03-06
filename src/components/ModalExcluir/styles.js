import styled from 'styled-components'

export const ModalExcluirContainer = styled.div`
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

export const ModalExcluirBox = styled.div`
    width: 592px;
    height: 233px;
    background: #fff;
    padding: 32px;

    h1{
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
    }

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 36px;
    }

    div{
        height: 60%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }

    div button + button{
        margin-left: 30px;
    }

    div button{
        padding: 10px 25px;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        box-sizing: border-box;
        border: 0;
    }

    div button.cancelar{
        background: #FFFFFF;
        border: 1px solid var(--primary);
    }

    div button.excluir{
        background: var(--primary);
        color: #FFFFFF;
    }

    @media(max-width: 450px){
        div{
            height: 50%;
        }
    }

    @media(max-width: 410px){
        div{
            height: 35%;
        }
    }
`