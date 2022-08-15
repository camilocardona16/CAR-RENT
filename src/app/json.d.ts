import { CarInterface } from "./core/interfaces/car.interface";

declare module "cars.json" {
    const value: CarInterface;
    export default value;
 }