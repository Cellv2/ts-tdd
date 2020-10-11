export type Data = {
    // [key: string]: any;
    name: string;
    read: boolean;
};

class MyClass {
    getBooks(): Data[] {
        // @ts-ignore
        return JSON.parse(localStorage.getItem("books")) || [];
    }

    add(name: string) {
        const books = this.getBooks();
        books.push({ name, read: false });
        localStorage.setItem("books", JSON.stringify(books));
    }

    changeBook(prop: keyof Data, value: string | boolean, index: number) {
        const books = this.getBooks();
        const changedBooks = books.map((item, i) => {
            if (index === i) {
                // @ts-expect-error
                item[prop] = value;
            }
            return item;
        });

        localStorage.setItem("books", JSON.stringify(changedBooks));
    }
}

export default MyClass;
