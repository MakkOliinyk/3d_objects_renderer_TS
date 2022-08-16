const fs = require('fs');
const readline = require('readline');

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
        const fileStream = fs.createReadStream(this.path);
        const lineReader = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        const vertex = [];
        const vectors = [];
        const indexes = [];

        lineReader.on('line', (line) => {
            const words = line.split(' ').filter((word) => word !== '');

            if (words.length === 0 || words[0] === '#') return;

            const parameter = words.shift();

            if (parameter === 'v') vertex.push(this.handleWords(words));
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

            return;
        });

        return [vertex, vectors, indexes];
    }
}
