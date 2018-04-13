var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/4154543904_6e2428c421_z.jpg');
    this.imgAttribution = ko.observable('');

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());