import { Container, SkeletonBody, SkeletonBodyItem, SkeletonHeader, SkeletonHeaderItem } from './styles';

export default function MySkeleton() {
    return (
        <Container>
            <SkeletonHeader>
                <SkeletonHeaderItem />
                <SkeletonHeaderItem delay={0.2} />
                <SkeletonHeaderItem delay={0.4} />
            </SkeletonHeader>

            <SkeletonBody>
                <SkeletonBodyItem />
                <SkeletonBodyItem delay={0.2} />
                <SkeletonBodyItem delay={0.4} />
                <SkeletonBodyItem delay={0.6} />
            </SkeletonBody>
        </Container>
    );
}
