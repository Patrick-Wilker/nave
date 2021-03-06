import styled from 'styled-components'

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;

    form > header {
        color: var(--primary);
        display: flex;
        align-items: center;
        margin-bottom: 30px;
    }
    form > header h1{
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: var(--primary);
        margin-left: 30px;
    }
    .fields{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
    .field{
        margin-bottom: 20px;
    }
    .field label{
        font-size: 14px;
        font-weight: 600;
        color: var(--primary);
        margin-bottom: 2px;
        line-height: 18px;
    }

    .field input{
        width: 100%;
        background: #FFFFFF;
        border: 1px solid var(--secondary);
        box-sizing: border-box;
        padding: 10px 5px;
        line-height: 24px;
    }

    .field button{
        font-size: 14px;
        background: var(--primary);
        font-weight: 600;
        color: #FFFFFF;
        width: 100%;
        padding: 10px 5px;
        border: 0;
        line-height: 24px;
    }

    .salvar{
        text-align: right;
    }

    .salvar button{
        font-size: 14px;
        background: var(--primary);
        font-weight: 600;
        color: #FFFFFF;
        padding: 10px 55px;
        border: 0;
        line-height: 24px;
    }

    @media(max-width: 900px){
        padding: 24px 32px;
        .fields{
            grid-template-columns: 1fr;
        }
    }

`