package ru.agentd;

public class SodaBuilder {
    private SodaFactory factory;
    private Bottle bottle;

    public SodaBuilder(SodaFactory factory) {
        this.factory = factory;
        bottle = factory.createBottle();
    }

    public void pourSoda() {
        bottle.pourSoda(factory.createSoda());
    }

    public void putLabel() {
        bottle.putLabel(factory.createLabel());
    }

    public void seal() {
        bottle.seal(factory.createCloser());
    }

    public Bottle build() {
        return bottle.copy();
    }
}
