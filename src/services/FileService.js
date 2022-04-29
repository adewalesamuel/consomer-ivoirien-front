import { Api } from './Api';

const  ENPOINTS = {
    File: 'upload',
};

const store = (signal, payload) => {
    return Api.postFormData(ENPOINTS.File, payload, signal)
}

export const FileService = {
    store
}