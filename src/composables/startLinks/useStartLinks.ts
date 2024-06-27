// Corrected definition of startLinks component and its usage
import { defineComponent, reactive } from "vue";

const createStartLink = ({ id, name, value, iconIOS, iconAndroid, icon2500, icon10000 }: {
    id: number,
    name: string,
    value: string,
    iconIOS: string,
    iconAndroid: string,
    icon2500: string,
    icon10000: string
}) => {
    return reactive({
        id,
        name,
        value,
        icon2500,
        icon10000,
        iconIOS,
        iconAndroid,
    });
};

export const useStartLinks = () => {
    const linkedingLinks = createStartLink(
        {
            id: 1,
            name: 'LinkedIn',
            value: 'https://www.linkedin.com/in/',
            icon2500: 'socialIcons/Linkedin/icons8-linkedin-48.png',
            icon10000: 'socialIcons/Linkedin/icons8-linkedin-96.png',
            iconIOS: 'socialIcons/Linkedin/icons8-linkedin-48(@1×).png',
            iconAndroid: 'socialIcons/Linkedin/icons8-linkedin-72(-hdpi).png'
        });

    const wikiLinks = createStartLink(
        {
            id: 2,
            name: 'Wikipedia',
            value: 'https://es.wikipedia.org/wiki/',
            icon2500: 'socialIcons/Wikipedia/icons8-wikipedia-50.png',
            icon10000: 'socialIcons/Wikipedia/icons8-wikipedia-100.png',
            iconIOS: 'socialIcons/Wikipedia/icons8-linkedin-72(-hdpi).png',
            iconAndroid: 'socialIcons/Wikipedia/icons8-wikipedia-50(@1×).png'
        });

    const oficialLinks = createStartLink(
        {
            id: 3,
            name: 'Oficial',
            value: 'https://',
            icon2500: 'socialIcons/Google/icons8-logo-de-google-48.png',
            icon10000: 'socialIcons/Google/icons8-logo-de-google-96.png',
            iconIOS: 'socialIcons/Google/icons8-logo-de-google-48(@1×).png',
            iconAndroid: 'socialIcons/Google/icons8-logo-de-google-48(-mdpi).png'
        });

    const gitLinks = createStartLink(
        {
            id: 4,
            name: 'GitHub',
            value: 'https://github.com/',
            icon2500: 'socialIcons/GitHub/icons8-github-50.png',
            icon10000: 'socialIcons/GitHub/icons8-github-100.png',
            iconIOS: 'socialIcons/GitHub/icons8-github-50(@1×).png',
            iconAndroid: 'socialIcons/GitHub/icons8-github-50(-mdpi).png'
        });

    return {
        linkedingLinks,
        wikiLinks,
        oficialLinks,
        gitLinks,
    };
};


