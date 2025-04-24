import { ReactNode } from 'react';

interface FormProps {
	children: ReactNode;
	// eslint-disable-next-line
	func: () => void;
}

export const Form = ({ children, func }: FormProps) => {
	return (
		<form onSubmit={func}>
			{children}
		</form>
	);
};
