define(["require", "exports", "./sayings"], function (require, exports, sayings) {
    var greeter = new sayings.sayings_module.Greeter("world123");
    document.body.innerHTML = greeter.greet();
});
//# sourceMappingURL=greeter2.js.map