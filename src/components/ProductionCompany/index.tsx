import { CompanyImage, CompanyName, Container } from './styles';

import { ProductionCompanyProps } from '../../@types/movie';
import { generateImageURL } from '../../utils';

export default function ProductionCompany(props: ProductionCompanyProps) {
    const { name, logo_path } = props;

    return (
        <Container>
            <CompanyImage src={generateImageURL('w200', logo_path)} />
            <CompanyName>{name}</CompanyName>
        </Container>
    );
}
