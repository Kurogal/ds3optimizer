"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var armory_service_1 = require('./armory.service');
var optimizer_1 = require('./optimizer');
var ProgressBar_1 = require('./ProgressBar');
var OptimizerComponent = (function () {
    function OptimizerComponent(_router, _armorService) {
        this._router = _router;
        this._armorService = _armorService;
        this.Progress = 0;
        this.WeaponSelectionsView = true;
    }
    OptimizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._armorService.getArmorData()
            .then(function (data) {
            _this.Armory = data;
            _this._Armory = data;
        });
    };
    OptimizerComponent.prototype.gotoArmorSelections = function () {
        var link = ['ArmorSelections'];
        this._router.navigate(link);
    };
    OptimizerComponent.prototype.gotoGameProgressSelections = function () {
        var link = ['GameProgress'];
        this._router.navigate(link);
    };
    OptimizerComponent.prototype.SetInventoryView = function (value) {
        this.WeaponSelectionsView = value;
    };
    OptimizerComponent.prototype.RunOptimization = function () {
        new optimizer_1.OptimizationEngine(this, this._Armory).ComputeOptimals();
    };
    OptimizerComponent.prototype.UpdateProgress = function (Progress) {
        this.Progress = Progress;
    };
    OptimizerComponent.prototype.RecieveResults = function (result) {
        this.OptimalArmorCombinations = result;
    };
    OptimizerComponent.prototype.DisableArmorPiece = function (piece) {
        piece.Enabled = false;
        this.RunOptimization();
    };
    OptimizerComponent.prototype.DisableArmorSet = function (SetId) {
        this.Armory.EnableDisableArmorSet(SetId, false);
        this.RunOptimization();
    };
    OptimizerComponent = __decorate([
        core_1.Component({
            selector: 'my-optimizer',
            templateUrl: 'app/optimizer.component.html',
            styleUrls: ['app/optimizer.component.css'],
            directives: [ProgressBar_1.ProgressBar]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, armory_service_1.ArmorService])
    ], OptimizerComponent);
    return OptimizerComponent;
}());
exports.OptimizerComponent = OptimizerComponent;
//# sourceMappingURL=optimizer.component.js.map