class ColaLabel implements Label {
    constructor() {
        console.log("Создали этикетку Кола");
    }

    //Override
    public copy(): Label {
        return new ColaLabel();
    }
}