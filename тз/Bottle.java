package ru.agentd;

public interface Bottle {
    void pourSoda(Soda soda);
    void putLabel(Label label);
    void seal(Closer closer);

    Bottle copy();
}
