class SodaBuilder {
    private factory: SodaFactory;
    private bottle: Bottle;

    constructor(factory: SodaFactory) {
        this.factory = factory;
        this.bottle = factory.createBottle();
    }

    public pourSoda(): void {
        this.bottle.pourSoda(this.factory.createSoda());
    }

    public putLabel(): void {
        this.bottle.putLabel(this.factory.createLabel());
    }

    public seal(): void {
        this.bottle.seal(this.factory.createCloser());
    }

    public build(): Bottle {
        return this.bottle.copy();
    }
}