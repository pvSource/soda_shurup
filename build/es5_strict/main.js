"use strict";
var ColaBottle = (function () {
    function ColaBottle() {
        this.soda = null;
        this.label = null;
        this.closer = null;
        console.log("Создали бутылку Cola");
    }
    ColaBottle.prototype.pourSoda = function (soda) {
        if (this.closer == null) {
            this.soda = soda;
            console.log("\u041D\u0430\u043B\u0438\u043B\u0438 \u0433\u0430\u0437\u0438\u0440\u043E\u0432\u043A\u0443 " + this.soda);
        }
        else {
            console.log("Сорри... Бутылка закрыта");
        }
    };
    ColaBottle.prototype.putLabel = function (label) {
        this.label = label;
        console.log("\u041D\u0430\u043A\u043B\u0435\u0438\u043B\u0438 \u044D\u0442\u0438\u043A\u0435\u0442\u043A\u0443 " + this.label);
    };
    ColaBottle.prototype.seal = function (closer) {
        this.closer = closer;
        console.log("\u0417\u0430\u043A\u0440\u044B\u043B\u0438 \u043A\u0440\u044B\u0448\u043A\u043E\u0439 " + this.closer);
    };
    ColaBottle.prototype.copy = function () {
        var result = new ColaBottle();
        result.soda = this.soda.copy();
        result.label = this.label.copy();
        result.closer = this.closer.copy();
        return result;
    };
    return ColaBottle;
}());
var ColaCloser = (function () {
    function ColaCloser() {
        console.log("Создали крышку Кола");
    }
    ColaCloser.prototype.copy = function () {
        return new ColaCloser();
    };
    return ColaCloser;
}());
var ColaFactory = (function () {
    function ColaFactory() {
    }
    ColaFactory.prototype.createBottle = function () {
        return new ColaBottle();
    };
    ColaFactory.prototype.createSoda = function () {
        return new ColaSoda();
    };
    ColaFactory.prototype.createLabel = function () {
        return new ColaLabel();
    };
    ColaFactory.prototype.createCloser = function () {
        return new ColaCloser();
    };
    return ColaFactory;
}());
var ColaLabel = (function () {
    function ColaLabel() {
        console.log("Создали этикетку Кола");
    }
    ColaLabel.prototype.copy = function () {
        return new ColaLabel();
    };
    return ColaLabel;
}());
var ColaSoda = (function () {
    function ColaSoda() {
        console.log("Создали газировкку Кола");
    }
    ColaSoda.prototype.copy = function () {
        return new ColaSoda();
    };
    return ColaSoda;
}());
var PepsiBottle = (function () {
    function PepsiBottle() {
        this.soda = null;
        this.label = null;
        this.closer = null;
        console.log("Создали бутылку Pepsi");
    }
    PepsiBottle.prototype.pourSoda = function (soda) {
        if (this.closer == null) {
            this.soda = soda;
            console.log("\u041D\u0430\u043B\u0438\u043B\u0438 \u0433\u0430\u0437\u0438\u0440\u043E\u0432\u043A\u0443 " + this.soda);
        }
        else {
            console.log("Сорри... Бутылка закрыта");
        }
    };
    PepsiBottle.prototype.putLabel = function (label) {
        this.label = label;
        console.log("\u041D\u0430\u043A\u043B\u0435\u0438\u043B\u0438 \u044D\u0442\u0438\u043A\u0435\u0442\u043A\u0443 " + this.label);
    };
    PepsiBottle.prototype.seal = function (closer) {
        this.closer = closer;
        console.log("\u0417\u0430\u043A\u0440\u044B\u043B\u0438 \u043A\u0440\u044B\u0448\u043A\u043E\u0439 " + this.closer);
    };
    PepsiBottle.prototype.copy = function () {
        var result = new PepsiBottle();
        result.soda = this.soda.copy();
        result.label = this.label.copy();
        result.closer = this.closer.copy();
        return result;
    };
    return PepsiBottle;
}());
var PepsiCloser = (function () {
    function PepsiCloser() {
        console.log("Создали крышку Pepsi");
    }
    PepsiCloser.prototype.copy = function () {
        return new PepsiCloser();
    };
    return PepsiCloser;
}());
var PepsiFactory = (function () {
    function PepsiFactory() {
    }
    PepsiFactory.prototype.createBottle = function () {
        return new PepsiBottle();
    };
    PepsiFactory.prototype.createSoda = function () {
        return new PepsiSoda();
    };
    PepsiFactory.prototype.createLabel = function () {
        return new PepsiLabel();
    };
    PepsiFactory.prototype.createCloser = function () {
        return new PepsiCloser();
    };
    return PepsiFactory;
}());
var PepsiLabel = (function () {
    function PepsiLabel() {
        console.log("Создали этикетку Pepsi");
    }
    PepsiLabel.prototype.copy = function () {
        return new PepsiLabel();
    };
    return PepsiLabel;
}());
var PepsiSoda = (function () {
    function PepsiSoda() {
        console.log("Создали газировкку Pepsi");
    }
    PepsiSoda.prototype.copy = function () {
        return new ColaSoda();
    };
    return PepsiSoda;
}());
var SodaBuilder = (function () {
    function SodaBuilder(factory) {
        this.factory = factory;
        this.bottle = factory.createBottle();
    }
    SodaBuilder.prototype.pourSoda = function () {
        this.bottle.pourSoda(this.factory.createSoda());
    };
    SodaBuilder.prototype.putLabel = function () {
        this.bottle.putLabel(this.factory.createLabel());
    };
    SodaBuilder.prototype.seal = function () {
        this.bottle.seal(this.factory.createCloser());
    };
    SodaBuilder.prototype.build = function () {
        return this.bottle.copy();
    };
    return SodaBuilder;
}());
function main() {
    var factory = new ColaFactory();
    var builder = new SodaBuilder(factory);
    builder.pourSoda();
    builder.putLabel();
    builder.seal();
    var bottle_1 = builder.build();
    var bottle_2 = builder.build();
    console.log(bottle_1 == bottle_2);
    console.log(bottle_1 === bottle_2);
    var factory_p = new PepsiFactory();
    var builder_p = new SodaBuilder(factory_p);
    builder_p.pourSoda();
    builder_p.putLabel();
    builder_p.seal();
    var bottle_1_p = builder_p.build();
    var bottle_2_p = builder_p.build();
    console.log(bottle_1_p == bottle_2_p);
    console.log(bottle_1_p === bottle_2_p);
}
main();
//# sourceMappingURL=main.js.map