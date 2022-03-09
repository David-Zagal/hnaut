export const rest = {
    endpoints: {
        signin: 'api/auth/signin',
        signout: 'api/auth/logout',
        menu: 'app/mostrarMenu',
        userdata: 'app/user/user-data',
        dicodef: 'app/user/dicodef/',
        comprobarPermisos: 'app/permisos/',
        refresh: 'api/auth/refresh',
        versionBack: 'adm/monitor/infoAplicacion',
        // Files
        getFileDocumentum: 'app/file/descargaFicheroDocumento',
        //consultaFileDocumentum: 'app/dctm/consultaDocumento',
        createFileDocumentum: 'app/file/creacionDocumento',
        uploadFileDocumentum: 'app/file/subidaFicheroDocumento',
        deleteFileDocumentum: 'app/file/borradoDocumento',

        //Menu
        listOpcMenu: 'app/menu/list'
    },
    TOKEN_KEY: 'token',
    REFRESH_TOKEN_KEY: 'refreshToken',
    AUTHORIZATION_HEADER_KEY: 'Authorization'
}