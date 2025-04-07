module.exports = {
  // Example hook: Modify the AsyncAPI document before generation
  'generate:before': (generator) => {
    console.log('Running before generation hook...');
    // Add your custom logic here
  },
};