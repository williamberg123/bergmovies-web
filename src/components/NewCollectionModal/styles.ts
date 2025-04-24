import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
`;

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    padding: 30px;
    border-radius: 20px;
`;

export const Title = styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.1rem;
    font-weight: bold;
    margin-right: auto;
    margin-bottom: 10px;
`;

export const TitleInput = styled.input`
    width: 350px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.mediumGray};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    padding: 10px;
    border: none;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 20px;
`;

export const SaveNewCollectionButton = styled.button`
    width: 350px;
    height: 50px;
    border-radius: 10px;
    margin-top: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryLight};
    }
`;

export const CancelButton = styled(SaveNewCollectionButton)`
    background-color: black;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};

    &:hover {
        background-color: ${({ theme }) => theme.colors.darkGray};
    }
`;
