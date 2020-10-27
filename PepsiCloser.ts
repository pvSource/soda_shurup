class PepsiCloser implements Closer {
    constructor() {
        console.log("Создали крышку Pepsi")
    }

    //Override
    public copy(): Closer {
        return new PepsiCloser();
    }
}