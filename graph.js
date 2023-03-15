/*

   2  - 0
 /  \
1 - 3

*/

//1- Edge List

const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

//2- Adjacent List

    //Array de Arrays
    const graph2 = [
    [2], //Indice 0
    [2, 3], //Indice 1
    [0, 1, 3], //Indice 2
    [1, 2], //Indice 3
    ];

    //Hash table (objeto)
    const graph3 = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2],
    };

//3- Adjacent Matrix

    //Array de Arrays
    const graph4 = [
    //Indice 0, como conecta con el indice 2, pongo 1. Si no hay conexion pongo 0.
    //indice0.conexiones -> [indice0=false, indice1=false, indice2=true, indice3=false];
    [0, 0, 1, 0],
    //indice 1,conecta con los indices 2 y 3.
    //indice1.conexiones -> [indice0=false, indice1=false, indice2=true, indice3=true];
    [0, 0, 1, 1],
    //indice 2, conecta con los indices 0, 1 y 3.
    [1, 1, 0, 1],
    //indice 3, conecta con los indices 1 y 2.
    [0, 1, 1, 0],
    ];

    //Hash table (objeto)
    const graph5 = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0],
    };
