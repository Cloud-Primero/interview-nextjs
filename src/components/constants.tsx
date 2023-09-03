
enum Category {
    Laptop = "Laptop",
    Mobile = "Mobile",
    Bag = "Bag",
    PC = "PC",
    Headphones = "Headphones"
}

enum Color {
    Black = "Black",
    Grey = "Grey",
    Silver = "Silver",
    White = "White",
    Blue = "Blue",
    Red = "Maroon",
    Green = "Sea Green",
}

export type TableRowType =  {
    name: string;
    color: Color;
    category: Category;
    accesories: string;
    availabe: boolean;
    price: string;
    weight: string;
}

export const defaultItems: TableRowType[] = [
    {
        name: "Apple MacBook Pro 17",
        color: Color.Silver,
        category: Category.Laptop,
        accesories: "Yes",
        availabe: true,
        price: "$2999",
        weight: "3.0 lb",
    },
    {
        name: "OnePlus 8T",
        color: Color.Black,
        category: Category.Mobile,
        accesories: "No",
        availabe: true,
        price: "$500",
        weight: "0.5 lb",
    },
    {
        name: "Lenovo Legion",
        color: Color.Black,
        category: Category.Laptop,
        accesories: "No",
        availabe: true,
        price: "$1800",
        weight: "4.0 lb",
    },
]