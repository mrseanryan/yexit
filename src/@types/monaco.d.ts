declare namespace monaco {
  namespace editor {
    function create(div: any, options: any): void;
  }

  namespace languages {
    namespace typescript {
      namespace javascriptDefaults {
        function addExtraLib(text: string): void;
        function setDiagnosticsOptions(options: any): void;
      }
    }
  }
}
