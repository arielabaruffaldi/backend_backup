import fs from 'fs/promises';
import path from 'path';
import { getRandom } from '../utils/getRandom';

const itemsFile = path.join(__dirname, '..', 'assets', 'products.txt');


let visitas = {
    items: 0,
    item: 0
}

export const getItems = async (req, res) => {
    visitas.items++;
    try {
        const items = JSON.parse(await fs.readFile(itemsFile));
        res.json({ items: items, total: items.length });
    } catch (error) {
        console.log(error);
    }
};

export const getRandomItem = async (req, res) => {
    visitas.item++;
    try {
        const items = JSON.parse(await fs.readFile(itemsFile));
        const randomId = getRandom(0, items.length);
        const item = items[randomId];
        res.json(item);
    } catch (error) {
        console.log(error);
    }
};

export const getVisitas = async (req, res) => {
    try {
        res.json({ visitas: visitas })
    } catch (error) {
        console.log(error);
    }
};