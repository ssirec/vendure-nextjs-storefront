import React from 'react';
import styled from '@emotion/styled';
import { Layout } from '@/src/layouts';
import { useTranslation } from 'next-i18next';
import { InferGetStaticPropsType } from 'next';
import { getStaticProps } from '@/src/components/pages/terms/props'; // Adjust the import path as necessary

export const Terms: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
    const { t } = useTranslation('homepage');

    return (
        <Layout navigation={props.navigation} categories={props.categories} pageTitle={t('seo.terms')}>
            <HtmlContentTerms dangerouslySetInnerHTML={{ __html: termsContent }} />
        </Layout>
    );
};

const HtmlContentTerms = styled.section`
    word-wrap: break-word;
    overflow-wrap: break-word;
    margin: auto;
    padding: 6rem 0rem;
    max-width: 1280px;

    h1 {
        font-size: 4rem;
        margin-bottom: 4rem;
    }
    h2,
    h3 {
        font-size: 2.5rem;
        font-weight: 600;
        line-height: 120%;
        color: #000;
        margin: 4rem 0rem;
    }
    p,
    span,
    a {
        font-size: 2rem;
        line-height: 150%;
        margin: 1.4rem 0rem;
        color: #000;
    }
    a:hover {
        color: blue;
    }
    span {
        font-style: italic;
    }
    strong {
        font-size: 2rem;
        line-height: 120%;
        font-weight: 700;
        margin-bottom: 2.4rem;
    }
    li {
        font-size: 2rem;
        line-height: 150%;
        color: #000;
        list-style: inside;
        margin: 0.4rem 0rem;
    }
    ul {
        margin-bottom: 2.4rem;
    }
    @media (max-width: 1200px) {
        h1 {
            font-size: 3.2rem;
        }
        h2,
        h3 {
            font-size: 2rem;
            margin-bottom: 2.4rem;
            margin-top: 4rem;
        }
        p,
        a {
            font-size: 1.6rem;
            margin-bottom: 2.4rem;
        }
        li {
            font-size: 1.6rem;
        }
        strong {
            font-size: 1.6rem;
        }
    }
`;

// The termsContent variable containing the HTML for the terms and conditions
export const termsContent = `<html><body>
<h1>General Terms & Conditions</h1>
<h3>1. Service</h3>
<ol>
<li>1.1 The service of Aexol Demo Shop (hereafter referred to as "Service") is provided by Aexol Sp. z o.o., a Company incorporated under Polish law, with its registered office in Bialystok at Mlawska 4/U7 street, postal code: 15-411, NIP (EU VAT/Tax Identification no.) PL5423253283, registered in the National Court Register (KRS) by the District Court in Bialystok, XII Commercial Division of the National Court Register under KRS number 0000602817, with a share capital of PLN 5000 (hereafter referred to as "Company").</li>
<li>1.2 In order to use the Service, you must first agree to the Terms & Conditions and Privacy Policy. You can agree to these regulations by using the appropriate check box. Using the Service assumes acceptance of the Terms & Conditions and Privacy Policy.</li>
<li>1.3 You may not use the Service if you are a person barred from receiving the Service under Polish law or the laws of other countries, including the country in which you are resident or from which you use the Service. The Service may not be used by children and by using it you are confirming that you are over the age of 18.</li>
<li>1.4 By using the Service you agree that its purchase is not contingent on the delivery of any future functionality or feature, or dependent on any oral or written public comments made by the Company or any of its affiliates regarding future functionalities or features.</li>
<li>1.5 The Service is ordered by the Company's client
