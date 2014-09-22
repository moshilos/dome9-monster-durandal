define(['durandal/app','plugins/router', 'jquery', 'knockout'],
    function(app,router, $, ko){
        function PageViewModel(router, $, ko){

            var self = this;


            self.active = ko.observable({name: '', action: ''});
            self.active = ko.observable();
            self.menu = ko.observableArray();

            self.getMenu = function(){
                self.menu([
                    {
                        name: 'Dashboard',
                        action: 'dashboard'
                    },
                    {
                        name: 'Servers',
                        action: 'servers'
                    },
                    {
                        name: 'Users',
                        action: 'users'
                    }
                ]);
            };

            self.getData = function(){
                var data = {
                    dashboard: [
                        {name: 'Alon'},
                        {name: 'Moshi'},
                        {name: 'Tomer'},
                        {name: 'Arie'}
                    ],
                    servers: [
                        {name: 'Server 1'},
                        {name: 'Server 2'},
                        {name: 'Server 3'}
                    ],
                    users: [
                        {name: 'Alon'},
                        {name: 'Moshi'}
                    ]
                };

                self.data(data[self.active().action]);
            };

            self.title = ko.observable();
            self.data = ko.observableArray();

            self.setActive = function(){
                self.active(this);
                var url = '#' + self.active().action;
                router.navigate(url)
            };

            self.goHome = function(){
                self.active(null);
                router.navigate('')
            }

            self.getMenu();

            self.activate = function() {
                router.map([{
                        route: '',
                        title: 'Home',
                        moduleId: 'viewmodels/home',
                        nav: true
                    },{
                        route: 'dashboard',
                        title: 'Dashboard',
                        moduleId: 'viewmodels/dashboard',
                        nav: true
                    },{
                        route: 'servers',
                        title: 'Servers',
                        moduleId: 'viewmodels/servers',
                        nav: true
                    },{
                        route: 'users',
                        title: 'Users',
                        moduleId: 'viewmodels/users',
                        nav: true
                    }]).buildNavigationModel();

                return router.activate();
            };

        }

        return new PageViewModel(router, $, ko);
    }
)