(function () {

    // Create your own kinvey application

    let baseUrl = "https://baas.kinvey.com";
    let appKey = "kid_B1eNtO6q";
    let appSecret = "276b4e89af964e34bd1e0c6c82b57858";
    let _guestCredentials = "4eeb88d7-9df5-461f-bb47-6d14c18b9d0d.vj1MajxdP6VrSaq6pdWjUCre+H/aqEnl8DEfmOMfqNo="; // Create a guest user using PostMan/RESTClient/Fiddler and place his authtoken here...

    //Create AuthorizationService and Requester

    let authService = new AuthorizationService(baseUrl, appKey, appSecret, _guestCredentials);
    let requester = new Requester(authService);

    authService.initAuthorizationType("Kinvey");

    let selector = ".wrapper";
    let mainContentSelector = ".main-content";
    let authService = new AuthorizationService(baseUrl,
            appKey,
            appSecret,
            _guestCredentials);
    authService.initAuthorizationType("Kinvey");

    let requestor = new Requester(authService);

    // Create HomeView, HomeController, UserView, UserController, PostView and PostController

    let homeView = new HomeView(mainContentSelector, selector);
    let homeController = new HomeController(homeView);

    let userView = new UserView(mainContentSelector, selector);
    let userController = new UserController(userView);

    let postView = new PostView(mainContentSelector, selector);
    let postController = new PostController(postView);


    initEventServices();

    onRoute("#/", function () {
        if(authService.isLoggedIn()){
            homeController.showUserPage();
        }
        else {
            homeController.showGuestPage();
        }
        // Check if user is logged in and if its not show the guest page, otherwise show the user page...
    });

    onRoute("#/post-:id", function () {
        // Create a redirect to one of the recent posts...
    });

    onRoute("#/login", function () {
        // Show the login page...
    });

    onRoute("#/register", function () {
        // Show the register page...
    });

    onRoute("#/logout", function () {
        // Logout the current user...
    });

    onRoute('#/posts/create', function () {
        // Show the new post page...
    });

    bindEventHandler('login', function (ev, data) {
        // Login the user...
    });

    bindEventHandler('register', function (ev, data) {
        // Register a new user...
    });

    bindEventHandler('createPost', function (ev, data) {
        // Create a new post...
    });

    run('#/');
})();
