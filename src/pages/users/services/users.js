import request from '../../../utils/request';

export function fetch({page}) {
    return request(`/api/users?_page=${page}&_limit=5`);
}

export function remove(id) {
    return request(`/api/users/${id}`, {
        method: 'DELETE'
    })
}

export function path(id, values) {
    return request(`/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(values)
    })
}