const getParamObj = () => {
  const params = window.location.search.substring(1).split("&");
  const paramObj = {};
  params.forEach((param) => {
    const keyVal = param.split("=");
    paramObj[keyVal[0]] = keyVal[1];
  });
  return paramObj;
};

export const getChannelIdFromUrl = () => {
  return getParamObj().channel;
};

export const getSendorFromUrl = () => {
  return getParamObj().sendor;
};


