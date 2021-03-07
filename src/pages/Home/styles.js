import styled from 'styled-components';

export const HomeContainer = styled.div`
    padding: 24px 32px;
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    header h1{
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        line-height: 48px;
    }

    header button{
        font-size: 14px;
        background: var(--primary);
        font-weight: 600;
        color: #FFFFFF;
        padding: 10px 35px;
        border: 0;
        line-height: 24px;
    }

    @media(max-width: 500px){
        header h1{
            font-size: 30px;
        }

        header button{
            font-size: 12px;
            padding: 8px 15px;
        }
    }
`;

export const Cards = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 10px;
    row-gap: 30px;

    li{
        list-style: none;
    }

    li img{
        background: var(--secondary);
        background-size: cover;
        width: 300px;
        height: 300px;
        object-fit: cover;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; 
    }

    li p{
        margin: 8px 0 4px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;
        color: var(--primary);
    }

    li > span{
        color: var(--primary);
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
    }

    li > div{
        margin-top: 8px;
    }

    li > div > span{
        cursor: pointer;
    }

    li > div > span + span{
        margin-left: 15px;
    }

    li > div > .remove:hover::after{
        content: "Excluir";
        position: absolute;
        transform: translate(-100%, -100%);
        color: #ffffff;
        font-weight: normal;
        background: var(--primary);
        padding: 5px 8px;
    }

    li > div > .edit:hover::after{
        content: "Editar";
        position: absolute;
        transform: translate(-100%, -100%);
        color: #ffffff;
        font-weight: normal;
        background: var(--primary);
        padding: 5px 8px;
    }

    @media(max-width: 1000px){
        justify-content: space-around;
    }
`