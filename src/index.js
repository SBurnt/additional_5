module.exports = function check(str, bracketsConfig) {
  // your solution
  let check, configStr;

  while (true) {
    check = false;
    bracketsConfig.forEach(config => {
      configStr = config.join('');
      if (str.includes(configStr)) {
        str = str.replace(configStr, '');
        check = true;
      }
    });
    if (!check) break;
  }

  return (str.length === 0) ? true : false;
}