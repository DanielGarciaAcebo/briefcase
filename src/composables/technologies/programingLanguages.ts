import { defineComponent, reactive } from "vue";

const createProgrammingLanguage = ({ id, name, shortName, framework, icon2500, icon10000, iconIOS, iconAndroid }: {
  id: number,
  name: string,
  shortName: string,
  framework: string[],
  iconIOS: string,
  iconAndroid: string,
  icon2500: string,
  icon10000: string
}) => {
  return reactive({
    id,
    name,
    shortName,
    framework,
    icon2500,
    icon10000,
    iconIOS,
    iconAndroid,
  });
};

export const programmingLanguages = () => {
  const typeScript = createProgrammingLanguage({
    id: 1,
    name: 'TypeScript',
    shortName: 'ts',
    framework: ['VueJS', 'React', 'AngularJS'],
    icon2500: 'photos/TypeScript/icons8-mecanografiado-48.png',
    icon10000: 'photos/TypeScript/icons8-mecanografiado-144.png',
    iconIOS: 'photos/TypeScript/icons8-mecanografiado-48(@1×).png',
    iconAndroid: 'photos/TypeScript/icons8-mecanografiado-48(-mdpi).png'
  });

  const javaScript = createProgrammingLanguage({
    id: 2,
    name: 'JavaScript',
    shortName: 'js',
    framework: ['VueJS', 'React', 'AngularJS'],
    icon2500: 'photos/JavaScript/icons8-javascript-50.png',
    icon10000: 'photos/JavaScript/icons8-javascript-100.png',
    iconIOS: 'photos/JavaScript/icons8-javascript-50(@1×).png',
    iconAndroid: 'photos/JavaScript/icons8-javascript-50(-mdpi).png'
  });

  const python = createProgrammingLanguage({
    id: 3,
    name: 'Python',
    shortName: 'py',
    framework: ['Django', 'Flask'],
    icon2500: 'photos/Python/icons8-python-48.png',
    icon10000: 'photos/Python/icons8-python-96.png',
    iconIOS: 'photos/Python/icons8-python-48(@1×).png',
    iconAndroid: 'photos/Python/icons8-python-48(-mdpi).png'
  });

  const golang = createProgrammingLanguage({
    id: 4,
    name: 'Golang',
    shortName: 'go',
    framework: [],
    icon2500: 'photos/Golang/golang_vertical_logo_icon_171071.png',
    icon10000: 'photos/Golang/',
    iconIOS: 'photos/Golang/',
    iconAndroid: 'photos/Golang/'
  });

  const php = createProgrammingLanguage({
    id: 5,
    name: 'Personal Home Page',
    shortName: 'php',
    framework: ['Laravel'],
    icon2500: 'photos/PHP/icons8-php-50.png',
    icon10000: 'photos/PHP/icons8-php-100.png',
    iconIOS: 'photos/',
    iconAndroid: 'photos/'
  });

  const java = createProgrammingLanguage({
    id: 6,
    name: 'Java',
    shortName: 'java',
    framework: ['Spring Boot', 'Node JS'],
    icon2500: 'photos/Java/icons8-logotipo-de-java-coffee-cup-48.png',
    icon10000: 'photos/Java/icons8-logotipo-de-java-coffee-cup-96.png',
    iconIOS: 'photos/Java/icons8-logotipo-de-java-coffee-cup-48(@1×).png',
    iconAndroid: 'photos/Java/icons8-logotipo-de-java-coffee-cup-48(-mdpi).png'
  });

  return {
    typeScript,
    javaScript,
    python,
    golang,
    php,
    java,
  };
};
