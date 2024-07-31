/*
 * @Author: lvxr
 * @LastEditTime: 2024-07-31 23:58:27
 */
export const useLinkList = () => {
  const navArr = [
    { name: '杂谈', to: '/' },
    { name: 'C++', to: '/' },
    { name: 'Golang', to: '/' },
    { name: '大前端', to: '/' },
    { name: '后端', to: '/' },
    { name: '关于', to: '/' }
  ];

  return {
    navArr
  };
}