var ViewModel = function () {
    var self = this;

    //Slot hinzufügen
    self.addSlot = function () {
        self.slots.push(new playerSpot("Bert Bertington", 5));
    }
    //Slots entfernen
    self.removeSlot = function (slot) {
        self.slots.remove(slot);
    }

    self.slots = ko.observableArray([
    ]);

    var vm = this;
    //Eine Tabellenzeile
    function playerSpot(name, sc) {
        var self = this;
        self.name = name;
        self.ShipCount = ko.observable(sc);
        self.Portion = ko.computed(function () { //Anteil in dezimal
            var sc = self.ShipCount();
            var total = sc / vm.totalShipCount();
            return total.toFixed(2);
        });
        self.Percentage = function (value) { //Anteil in %
            var result = value * 100;
            return result.toFixed(2) + "%";
        };
        self.Cr = ko.computed(function () {
            return Math.floor((vm.CrAfter() - vm.CrBefore()) * self.Portion());
        });
        self.Nrg = ko.computed(function () {
            return Math.floor((vm.NrgAfter() - vm.NrgBefore()) * self.Portion());
        });
        self.Rek = ko.computed(function () {
            return Math.floor((vm.RekAfter() - vm.RekBefore()) * self.Portion());
        });
        self.Ore = ko.computed(function () {
            return Math.floor((vm.OreAfter() - vm.OreBefore()) * self.Portion());
        });
        self.Org = ko.computed(function () {
            return Math.floor((vm.OrgAfter() - vm.OrgBefore()) * self.Portion());
        });
        self.Syn = ko.computed(function () {
            return Math.floor((vm.SynAfter() - vm.SynBefore()) * self.Portion());
        });
        self.Fe = ko.computed(function () {
            return Math.floor((vm.FeAfter() - vm.SynBefore()) * self.Portion());
        });
        self.Lm = ko.computed(function () {
            return Math.floor((vm.LmAfter() - vm.LmBefore()) * self.Portion());
        });
        self.Sm = ko.computed(function () {
            return Math.floor((vm.SmAfter() - vm.SmBefore()) * self.Portion());
        });
        self.Em = ko.computed(function () {
            return Math.floor((vm.EmAfter() - vm.EmBefore()) * self.Portion());
        });
        self.Rad = ko.computed(function () {
            return Math.floor((vm.RadAfter() - vm.RadBefore()) * self.Portion());
        });
        self.Es = ko.computed(function () {
            return Math.floor((vm.EsAfter() - vm.EsBefore()) * self.Portion());
        });
        self.Eg = ko.computed(function () {
            return Math.floor((vm.EgAfter() - vm.EgBefore()) * self.Portion());
        });
        self.Iso = ko.computed(function () {
            return Math.floor((vm.IsoAfter() - vm.IsoBefore()) * self.Portion());
        });
    }

    self.totalShipCount = function () {
        var total = 0;
        for (var i = 0; i < self.slots().length; i++) {
            total += parseInt(self.slots()[i].ShipCount());
        }
        return total;
    }
    //Ressourcen vor und nach der Jagd
    self.CrBefore = ko.observable(0);
    self.NrgBefore = ko.observable(0);
    self.RekBefore = ko.observable(0);
    self.OreBefore = ko.observable(0);
    self.OrgBefore = ko.observable(0);
    self.SynBefore = ko.observable(0);
    self.FeBefore = ko.observable(0);
    self.LmBefore = ko.observable(0);
    self.SmBefore = ko.observable(0);
    self.EmBefore = ko.observable(0);
    self.RadBefore = ko.observable(0);
    self.EsBefore = ko.observable(0);
    self.EgBefore = ko.observable(0);
    self.IsoBefore = ko.observable(0);

    self.CrAfter = ko.observable(0);
    self.NrgAfter = ko.observable(0);
    self.RekAfter = ko.observable(0);
    self.OreAfter = ko.observable(0);
    self.OrgAfter = ko.observable(0);
    self.SynAfter = ko.observable(0);
    self.FeAfter = ko.observable(0);
    self.LmAfter = ko.observable(0);
    self.SmAfter = ko.observable(0);
    self.EmAfter = ko.observable(0);
    self.RadAfter = ko.observable(0);
    self.EsAfter = ko.observable(0);
    self.EgAfter = ko.observable(0);
    self.IsoAfter = ko.observable(0);

    
}

var vm = new ViewModel();
vm.addSlot("P1", 10);

ko.applyBindings(vm);