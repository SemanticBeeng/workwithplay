define(["require", "exports"], function (require, exports) {
    var sayings_module;
    (function (sayings_module) {
        var Greeter = (function () {
            function Greeter(message) {
                this.greeting = message;
            }
            Greeter.prototype.greet = function () {
                return "Hello, " + this.greeting;
            };
            return Greeter;
        })();
        sayings_module.Greeter = Greeter;
    })(sayings_module = exports.sayings_module || (exports.sayings_module = {}));
});
//# sourceMappingURL=sayings.js.map