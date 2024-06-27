import { ref } from 'vue';


export function setupTxtExtractor() {
    const txtContent = ref<string>('');

    const loadTxt = async () => {
        try {
            const response = await fetch("../TXT/EXP.txt");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const text = await response.text();
            txtContent.value = text;
            console.log(txtContent.value)
        } catch (error) {
            console.error('Failed to load text file:', error);
        }
    };

    return {
        txtContent,
        loadTxt,
    };
}

