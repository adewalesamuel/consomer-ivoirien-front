import { Api } from './Api';

const  ENPOINTS = {
    Utilisateur: 'utilisateurs',
    Post: 'posts',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Utilisateur, signal)
}

const getPosts = (id, signal) => {
    return Api.get(`${ENPOINTS.Utilisateur}/${id}/posts`, signal);
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Utilisateur}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Utilisateur, payload, signal)
}

const createPost = (payload, signal) => {
    return Api.post(`utilisateur/${ENPOINTS.Post}`, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Utilisateur}/${id}`, payload, signal)
}

const updatePost = (id, payload, signal) => {
    return Api.put(`utilisateur/${ENPOINTS.Post}/${id}`, payload, signal)
}

const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Utilisateur}/${id}`, signal)
}

const destroyPost = (id, signal) => {
    return Api.erase(`utilisateur/${ENPOINTS.Post}/${id}`, signal)
}

export const UtilisateurService = {
    getAll,
    getById,
    create,
    update,
    destroy,
    getPosts,
    updatePost,
    destroyPost,
    createPost
}