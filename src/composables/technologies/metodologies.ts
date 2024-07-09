import { reactive } from "vue";

const createMethodologies = ({ id, name, shortName  }: {
  id: number,
  name: string,
  shortName: string,
}) => {
  return reactive({
    id,
    name,
    shortName,

  });
};

export const methodologies = () => {
  const agile = createMethodologies({
    id: 1,
    name: 'Agile',
    shortName: 'Agile',
  });

  const frontToBack = createMethodologies({
    id: 2,
    name: 'Arquitectura Front To Back',
    shortName: 'FTB',
  });

  const microservicios = createMethodologies({
    id: 3,
    name: 'Arquitectura de Microservicios',
    shortName: 'Atlas',
  });

  const testUnitariasFuncionales = createMethodologies({
    id: 4,
    name: 'Test Unitarias y Funcionales',
    shortName: 'Test',
  });

  return {
    agile,
    frontToBack,
    microservicios,
    testUnitariasFuncionales
  };
};
