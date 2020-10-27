package ru.agentd;

public interface SodaFactory {
    Bottle createBottle();
    Soda createSoda();
    Label createLabel();
    Closer createCloser();
}
