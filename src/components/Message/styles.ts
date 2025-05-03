import styled, { css } from 'styled-components';
import { MessageType } from '../../@types/message';

export const Container = styled.div<{ show: boolean; mType: MessageType; isFirstRender: boolean; }>`
    min-width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ mType, theme }) => mType == 'error' ? theme.colors.primary : theme.colors.secondary};
    padding: 3px 10px;
    border-radius: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
    position: fixed;
    left: calc(50% - 200px);
    top: ${({ show }) => show ? '20px' : '-50px'};
    border: 1px solid ${({ theme }) => theme.colors.white};
    z-index: 20;

    ${({ show, isFirstRender }) => show ? css`
        animation: toemergemessage 0.3s ease;
    ` : (
        !isFirstRender && css`
        animation: toexitmessage 0.3s ease;
    `
    )}

    & > svg {
        margin-left: 10px;
    }

	@media (max-width: 500px) {
		min-width: 300px;
	}

    @keyframes toemergemessage {
        0% {
            transform: translateY(-50px);
        }

        100% {
            transform: translateY(0px);
        }
    }

    @keyframes toexitmessage {
        0% {
            transform: translateY(70px);
        }

        100% {
            transform: translateY(0px);
        }
    }
`;

export const MessageText = styled.span`
    font-size: 0.9rem;
`;
