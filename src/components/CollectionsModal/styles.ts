import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	background-color: ${({ theme }) => theme.colors.darkGray};
	border-radius: 10px;
	z-index: 10;
	padding: 20px;
    overflow-y: auto;
`;

export const CollectionsModalTitle = styled.span`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.white};
`;

export const CloseCollectionsModal = styled.button`
	display: flex;
	width: 20px;
	height: 20px;
	background-color: transparent;
	border: none;
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;

	& > svg {
		width: 100%;
		height: 100%;
	}
`;

export const AddCollectionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 20px;
    margin-top: 20px;
    padding: 10px;
    background-color: transparent;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
    border: 3px solid ${({ theme }) => theme.colors.white};
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.lightGray};
        border-color: ${({ theme }) => theme.colors.lightGray};
    }
`;

export const YourCollectionsTitle = styled.span`
	color: ${({ theme }) => theme.colors.white};
	font-weight: bold;
`;

export const CreateNewCollectionButton = styled(AddCollectionButton)`
	color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
	margin-bottom: 20px;

	&:hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.secondary};
        border-color: ${({ theme }) => theme.colors.secondary};
    }

	& > svg {
		margin-right: 5px;
	}
`;
