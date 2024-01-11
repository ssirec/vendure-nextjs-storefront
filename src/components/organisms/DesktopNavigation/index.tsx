import styled from '@emotion/styled';
import React from 'react';
import { Stack, Link, ContentContainer } from '@/src/components/atoms';
import { RootNode } from '@/src/util/arrayToTree';
import { NavigationType } from '@/src/graphql/selectors';
import { NavigationLinks } from './NavigationLinks';
import { ProductsSellout } from './ProductsSellout';
import { RelatedCollections } from './RelatedCollections';

interface NavProps {
    navigation: RootNode<NavigationType> | null;
}

export const DesktopNavigation: React.FC<NavProps> = ({ navigation }) => {
    return (
        <DesktopStack itemsCenter gap="10rem">
            {navigation?.children.map(collection => {
                if (collection.children.length === 0) {
                    return (
                        <Stack key={collection.name}>
                            <StyledLink href={`/collections/${collection.slug}`}>{collection.name}</StyledLink>
                        </Stack>
                    );
                }
                return (
                    <RelativeStack w100 key={collection.name}>
                        <StyledLink href={`/collections/${collection.slug}`}>{collection.name}</StyledLink>
                        <AbsoluteStack w100>
                            <ContentContainer>
                                <Background w100 justifyBetween>
                                    <NavigationLinks collection={collection} />
                                    <Stack gap="3.5rem">
                                        <ProductsSellout collection={collection} />
                                        <RelatedCollections collection={collection} />
                                    </Stack>
                                </Background>
                            </ContentContainer>
                        </AbsoluteStack>
                    </RelativeStack>
                );
            })}
        </DesktopStack>
    );
};

const DesktopStack = styled(Stack)`
    @media (max-width: ${p => p.theme.breakpoints.lg}) {
        display: none;
    }
`;

const Background = styled(Stack)`
    height: 100%;
    background: ${p => p.theme.gray(0)};
    box-shadow: 0.1rem 0.25rem 0.2rem ${p => p.theme.shadow};
    border: 1px solid ${p => p.theme.gray(100)};

    margin-top: 3.8rem;
    padding: 2rem 2rem 10rem 2rem;
`;

const RelativeStack = styled(Stack)`
    & > div {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-1rem) translateX(50%);
        pointer-events: none;
    }

    &:hover {
        & > div {
            opacity: 1;
            visibility: visible;
            transform: translateY(0) translateX(50%);
            pointer-events: all;
        }
    }
`;

const AbsoluteStack = styled(Stack)`
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateY(0) translateX(50%);
    margin-top: 5rem;
    transition: all 0.35s ease-in-out;

    max-width: 1440px;
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${p => p.theme.text.main};

    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.2rem;
    white-space: nowrap;
`;
