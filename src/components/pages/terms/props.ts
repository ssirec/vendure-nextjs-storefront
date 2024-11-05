// src/components/pages/terms/props.ts
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
    // Fetch any necessary data here
    const navigation = []; // Replace with actual navigation data
    const categories = []; // Replace with actual categories data

    return {
        props: {
            navigation,
            categories,
        },
    };
};
