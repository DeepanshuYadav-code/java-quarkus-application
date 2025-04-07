// This file is a placeholder for customization hooks.
// Hooks allow you to modify the AsyncAPI document or the generated files dynamically.
// For example, you can add custom logic to transform the AsyncAPI document before rendering templates.

module.exports = {
  // Example hook: Modify the AsyncAPI document before generation
  'generate:before': (generator) => {
    console.log('Running before generation hook...');
    // Add your custom logic here
  },
};