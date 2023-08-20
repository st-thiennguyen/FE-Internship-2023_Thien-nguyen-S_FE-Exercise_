var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Product from '../product/product.js';
export const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    let products = [];
    try {
        const res = yield fetch('../dist/data/data.json');
        console.log(res);
        if (res.status === 200) {
            let data = yield res.json();
            products = data.map((prod) => {
                return new Product(prod);
            });
        }
        else {
            console.warn('Something went wrong');
        }
        return products;
    }
    catch (error) {
        console.error(error);
        return [];
    }
});
fetchData();
