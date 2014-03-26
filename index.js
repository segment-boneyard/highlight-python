
/**
 * Expose `python`
 */

module.exports = python;

/**
 * Add `python` as a language.
 *
 * @param {Highlight} highlight
 * @api public
 */

function python(highlight){
  highlight.language('python', python);
}

/**
 * Booleans
 */

python.boolean = /\b(true|false)\b/;

/**
 * Comments
 */

python.comment = /(?!\\{2})(#.*?$)/m;

/**
 * Classes
 */

python.class = /class +(\w+)/;
python.class.children = { keyword: /class/ };

/**
 * Keywords
 */

python.keyword = /\b(and|as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|not|or|pass|print|raise|return|try|while|with|yield)\b/;

/**
 * Numbers
 */

python.number = /\b[-+]?(0x[a-fA-F0-9]+|0b[0-1]+|0[0-7]+|[1-9][0-9]*)\b/;

/**
 * Strings
 */

python.string = /(("""|"|')(\\?.)*?\2)/;

/**
 * Functions
 */

python.function = /(\w+) *\(/;
python.function.children = { punctuation: /\(/ };

/**
 * Operators
 */

python.operator = /([-+]{1,2}|!|&lt;=?|>=?|={1,3}|&lt;{1,2}|>{1,2}|(&amp;){1,2}|\|{1,2}|\?|\*|\/|\~|\^|\%|\*\*?=)/;

/**
 * Punctuation
 */

python.punctuation = /[{}[\];(),.:]/;