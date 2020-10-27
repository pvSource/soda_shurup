class PepsiLabel implements Label {
    constructor() {
        console.log("Создали этикетку Pepsi");
    }

    //Override
    public copy(): Label {
        return new PepsiLabel();
    }
}