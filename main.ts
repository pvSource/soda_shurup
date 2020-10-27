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

    let factory_p: SodaFactory = new PepsiFactory();
    let builder_p: SodaBuilder = new SodaBuilder(factory_p);
    builder_p.pourSoda();
    builder_p.putLabel();
    builder_p.seal();
    let bottle_1_p: Bottle = builder_p.build();
    let bottle_2_p: Bottle = builder_p.build();
    console.log(bottle_1_p == bottle_2_p);
    console.log(bottle_1_p === bottle_2_p);
}

main();