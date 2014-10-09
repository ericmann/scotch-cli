# scotch-cli
> The Scotch command line interface.

Install this globally and you'll have access to the `scotch` command anywhere on your system.

```shell
npm install -g scotch-cli
```

**Note:** The job of the `scotch` command is to load and run the version of Scotch you have installed locally to your project, irrespective of its version.

## Shell tab auto-completion
To enable tab auto-completion for Scotch, add one of the following lines to your `~/.bashrc` or `~/.zshrc` file.

```bash
# Bash, ~/.bashrc
eval "$(scotch --completion=bash)"
```

```bash
# Zsh, ~/.zshrc
eval "$(scotch --completion=zsh)"
```

## Installing scotch-cli locally
If you prefer the idiomatic Node.js method to get started with a project (`npm install && npm test`) then install scotch-cli locally with `npm install scotch-cli --save-dev`. Then add a script to your `package.json` to run the associated scotch command: `"scripts": { "test": "scotch test" } `. Now `npm test` will use the locally installed `./node_modules/.bin/scotch` executable to run your Scotch commands.

To read more about npm scripts, please visit the npm docs: [https://npmjs.org/doc/misc/npm-scripts.html](https://npmjs.org/doc/misc/npm-scripts.html).