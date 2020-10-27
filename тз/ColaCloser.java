package ru.agentd;

public class ColaCloser implements Closer {
    public ColaCloser() {
        System.out.println("Создали крышку Кола");
    }

    @Override
    public Closer copy() {
        return new ColaCloser();
    }
}
