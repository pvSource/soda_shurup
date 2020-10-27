package ru.agentd;

public class ColaLabel implements Label {
    public ColaLabel() {
        System.out.println("Создали этикетку Кола");
    }

    @Override
    public Label copy() {
        return new ColaLabel();
    }
}
