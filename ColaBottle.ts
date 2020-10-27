class ColaBottle implements Bottle {
    private soda: Soda = null;
    private label: Label = null;
    private closer: Closer = null;

    constructor() {
        console.log("Создали бутылку Cola");
    }

    //Override
    public pourSoda(soda: Soda): void {
        if (this.closer == null) {
            this.soda = soda;
            console.log(`Налили газировку ${this.soda}`);
        } else {
            console.log("Сорри... Бутылка закрыта");
        }
    }

    //Override
    public putLabel(label: Label): void {
        this.label = label;
        console.log(`Наклеили этикетку ${this.label}`);
    }

    //Override
    public seal(closer: Closer): void {
        this.closer = closer;
        console.log(`Закрыли крышкой ${this.closer}`);
    }

    //Override
    public copy(): Bottle {
        let result: ColaBottle = new ColaBottle();
        result.soda = this.soda.copy();
        result.label = this.label.copy();
        result.closer = this.closer.copy();
        return result;
    }
}