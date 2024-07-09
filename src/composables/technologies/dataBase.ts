import { reactive } from "vue";

const createDataBase = ({ id, name, shortName,  icon2500, icon10000, iconIOS, iconAndroid}: {
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

export const dataBase = () => {
  const mongoDB = createDataBase({
    id: 1,
    name: 'MongoDB',
    shortName: 'Mongo',
    icon2500: 'photos/Mongodb/icons8-mongodb-48.png',
    icon10000: 'photos/Mongodb/icons8-mongodb-96.png',
    iconIOS: 'photos/Mongodb/icons8-mongodb-48(@1×).png',
    iconAndroid: 'photos/Mongodb/icons8-mongodb-48(-mdpi).png'
  });

  const sql = createDataBase({
    id: 2,
    name: ' Structured Query Language',
    shortName: 'SQL',
    icon2500: 'photos/SQL/icons8-sql-48.png',
    icon10000: 'photos/SQL/icons8-sql-96.png',
    iconIOS: 'photos/SQL/',
    iconAndroid: 'photos/SQ/'
  });

  const atlas = createDataBase({
    id: 3,
    name: 'Atlas SQL',
    shortName: 'Atlas',
    icon2500: 'photos/Atlas/icons8-atlas-32.png',
    icon10000: 'photos/Atlas/icons8-atlas-96.png',
    iconIOS: 'photos/Atlas/',
    iconAndroid: 'photos/Atlas/icons8-atlas-48(-hdpi).png'
  });

  return {
    mongoDB,
    sql,
    atlas,
  };
};
