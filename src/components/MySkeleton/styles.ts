import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SkeletonHeader = styled.div`
    display: flex;
    align-items: center;
`;

export const SkeletonHeaderItem = styled.div<{ delay?: number }>`
    width: 300px;
    height: 70px;
    background-color: ${({ theme }) => theme.colors.mediumGray};
    border-radius: 10px;
    animation: moveskeletonheaderitem 2s ease infinite;
    animation-delay: ${({ delay }) => `${delay}s`};
    opacity: 0.5;
    margin: 20px;

    @keyframes moveskeletonheaderitem {
        0% {
            transform: translateX(0px);
        }

        50% {
            transform: translateX(30px);
        }

        100% {
            transform: translateX(0px);
        }
    }
`;

export const SkeletonBody = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const SkeletonBodyItem = styled.div<{ delay?: number }>`
    width: 40%;
    height: 300px;
    background-color: ${({ theme }) => theme.colors.mediumGray};
    border-radius: 10px;
    opacity: 0.5;
    margin: 20px;
    animation: move 2s ease infinite;
    animation-delay: ${({ delay }) => `${delay}s`};

    @keyframes move {
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(-20px);
        }

        100% {
            transform: translateY(0px);
        }
    }
`;
