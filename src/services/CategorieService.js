import { Api } from './Api';

const  ENPOINTS = {
    Categorie: 'categories',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Categorie, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Categorie}/${id}`, signal);
}

const getAllPostByPage = (id, page=1, signal) => {
    return Api.get(`${ENPOINTS.Categorie}/${id}/posts?page=${page}`, signal);

}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Categorie, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Categorie}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Categorie}/${id}`, signal)
}

export const CategorieService = {
    getAll,
    getAllPostByPage,
    getById,
    create,
    update,
    destroy
}