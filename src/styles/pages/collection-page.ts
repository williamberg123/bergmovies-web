import styled from 'styled-components';

export const CollectionTitle = styled.span`
    display: flex;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-size: 2rem;
    padding: 20px;
`;

export const CollectionsListContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
`;

export const CollectionPageHeader = styled.header`
    display: flex;
    align-items: center;
    padding: 20px;
`;

export const ConfigOptionsButton = styled.button<{ isOpenConfigOptions: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: 20px;
    padding: 10px 5px;
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.colors.white};
    background-color: ${({ theme, isOpenConfigOptions }) => isOpenConfigOptions ? theme.colors.white : 'transparent'};
    color: ${({ theme, isOpenConfigOptions }) => isOpenConfigOptions ? theme.colors.mediumGray : theme.colors.white};
    cursor: pointer;
    position: relative;
`;

export const ConfigOptions = styled.div`
    width: 200px;
    display: flex;
    position: absolute;
    top: calc(100% + 10px);
    right: 50%;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.darkGray};
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 10px 0 10px 10px;
    z-index: 10;
    overflow: hidden;
`;

export const ConfigOptionsItem = styled.div`
    padding: 15px 10px;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
        background-color: ${({ theme }) => theme.colors.mediumGray};
    }
`;

export const DeleteCollectionButton = styled(ConfigOptionsItem)`
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
    }
`;
