angular.module('app', []).controller('MainCtrl', function($scope) {
    var vm = this;
    
    vm.charges = {
        subtotal: 0.00,
        tip: 0.00,
        total: 0.00
    };
    
    vm.earnings = {
        tipTotal: 0.00,
        mealCount: 0,
        tipPerMeal: 0.00
    };
    
    $scope.submit = function() {
        calculateTax();
        calculateSubtotal();
        calculateTip();
        calculateTotal();
        updateTipTotal();
        updateMealCount();
        calculateAverageTip();
        vm.mealDetails = {};
    };
    
    $scope.cancel = function() {
      vm.mealDetails = {};  
    };
    
    $scope.reset = function() {
      vm.charges = {
        subtotal: 0.00,
        tip: 0.00,
        total: 0.00
        };
      vm.earnings = {
        tipTotal: 0.00,
        mealCount: 0,
        tipPerMeal: 0.00
        };
      vm.mealDetails = {};
    };
    
    function calculateTax() {
        vm.charges.tax = Number(vm.mealDetails.mealPrice) * Number(vm.mealDetails.taxRate) / 100;
    }
    function calculateSubtotal() {
        vm.charges.subtotal = Number(vm.mealDetails.mealPrice) + vm.charges.tax;
    }
    
    function calculateTip() {
        vm.charges.tip = vm.charges.subtotal * Number(vm.mealDetails.tipPercentage) / 100;
    }
    
    function calculateTotal() {
        vm.charges.total = vm.charges.subtotal + vm.charges.tip;
    }
    
    function updateTipTotal() {
        vm.earnings.tipTotal += vm.charges.tip;
    }
    
    function updateMealCount() {
        vm.earnings.mealCount += 1;
    }
    
    function calculateAverageTip() {
        vm.earnings.tipPerMeal = vm.earnings.tipTotal / vm.earnings.mealCount;
    }
});