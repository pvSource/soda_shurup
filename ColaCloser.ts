class ColaCloser implements Closer {
    constructor() {
        console.log("Создали крышку Кола")
    }

    //Override
    public copy(): Closer {
        return new ColaCloser();
    }
}