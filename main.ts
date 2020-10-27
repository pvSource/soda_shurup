function main(): void {
    let factory: SodaFactory = new ColaFactory();
    let builder: SodaBuilder = new SodaBuilder(factory);
    builder.pourSoda();
    builder.putLabel();
    builder.seal();
    let bottle_1: Bottle = builder.build();
    let bottle_2: Bottle = builder.build();
    console.log(bottle_1 == bottle_2);
    console.log(bottle_1 === bottle_2);
}

main();