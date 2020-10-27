class ColaSoda implements Soda {
    constructor() {
        console.log("Создали газировкку Кола");
    }

    //Override
    public copy(): Soda {
        return new ColaSoda();
    }
}