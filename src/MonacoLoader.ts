export namespace MonacoLoader {
  export function load() {
    window.onload = function() {
      loadMonaco();
    };
  }

  function loadMonaco() {
    configureJavaScript();

    const containerDiv = document.getElementById("container");

    if (!containerDiv) {
      throw new Error("Cannot find container div!");
    }

    monaco.editor.create(containerDiv, {
      value: getExampleCode(),
      language: "javascript",
      automaticLayout: true
      // automaticLayout: the editor installs a timer and checks every 100ms if its container has changed size.
    });
  }

  function configureJavaScript() {
    // validation settings
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: false
    });
  }

  function getExampleCode() {
    return [
      `// TEST some JavaScript`,
      `/**`,
      `* myFun function.`,
      `*`,
      `* @param {number} n1`,
      `* @param {string} s1`,
      `*/`,
      `function myFun(n1, s1) {`,
      `  console.log('Hello from Yexit!');`,
      `}`
    ].join("\n");
  }
}
