import request from '../../../utils/request';

export function fetch({page}) {
    return request(`/api/users?_page=${page}&_limit=5`);
}