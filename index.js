// index.js

// 1. introduction(name)
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  // 2. introductionWithLanguage(name, language)
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // 3. introductionWithLanguageOptional(name, language)
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  