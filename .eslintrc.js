/*
 * @Author: Nana5aki
 * @Date: 2024-08-05 00:01:55
 * @LastEditors: Nana5aki
 * @LastEditTime: 2024-08-05 01:01:56
 * @FilePath: /blog_front/.eslintrc.js
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
module.exports = {
  extends: ["react-app"], // 继承 react 官方规则
  parserOptions: {
    babelOptions: {
      presets: [
        // 解决页面报错问题
        ["babel-preset-react-app", false],
        "babel-preset-react-app/prod",
      ],
    },
  },
};
