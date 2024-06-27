import { ref } from 'vue';

export function setupTxtExtractor() {
    const txtContent = ref<string>('');

    const loadTxt = async () => {
        try {
            const response = await fetch('/TXT/EXP.txt');
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

    return {
        txtContent,
        loadTxt,
        extractParts,
        splitContentByPeriods
    };
}


