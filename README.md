# java-quarkus-application-template

This is an AsyncAPI generator template for creating Java + Quarkus applications. It uses Handlebars templating to generate a skeleton project based on an AsyncAPI specification.

## File Structure
- `template/`: Contains the Handlebars templates for generating the project files.
- `hooks/`: Contains JavaScript hooks for customizing the generation process.
- `.gitignore`: Specifies files and folders to ignore in version control.
- `package.json`: Defines the template's metadata and dependencies.

## Usage
1. Install the AsyncAPI Generator:
   ```bash
   npm install -g @asyncapi/generator


### to generate project and start the project run: 
	```bash
	ag asyncapi.yaml ./java-quarkus-application