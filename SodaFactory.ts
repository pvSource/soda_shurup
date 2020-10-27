interface SodaFactory {
    createBottle(): Bottle;
    createSoda(): Soda;
    createLabel(): Label;
    createCloser(): Closer;
}