interface Bottle {
    pourSoda(soda: Soda): void;
    putLabel(label: Label): void;
    seal(closer: Closer): void;

    copy(): Bottle;
}