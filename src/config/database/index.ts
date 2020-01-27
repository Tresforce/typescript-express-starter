const {
  TYPEORM_HOST,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_DATABASE
} = process.env;

const database = {
  typeormHost: TYPEORM_HOST,
  port: 5432,
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_DATABASE
};

export default database;
