import { reactive } from "vue";

const createTechnologies = ({ id, name, shortName, icon2500, icon10000, iconIOS, iconAndroid}: {
  id: number,
  name: string,
  shortName: string,
  iconIOS: string,
  iconAndroid: string,
  icon2500: string,
  icon10000: string
}) => {
  return reactive({
    id,
    name,
    shortName,
    icon2500,
    icon10000,
    iconIOS,
    iconAndroid,
  });
};

export const technologies = () => {
  const kubernetes = createTechnologies({
    id: 1,
    name: 'Kubernetes',
    shortName: 'ts',
    icon2500: 'photos/Kubernetes/icons8-kubernetes-48.png',
    icon10000: 'photos/Kubernetes/icons8-kubernetes-96.png',
    iconIOS: 'photos/Kubernetes/icons8-kubernetes-48(@1×).png',
    iconAndroid: 'photos/Kubernetes/icons8-kubernetes-48(-mdpi).png'
  });

  const GoogleCloud = createTechnologies({
    id: 2,
    name: 'Google Cloud Platform',
    shortName: 'GCP',
    icon2500: 'photos/GoogleCloud/icons8-nube-de-google-48.png',
    icon10000: 'photos/GoogleCloud/icons8-nube-de-google-96.png',
    iconIOS: 'photos/GoogleCloud/icons8-nube-de-google-48(@1×).png',
    iconAndroid: 'photos/GoogleCloud/icons8-nube-de-google-48(-mdpi).png',
  });

  const linux = createTechnologies({
    id: 3,
    name: 'Linux',
    shortName: 'Linux',
    icon2500: 'photos/Linux/icons8-linux-50.png',
    icon10000: 'photos/Linux/icons8-linux-100.png',
    iconIOS: 'photos/Linux',
    iconAndroid: 'photos/Linux'
  });

  const gitHub = createTechnologies({
    id: 4,
    name: 'GitHub',
    shortName: 'git',
    icon2500: 'photos/GitHub/icons8-github-50.png',
    icon10000: 'photos/GitHub/icons8-github-100.png',
    iconIOS: 'photos/GitHub/icons8-github-50(@1×).png',
    iconAndroid: 'photos/GitHub/icons8-github-50(-mdpi).png'
  });

  const jetBrain = createTechnologies({
    id: 5,
    name: 'JetBrain',
    shortName: 'JetBrain',
    icon2500: 'photos/JetBrains/icons8-cerebros-a-reacción-48.png',
    icon10000: 'photos/JetBrains/icons8-cerebros-a-reacción-96.png',
    iconIOS: 'photos/JetBrains/icons8-cerebros-a-reacción-48(@1×).png',
    iconAndroid: 'photos/JetBrains/icons8-cerebros-a-reacción-48(-mdpi).png'
  });

  const selenium = createTechnologies({
    id: 6,
    name: 'Selenium',
    shortName: 'sel',
    icon2500: 'photos/Selenium/icons8-automatización-de-pruebas-de-selenio-48.png',
    icon10000: 'photos/Selenium/icons8-automatización-de-pruebas-de-selenio-96.png',
    iconIOS: 'photos/Selenium/icons8-automatización-de-pruebas-de-selenio-48(@1×).png',
    iconAndroid: 'photos/Selenium/icons8-automatización-de-pruebas-de-selenio-48(-mdpi).png'
  });

  const jenkins = createTechnologies({
    id: 6,
    name: 'Jenkins',
    shortName: 'Jenkins',
    icon2500: 'photos/Jenkins/icons8-jenkins-48.png',
    icon10000: 'photos/Jenkins/icons8-jenkins-96.png',
    iconIOS: 'photos/Jenkins/icons8-jenkins-48(@1×).png',
    iconAndroid: 'photos/Jenkins/icons8-jenkins-48(-mdpi).png'
  });

  return {
    kubernetes,
    GoogleCloud,
    linux,
    gitHub,
    jetBrain,
    selenium,
    jenkins,
  };
};
