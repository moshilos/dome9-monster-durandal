/**
 * Created by Moshi on 21/09/2014.
 */
define(['knockout'],function (ko) {
    function UsersViewModel() {
        var self = this;

        self.data = ko.observable('Moshi');

    }

    return new UsersViewModel();
});