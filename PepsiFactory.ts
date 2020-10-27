class PepsiFactory implements SodaFactory {
    //Override
    public createBottle(): Bottle {
        return new PepsiBottle();
    }

    //Override
    public createSoda(): Soda {
        return new PepsiSoda();
    }

    //Override
    public createLabel(): Label {
        return new PepsiLabel();
    }

    //Override
    public createCloser(): Closer {
        return new PepsiCloser();
    }
}