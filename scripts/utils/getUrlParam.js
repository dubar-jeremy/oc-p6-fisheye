/* eslint-disable no-unused-vars */
function getUrlParam(param){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}