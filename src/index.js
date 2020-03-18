function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    const numberStack = expr.match(/[0-9]+/g);
    const operatorStack = expr.match(/\+|-|\*|\/|\(|\)/g);
    // const priorityStack = {'+':1,'-':1,'*':2,'/':2,'(':3,')':3};

    const findDeepestBrackets = expr.match(/\([^()]*\)/); 
    
    // 1) match(/\([^()]*\)/) 2) split(/(\([^()]*\))/) 3) match(/\([^()]*\)/) 4) replace(/ /g, "").replace(/\((.*)\)/,"$1");
    // 5) .replace(/ /g, "").replace(/^\((.*)\)$/,"$1") 

    numberStack.forEach((element, index, array) => {
      element
    });
    
    const parseParenthesis = (expr) => {
       return parsePlus(expr.replace(/ /g, "").replace(/^\((.*)\)$/,"$1"));
    };

    const parsePlus = (expr) => {
        return expr.split('+')
          .map(item => parseMinus(item))
          .reduce((acc, item) => +acc + +item)
    };
    
      const parseMinus = (expr) => {
        return expr.split('–')
          .map(item => parseMultiply(item))
          .reduce((acc, item) => acc - item)
    };
    
      const parseMultiply = (expr) => {
        return expr.split('*')
          .map(item => parseDivide(item))
          .reduce((acc, item) => acc * item)
    };
    
      const parseDivide = (expr) => {
        return expr.split('/')
          .map(item => parseParenthesis(item))
          .reduce((acc, item) => acc / item)
    };
    
}

module.exports = {
    expressionCalculator
}



93 * 30 / 81 * (  78 * 83 / (  71 * 13 - (  14 + 13 - 28 * 62  ) * 62  ) + 99 - (  80 - 89 + 17 * 42  )  )