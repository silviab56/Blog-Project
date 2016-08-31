class PostController {
    constructor(postView, requester, baseUrl, appId) {
        this._postView = postView;
        this._requester = requester;
        this._appId = appId;
        this._baseServiceUrl = baseUrl + "/appdata/" + appId + "/posts/";
    }

    showCreatePostPage(data, isLoggedIn) {
        this._postView.showCreatePostPage(data, isLoggedIn);
    }

    showEditPostPage(data, isLoggedIn) {
        this._postView.showEditPostPage(data, isLoggedIn);
    }

    createPost(requestData) {
        /*Verify posts*/
        let requestUrl = this._baseServiceUrl;
        if (requestData.title.length > 50) {
            showPopup('error', "Post title must consist of less than 50 symbols.");
            return;
        }
        if (requestData.title.length < 6) {
            showPopup('error', "Post title must consist of atleast 6 symbols.");
            return;
        }
        if (requestData.content.length < 10) {
            showPopup('error', "Post content must consist of atleast 10 symbols.");
            return;
        }

        
        this._requester.post(requestUrl, requestData,
            function success(data) {
                showPopup('success', "You have successfully created a new post.");
                /*Redirect to homepage on success*/
                redirectUrl("#/");
            },
            function error(data) {
                showPopup('error', "An error has occurred while attempting to create a new post.");
            });
    }

    editPost(requestData) {

        let requestUrl = this._baseServiceUrl + requestData._id;
        if (requestData.title.length > 50) {
            showPopup('error', "Post title must consist of less than 60 symbols.");
            return;
        }
        if (requestData.title.length < 6) {
            showPopup('error', "Post title must consist of atleast 6 symbols.");
            return;
        }
        if (requestData.content.length < 10) {
            showPopup('error', "Post content must consist of at least 10 symbols.");
            return;
        }
        delete requestData.postId;


        this._requester.put(requestUrl, requestData,
            function success(data) {
                showPopup('success', "You have successfully edited a post.");
                redirectUrl("#/");
            },
            function error(data) {
                showPopup('error', "An error has occurred while attempting to edit a post.");
            });
    }
}