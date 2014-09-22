define(['jquery', 'knockout'],
    function($, ko){
        function PageViewModel($, ko){
            var self = this;
            self.active = ko.observable({name: '', action: ''});
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
                self.title(this.name);
                self.getData();
            };

            self.title = ko.observable();
            self.data = ko.observableArray();

            self.getMenu();
            self.setActive.apply(self.menu()[0]);
        }

        return new PageViewModel($, ko);
    }
)
//(function($, ko, global){
//    var Page = global.Page = function(){
//        var self = this;
//        self.active = ko.observable({name: '', action: ''});
//        self.menu = ko.observableArray();
//
//        self.getMenu = function(){
//            self.menu([
//                {
//                    name: 'Dashboard',
//                    action: 'dashboard'
//                },
//                {
//                    name: 'Servers',
//                    action: 'servers'
//                },
//                {
//                    name: 'Users',
//                    action: 'users'
//                }
//            ]);
//        };
//
//        self.getData = function(){
//            var data = {
//                dashboard: [
//                    {name: 'Alon'},
//                    {name: 'Moshi'},
//                    {name: 'Tomer'},
//                    {name: 'Arie'}
//                ],
//                servers: [
//                    {name: 'Server 1'},
//                    {name: 'Server 2'},
//                    {name: 'Server 3'}
//                ],
//                users: [
//                    {name: 'Alon'},
//                    {name: 'Moshi'}
//                ]
//            };
//
//            self.data(data[self.active().action]);
//        };
//
//        self.title = ko.observable();
//        self.data = ko.observableArray();
//
//        self.setActive = function(){
//            self.active(this);
//            self.title(this.name);
//            self.getData();
//        };
//
//        self.title = ko.observable();
//        self.data = ko.observableArray();
//
//        self.getMenu();
//        self.setActive.apply(self.menu()[0]);
//    }
//})(jQuery, ko, window);