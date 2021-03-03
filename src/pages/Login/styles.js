import styled from 'styled-components'

export const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginBox = styled.div`
    width: 448px;
    height: 408px;
    border: 1px solid var(--primary);
    position: absolute;
    box-sizing: border-box;
    
    @media(max-width: 450px){
        width: 400px;
        height: 480px;
    }

    @media(max-width: 400px){
        width: 378px;
        height: 450px;
    }

    @media(max-width: 370px){
        width: 350px;
        height: 450px;
    }
`;

export const Logo = styled.div`
    margin-top: 50px;
    text-align: center;
`;

export const Fields = styled.div`
    padding: 30px;
    
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

    .field + .field{
        margin-top: 25px;
    }
`;