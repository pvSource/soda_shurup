class PepsiSoda implements Soda {
    constructor() {
        console.log("Создали газировкку Pepsi");
    }

    //Override
    public copy(): Soda {
        return new ColaSoda();
    }
}