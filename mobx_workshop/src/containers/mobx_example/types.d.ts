export type _t_params = {
    name?: string,
    lastName?: string,
}

export type _t_appStore = {
    name: string,
    lastName: string,

    setValue(params: _t_params): void
}
