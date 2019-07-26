/**
 * @ Author: Jone Chen
 * @ Create Time: 2019-07-26 10:26:01
 * @ Modified by: Jone Chen
 * @ Modified time: 2019-07-26 15:00:42
 * @ param {*} name 即将跳转的路由name
 * @ param {*} name 用户权限
 * @ Description:用户是否可跳转到该页
 */

export const filterPermission = (name, permission) => {
  if (!name || name === permission) return true;
  else return false;
};
