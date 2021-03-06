import styled from 'styled-components'

export const VisualizarContainer = styled.div`
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

export const VisualizarBox = styled.div`
    width: 1006px;
    height: 503px;
    background: #fff;

    display: flex;
    justify-content: space-between;
    align-items: center;

    figure{
        width: 50%;
        height: 100%;
        background: gray;
    }

    figure img{
        background: var(--secondary);
        background-size: cover;
        width: 100%;
        height: 100%;
        object-fit: cover;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; 
    }

    section{
        width: 50%;
        padding: 32px;
    }

    h1{
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: var(--primary);
        margin: 0;
    }

    h2{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 36px;
        color: var(--primary);
        margin: 0;
    }

    .fechar{
        cursor: pointer;
        text-align: right;
    }

    p{
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 36px;
        color: var(--primary);
        margin-top: 30px;
    }

    .buttons{
        margin-top: 30px;
    }

    .edit{
        margin-left: 15px;
    }

    @media(max-width: 700px){
        display: block;
        width: auto;
        height: 90%;

        figure{
            width: 100%;
            height: 200px;
        }

        section{
            width: 100%;
        }

        p{
            margin-top: 5px;
        }
    }
    
`