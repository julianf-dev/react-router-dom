/* Este Array simula una API que contenga nuestros datos, estos
cargarán dinámicamente el contenido a los fake blogs */

export interface blogData {
    id: number,
    title: string,
    slug: string,
    content: string,
    author: string,
}

export const data: blogData[] = [];

data.push({
    id: 0,
    title: '¿Que es React?',
    slug: 'que-es-react',
    content: 'React es el mejor Framework de JavaScript, que lindo React',
    author: 'Andrés Rodríguez'
});

data.push({
    id: 1,
    title: '¿Que es Vue?',
    slug: 'que-es-vue',
    content: 'Vue es el mejor Framework de JavaScript, que lindo Vue',
    author: 'Andrés Rodríguez'
});

data.push({
    id: 2,
    title: '¿Que es Angular?',
    slug: 'que-es-angular',
    content: 'Angular esta bien, que lindo React XD',
    author: 'Andrés Rodríguez'
});

data.push({
    id: 3,
    title: '¿Que es Svelte?',
    slug: 'que-es-svelte',
    content: 'Svelte es el mejor Framework de JavaScript, que lindo Svelte',
    author: 'Andrés Rodríguez'
});
