const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todo List Test Suite", () => {
    beforeAll(() => {
        const today = new Date();
        const oneDay = 3600 * 24 * 1000;
        [{
                title: "paytm",
                completed: false,
                dueDate: new Date(today.getTime() - 2 * oneDay).toLocaleDateString(
                    "en-CA"
                ),
            },
            {
                title: "Phonepe",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-CA"),
            },
            {
                title: "instagram",
                completed: false,
                dueDate: new Date(today.getTime() + 2 * oneDay).toLocaleDateString(
                    "en-CA"
                ),
            },
        ].forEach(add);
    });
    test("checks creating a new todo", () => {
        expect(all.length).toEqual(3);
        add({
            title: "eat Apple",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA"),
        });

        expect(all.length).toEqual(4);
    });

    test("checking todo list is competed or not", () => {
        expect(all[0].completed).toEqual(false);
        markAsComplete(0);
        expect(all[0].completed).toEqual(true);
    });

    test("checking overdue", () => {
        expect(overdue().length).toEqual(1);
    });

    test("checking due tests tiday", () => {
        expect(dueToday().length).toEqual(2);
    });

    test("checking due later todo works", () => {
        expect(dueLater().length).toEqual(1);
    });
});