const fs = require('fs');

export class FileReader {
    path: string;

    private handleWords(words) {
        const result = [];

        words.forEach(x => result.push(Number(x)));

        return result;
    }

    constructor(path: string) {
        this.path = path;
    }

    read() {
        const lines = fs.readFileSync(this.path, 'utf-8')
            .split('\r\n')
            .filter(Boolean);

        const vertexes = [];
        const vectors = [];
        const indexes = [];

        lines.forEach((line) => {
            const words = line.split(' ').filter((word) => word !== '');

            if (words.length === 0 || words[0] === '#') return;

            const parameter = words.shift();

            if (parameter === 'v') vertexes.push(this.handleWords(words));
            else if (parameter === 'vn') vectors.push(this.handleWords(words));
            else if (parameter === 'f') {
                indexes.push(
                    words.map(word => word
                        .split('/')
                        .filter((i) => i !== '')
                        .map(x => Number(x))
                    )
                );
            }
        });

        return [vertexes, vectors, indexes];
    }
}
