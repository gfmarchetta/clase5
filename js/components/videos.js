export default class Video {
    constructor(url, width, height, css_class){
        this.url = url;
        this.width = width;
        this.height = height;
        this.css_class = css_class;
    }

    render() {
        let myHTML =
            `<video type="button" class=${this.css_class} controls>
                <source src=${this.url} type="video/mp4">
            </video>`;
        return myHTML;
    }
}