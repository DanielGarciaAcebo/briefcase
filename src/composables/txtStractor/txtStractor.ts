import { ref } from 'vue';

export function setupTxtExtractor() {
    const txtContent = ref<string>('');

    const loadTxt = async (url:string) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const text = await response.text();
            txtContent.value = text;
        } catch (error) {
            console.error('Failed to load text file:', error);
        }
    };

    const extractParts = () => {
        const parts = txtContent.value.split(/->\d/).slice(1);
        const extracted = parts.map((part, index) => {
            const marker = `->${index + 1}`;
            return { marker, content: part.trim() };
        });
        return extracted;
    };

    const splitContentByPeriods = (content: string) => {
        return content.split('.').map(sentence => sentence.trim()).filter(sentence => sentence.length > 0);
    };

    const txt  = (x: string) =>{
        switch (x) {
            case x = 'exp':{
                return x = '/TXT/exp.txt'
            }
            case x = 'bio':{
                return x = '/TXT/biography.txt'
            }
            default: {
                throw new Error('Unknown text type');
            }
        }
    };

    return {
        txtContent,
        loadTxt,
        extractParts,
        splitContentByPeriods,
        txt
    };
}


