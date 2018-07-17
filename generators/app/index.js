"use strict";
const path = require("path");
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  prompting() {
    this.username = "";
    return this.prompt({
      type: "input",
      name: "username",
      message: "GitHub username ?",
      store: true
    }).then(answers => {
      this.username = answers.username;
    });
  }

  writing() {
    let packageName = path.basename(process.cwd());
    let author = this.username;

    const filesForCopy = ["src", "tsconfig.json", "tslint.json"];
    filesForCopy.forEach(f => {
      this.fs.copy(this.templatePath(f), this.destinationPath(f));
    });

    const varz = {
      packageName,
      author,
      repoUrl: `https://github.com/${author}/${packageName}`
    };

    ["package.json", "README.md"].map(fn =>
      this.fs.copyTpl(this.templatePath(fn), this.destinationPath(fn), varz)
    );
  }

  install() {
    this.npmInstall();
  }
};
