const workflowStep = {
  id: {
    exists: { errorMessage: "id is required." },
    isString: { errorMessage: "id must be a String." },
    isLength: {
      errorMessage: "id must be at least 2 characters long.",
      options: { min: 2, max: 20 },
    },
  },
  "tasks.*.id": {
    exists: { errorMessage: "id is required." },
    isString: { errorMessage: "id must be a String." },
    isLength: {
      errorMessage: "id must be at least 2 characters long.",
      options: { min: 2, max: 20 },
    },
  },
  "tasks.*.action": {
    exists: { errorMessage: "Action is required." },
  },
  "tasks.*.parents": {
    isArray: {
      bail: true,
      options: {
        min: 0,
      },
      errorMessage: "Parents must be an array.",
    },
  },
  "tasks.*.children": {
    isArray: {
      bail: true,
      options: {
        min: 0,
      },
      errorMessage: "Children must be an array.",
    },
  },
};

module.exports = { workflowStep };
