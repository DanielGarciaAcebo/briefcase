// Corrected definition of startLinks component and its usage
import { defineComponent, reactive } from "vue";

const createStartLink = (id, name, value) => {
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
        1,
        'LinkedIn',
        'www.linkedin.com/in/',
        '@/assets/socialIcons/Linkedin/icons8-linkedin-48.png',
        '@/assets/socialIcons/Linkedin/icons8-linkedin-96.png',
        '@/assets/socialIcons/Linkedin/icons8-linkedin-48(@1×).png',
        '@/assets/socialIcons/Linkedin/icons8-linkedin-72(-hdpi).png');

    const wikiLinks = createStartLink(
        2,
        'Wikipedia',
        'https://es.wikipedia.org/wiki/',
        '@/assets/socialIcons/Wikipedia/icons8-wikipedia-50.png',
        '@/assets/socialIcons/Wikipedia/icons8-wikipedia-100.png',
        '@/assets/socialIcons/Wikipedia/icons8-linkedin-72(-hdpi).png',
        '@/assets/socialIcons/Wikipedia/icons8-wikipedia-50(@1×).png');

    const oficialLinks = createStartLink(
        3,
        'Oficial',
        'https://',
        '@/assets/socialIcons/Google/icons8-logo-de-google-48.png',
        '@/assets/socialIcons/Google/icons8-logo-de-google-96.png',
        '@/assets/socialIcons/Google/icons8-logo-de-google-48(@1×).png',
        '@/assets/socialIcons/Google/icons8-logo-de-google-48(-mdpi).png');

    const gitLinks = createStartLink(
        4,
        'GitHub',
        'https://github.com/',
        '@/assets/socialIcons/GitHub/icons8-github-50.png',
        '@/assets/socialIcons/GitHub/icons8-github-100.png',
        '@/assets/socialIcons/GitHub/icons8-github-50(@1×).png',
        '@/assets/socialIcons/GitHub/icons8-github-50(-mdpi).png');

    return {
        linkedingLinks,
        wikiLinks,
        oficialLinks,
        gitLinks,
    };
};


