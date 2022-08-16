const fs = require('fs');

class FileWriter {
    path: string;

    constructor(path) {
        this.path = path;
    }

    write(data) {
        fs.writeFileSync(this.path, data);
    }
}
