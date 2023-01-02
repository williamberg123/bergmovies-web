import { ReactNode } from 'react';

interface FormProps {
	children: ReactNode;
	func: () => void;
}

export const Form = ({ children, func }: FormProps) => {
	return (
		<form onClick={func}>
			{children}
		</form>
	);
};
