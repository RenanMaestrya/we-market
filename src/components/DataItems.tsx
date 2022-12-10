
export interface ItemData {
    id: string;
    image: any;
    name: string;
    price: number;
    count: number;
  }

export const DATA: ItemData[] = [
    {
        id: '1',
        image: require('../../assets/img/macarrao.png'),
        name: "Macarrão",
        price: 1.95,
        count: 1,
    },
    {
        id: '2',
        image: require('../../assets/img/mingau.png'),
        name: "Mingau",
        price: 1.90,
        count: 1,
    },
    {
        id: '3',
        image: require('../../assets/img/ovos.png'),
        name: "Ovos",
        price: 11.90,
        count: 1,
    },
    {
        id: '4',
        image: require('../../assets/img/pepino.png'),
        name: "Pepino",
        price: 2.95,
        count: 1,
    },
    {
        id: '5',
        image: require('../../assets/img/leite.png'),
        name: "Leite",
        price: 3.60,
        count: 1,
    },
  ]