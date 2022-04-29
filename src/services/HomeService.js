import { Api } from './Api';

const  ENPOINTS = {
    Home: 'home',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Home, signal)
}

export const HomeService = {
    getAll
}