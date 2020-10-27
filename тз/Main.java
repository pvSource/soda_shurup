package ru.agentd;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;



public class Main {

    public static void main(String[] args) {
        SodaFactory factory = new ColaFactory();
        SodaBuilder builder = new SodaBuilder(factory);
        builder.pourSoda();
        builder.putLabel();
        builder.seal();
        Bottle bottle1 = builder.build();
        Bottle bottle2 = builder.build();
        System.out.println(bottle1 == bottle2);
    }
}