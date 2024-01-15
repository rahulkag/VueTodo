declare global {
    interface Storage {
        setObject: (key: string, value: unknown) => void;
        getObject: (key: string) => unknown;
    }
}

Storage.prototype.setObject = function (key: string, value: unknown) {
    this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key: string) {
    const value = this.getItem(key);
    if (!value) {
        return null;
    }

    return JSON.parse(value);
};