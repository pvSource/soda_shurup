class ColaFactory implements SodaFactory {
    //Override
    public createBottle(): Bottle {
        return new ColaBottle();
    }

    //Override
    public createSoda(): Soda {
        return new ColaSoda();
    }

    //Override
    public createLabel(): Label {
        return new ColaLabel();
    }

    //Override
    public createCloser(): Closer {
        return new ColaCloser();
    }
}