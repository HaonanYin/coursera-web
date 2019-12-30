(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuy)
        .controller('AlreadyBoughtController', Bought)
        .service('ShoppingListCheckOffService', CheckOff);

    ToBuy.$inject = ['ShoppingListCheckOffService'];
    function ToBuy(CheckOff) {
        var toBuy = this;

        toBuy.shopList = CheckOff.getShopList();

        toBuy.buy = function(itemIdx) {
            CheckOff.buy(itemIdx);
        };
    }

    Bought.$inject = ['ShoppingListCheckOffService'];
    function Bought(CheckOff) {
        var boughtItems = this;

        boughtItems.items = CheckOff.getBoughtItems();
    }

    function CheckOff() {
        var service = this;
        var shopList = [
            {name: "chips", quantity: 3},
            {name: "crabs", quantity: 6},
            {name: "chocolate", quantity: 1},
            {name: "bread", quantity: 2},
            {name: "milk", quantity: 2},
        ];
        var boughtItems = [];

        service.buy = function (itemIdx) {
            var item = shopList[itemIdx];

            boughtItems.push(item);
            shopList.splice(itemIdx, 1);
        };

        service.getShopList = function () {
            return shopList;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };
    }
})();
