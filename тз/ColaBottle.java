package ru.agentd;

public class ColaBottle implements Bottle {
    private Soda soda = null;
    private Label label = null;
    private Closer closer = null;

    public ColaBottle() {
        System.out.println("Создали бутылку Cola");
    }

    @Override
    public void pourSoda(Soda soda) {
        if (closer == null) {
            this.soda = soda;
            System.out.println("Налили газировку");
        } else {
            System.out.println("Бутылка закрыта");
        }
    }

    @Override
    public void putLabel(Label label) {
        this.label = label;
        System.out.println("Наклеили этикетку");
    }

    @Override
    public void seal(Closer closer) {
        this.closer = closer;
        System.out.println("Закрыли крышкой");
    }

    @Override
    public Bottle copy() {
        ColaBottle result = new ColaBottle();
        result.soda = soda.copy();
        result.label = label.copy();
        result.closer = closer.copy();
        return result;
    }
}
