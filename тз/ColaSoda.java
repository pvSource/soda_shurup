package ru.agentd;

public class ColaSoda implements Soda {
    public ColaSoda() {
        System.out.println("Создали газировку Кола");
    }

    @Override
    public Soda copy() {
        return new ColaSoda();
    }
}
