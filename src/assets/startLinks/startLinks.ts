import {computed, defineComponent, ref} from "vue";

const startLinks = defineComponent({
    id: string,
    name: string,
    value: string,
})

const linkedingLinks = new startLinks({
    id: 1,
    name: 'Linkeding',
    value: 'www.linkedin.com/in/'
})

const wikiLinks = new startLinks({
    id: 2,
    name: 'Wikipedia',
    value: 'www.linkedin.com/in/'
})

const oficialLinks = new startLinks({
    id: 2,
    name: 'Oficial',
    value: 'https://www.google.com/'
})

const gitLinks = new startLinks({
    id: 3,
    name: 'Git Hub',
    value: 'www.linkedin.com/in/'
})

export default {
    linkedingLinks,
    wikiLinks,
    oficialLinks,
    gitLinks
};