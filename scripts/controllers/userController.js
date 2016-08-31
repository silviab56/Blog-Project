class UserController{
    constructor (userView, requester, baseUrl, appKey){
        this._userView = userView;
        this._requester = requester;
        this._appKey = appKey;
        this._baseServiceUrl = baseUrl;//TODO
    }
    showLoginPage(){
        this._userView.showLoginPage();
    }

    showRegisterPage(){
        this._userView.showRegisterPage();
    }
    
}

