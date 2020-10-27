package ru.agentd;

public class ColaFactory implements SodaFactory {
    @Override
    public Bottle createBottle() {
        return new ColaBottle();
    }

    @Override
    public Soda createSoda() {
        return new ColaSoda();
    }

    @Override
    public Label createLabel() {
        return new ColaLabel();
    }

    @Override
    public Closer createCloser() {
        return new ColaCloser();
    }
}
