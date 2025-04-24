import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const Modal = styled.div`
	width: 400px;
	display: flex;
	flex-direction: column;
    align-items: center;
	padding: 30px;
	border-radius: 20px;
    background-color: black;
	position: relative;
`;

export const Title = styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.1rem;
    font-weight: bold;
    margin-right: auto;
    margin-bottom: 10px;
`;

export const NewTitleInput = styled.input`
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

export const ConfirmCollectionRenamingButton = styled.button`
    width: 350px;
    height: 50px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    font-weight: bold;
    font-size: 0.9rem;
    cursor: pointer;
    margin-top: 10px;
    transition: 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryLight};
    }
`;

export const CancelButton = styled(ConfirmCollectionRenamingButton)`
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
        color: ${({ theme }) => theme.colors.primaryLight};
        border-color: ${({ theme }) => theme.colors.primaryLight};
        background-color: ${({ theme }) => theme.colors.darkGray};
    }
`;
