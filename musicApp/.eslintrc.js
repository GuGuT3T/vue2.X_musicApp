// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off', // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eol-last': 0, // 允许最后一行可以为空
    "space-before-function-paren": 0, // 函数定义时括号前面要不要有空格
    'no-extra-semi': 0, // 可以多余的冒号
    "semi": 0, // 语句可以不需要分号结尾
    "semi-style": ["off", "last"],
    "no-multi-spaces": 2, // 不能用多余的空格

    "key-spacing": [0, { // 对象字面量中冒号的前后空格
      "beforeColon": false,
      "afterColon": false
    }],
    'indent': 'off', // 不验证缩进
    "no-irregular-whitespace": 2, //不允许出现不规则的空格
    "no-empty": 2, //不允许出现空的代码块
    // "no-undef": 0,//不能有未定义的变量
    "no-unused-vars": [0, {
      "vars": "all",
      "args": "after-used"
    }], //不能有声明后未被使用的变量或参数
    "no-tabs":"off"
  }
}
