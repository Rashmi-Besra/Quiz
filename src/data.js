//THIS IS fallback

const data = [
  {
    question: 'What is the purpose of the useState hook in React?',
    options: ['To fetch API data', 'To manage component state', 'To manage lifecycle events', 'To create context'],
    key: 2,
  },
  {
    question: "Which method converts JSON data to a JavaScript object?",
    options: [
      'JSON.toObject()',
      'JSON.parse()',
      'JSON.stringify',
      'JSON.convert()',
    ],
    key: 2,
  },
  {
    question:
      'What will NaN ===NaN return?',
    options: ['true', 'false', 'NaN', 'Error'],
    key: 2,
  },
  {
    question: 'Which of the following is a correct way to empty an array?',
    options: [
      'arrayName.empty();',
      'arrayName.splice(0, arrayList.length);',
      'arrayName = null;',
      'arrayName = Obejct.empty();',
    ],
    key: 2,
  },
  {
    question:
      'Which of the following is true about JSX',
    options: [
      'It is a template language ',
      'It is valid JavaScript ',
      'It must be compiled before use ',
      'Both b and c',
    ],
    key: 4,
  },
  {
    question: 'Which hook is used to perform side effects in React functional components',
    options: [
      'useState()',
      'useEffect()',
      'useContext()',
      'useReducer()',
    ],
    key: 2,
  },
  {
    question:
      'Which ofthe following is not true about React',
    options: [
      'React uses a virtuall DOM',
      'JSX must be transpiled before use',
      'React updates the entire DOM on every render ',
      'React can be used with Redux for state management',
    ],
    key: 3,
  },
];

module.exports = data;
