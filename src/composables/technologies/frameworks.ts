import { reactive } from "vue";

const createFrameworks = ({ id, name, shortName, language, icon2500, icon10000, iconIOS, iconAndroid }: {
  id: number,
  name: string,
  shortName: string,
  language: string,
  iconIOS: string,
  iconAndroid: string,
  icon2500: string,
  icon10000: string
}) => {
  return reactive({
    id,
    name,
    shortName,
    language,
    icon2500,
    icon10000,
    iconIOS,
    iconAndroid,
  });
};

export const frameworks = () => {
  const vueJS = createFrameworks({
    id: 1,
    name: 'VueJS',
    shortName: 'Vue',
    language: 'TypeScript o JavaScript',
    icon2500: 'photos/Vuejs/icons8-vuejs-48.png',
    icon10000: 'photos/Vuejs/icons8-vuejs-144.png',
    iconIOS: 'photos/Vuejs/icons8-vuejs-48(@1×).png',
    iconAndroid: 'photos/Vuejs/icons8-vuejs-48(-mdpi).png'
  });

  const react = createFrameworks({
    id: 2,
    name: 'React',
    shortName: 'React',
    language: 'TypeScript o JavaScript',
    icon2500: 'photos/React/icons8-reaccionar-30.png',
    icon10000: 'photos/React/icons8-reaccionar-80.png',
    iconIOS: 'photos/React/icons8-reaccionar-40(@1×).png',
    iconAndroid: 'photos/React/icons8-reaccionar-40(-mdpi).png'
  });

  const angularJS = createFrameworks({
    id: 3,
    name: 'AngularJS',
    shortName: 'Angular',
    language: 'TypeScript o JavaScript',
    icon2500: 'photos/Angular/icons8-angular-48.png',
    icon10000: 'photos/Angular/icons8-angular-96.png',
    iconIOS: 'photos/Angular/icons8-angular-48(@1×).png',
    iconAndroid: 'photos/Angular/icons8-angular-48(-mdpi).png'
  });

  const laravel = createFrameworks({
    id: 4,
    name: 'Laravel',
    shortName: 'Laravel',
    language: 'PHP',
    icon2500: 'photos/Laravel/icons8-laravel-50.png',
    icon10000: 'photos/Laravel/icons8-laravel-100.png',
    iconIOS: 'photos/Laravel/',
    iconAndroid: 'photos/Laravel/'
  });

  const django = createFrameworks({
    id: 5,
    name: 'Django',
    shortName: 'Django',
    language: 'Python',
    icon2500: 'photos/Django/icons8-django-a-high-level-python-web-framework-that-encourages-rapid-development-48.png',
    icon10000: 'photos/Django/icons8-django-a-high-level-python-web-framework-that-encourages-rapid-development-96.png',
    iconIOS: 'photos/Django/icons8-django-a-high-level-python-web-framework-that-encourages-rapid-development-48(-xhdpi).png',
    iconAndroid: 'photos/Django/icons8-django-a-high-level-python-web-framework-that-encourages-rapid-development-48(-xhdpi).png'
  });

  const flask = createFrameworks({
    id: 6,
    name: 'Flask',
    shortName: 'Flask',
    language: 'Python',
    icon2500: 'photos/Flask/icons8-matraz-50.png',
    icon10000: 'photos/Flask/icons8-matraz-250.png',
    iconIOS: 'photos/Flask/icons8-matraz-50(@1×).png',
    iconAndroid: 'photos/Flask/icons8-matraz-50(-mdpi).png'
  });

  const nodeJS = createFrameworks({
    id: 7,
    name: 'NodeJS',
    shortName: 'Node',
    language: 'Java',
    icon2500: 'photos/NodeJS/icons8-nodo-js-32.png',
    icon10000: 'photos/NodeJS/icons8-nodo-js-96.png',
    iconIOS: 'photos/NodeJS/icons8-nodo-js-64(@2×).png',
    iconAndroid: 'photos/NodeJS/icons8-nodo-js-48(-hdpi).png'
  });

  const springBoot = createFrameworks({
    id: 8,
    name: 'Spring Boot',
    shortName: 'Spring',
    language: 'Java',
    icon2500: 'photos/SpringBoot/icons8-logotipo-de-primavera-48.png',
    icon10000: 'photos/SpringBoot/icons8-logotipo-de-primavera-96.png',
    iconIOS: 'photos/SpringBoot/icons8-logotipo-de-primavera-48(@1×).png',
    iconAndroid: 'photos/SpringBoot/icons8-logotipo-de-primavera-48(-mdpi).png'
  });

  return {
    vueJS,
    react,
    angularJS,
    django,
    flask,
    laravel,
    springBoot,
    nodeJS
  };
};
