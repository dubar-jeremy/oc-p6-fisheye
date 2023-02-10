/* eslint-disable no-unused-vars */
function queryBuilder({ page, query }) {

    let url = window.location.origin + '/oc-p6-fisheye/';

    if (page) {
        url += page
    }

    if (query) {
        url += '?'
        Object.keys(query).forEach((key, index) => {
            const value = query[key];
            url += `${key}=${value}`;
            if (index !== Object.keys(query).length - 1) {
                url += '&';
            }
        });
    }

    return url;
}