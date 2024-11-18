const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const artInstituteChicagoConfig = {
  apiKey: getEnvironmentVariable("ART_INSTITUTE_CHICAGO_API_KEY"),
  baseUrl: getEnvironmentVariable("ART_INSTITUTE_CHICAGO_BASE_URL"),
};
