export class Ship {
    name: string;
    length: number;
    constructor(name: string, length: number) {
        this.name = name;
        this.length = length;
    }
}
// export const Ship = () => {
//     class Ship {
//         name: string;
//         length: number;
//         constructor(name: string, length: number) {
//             this.name = name;
//             this.length = length;
//         }
//     }

//     const destroyer = new Ship('destroyer', 2)
//     console.log(destroyer)
//     return (
//         <div></div>
//     )
// }